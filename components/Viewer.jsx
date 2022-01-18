import Image from 'next/image'
import PhotoCard from './PhotoCard';
import { useContext } from 'react';
import { PageContext } from '../pages';
import useSWR from 'swr'


// Pexels API requires you send your fetch with an auth header whose value is your API key.
// This is exported because it's also needed in getServerSideProps within pages/index.js.
export const token = {
  headers: {
    "Authorization": process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  }
};

// firstRender is the props object getServerSideProps generates on the application's first load.
const Viewer = ({ firstRender, pageNum}) => {
  

  // Viewer never modifies the context object, so we only need to destructure the object 
  // and we can ignore the function needed to modify it.
  const [ pageDetails ] = useContext(PageContext)
  const { display, query,} = pageDetails

  // This ternary allows us to switch between the curated and search API endpoints.
  const route = display === 'search' ? 
  `search?query=${query}&`:
  'curated?';

  // ...this is an obvious line of code but everything else in this file has a comment above it.
  const URI = `https://api.pexels.com/v1/${route}&page=${pageNum}&per_page=10`
  
  // Here is our mastermind. If you've never seen it before, read the short novel at the bottom of this file.
  const { data, error } = useSWR([URI, token], {fallbackData: firstRender});
  

  return (
    <div className='flex flex-wrap border-1 min-h-full border-gray-200/50 w-screen bg-slate-600 justify-around relative'>
      {/* data will have at most ten items in photos. There is a conditional loading component in
          the event the user spams the 'next' button faster than useSWR is able to keep up. */}
      {data.photos ? data.photos.map((photo) => {
        return <PhotoCard key={photo.id.toString()} props={photo}/>
      }) : <p>Loading...</p>}
     <Image 
      src='/viewer.png'
      className='z-0'
      layout='fill'
      />
    </div>
  )
}

export default Viewer

/*
--IF YOU'RE UNFAMILIAR WITH useSWR--

useSWR is why this app is so fast. There is a lot you can do with it but you can think of 
it as a memoized fetch function. It saves all calls passed into it to a cache where the 
input URL is the key and the returned data is the value. Upon any invocation it will first 
check the cache. If the URL is already in it, it returns the data from memory.
On any given page that a user is viewing, the hidden Viewer component within pages/index.js 
makes a fetch request to the FOLLOWING page. This way when they click 'next', the API's
following page is already within the cache and therefore appears to the user as if it loaded
instantly. Syntax appears a little strange. First parameter is the desired endpoint, in the
event your fetch request also needs extra arguments, (like how ours needs to be sent with an
authorization header and API key) pass an array as the first argument whose 0th index is the 
URL, all following arguments filling the rest of the array. Usually the second argument is 
a 'fetcher' - the traditional fetch request syntax cast to a variable - but because the _app 
component is wrapped in the SWRConfig provider, we don't need to do that in this file.
Finally, useSWR will return the fallbackData as its data while it takes the time it needs to
fulfill promises. This is why our application has API images rendered as soon as the client
accesses it. 
*/
