import Image from 'next/image'
import PhotoCard from './PhotoCard';
import { useContext, useEffect } from 'react';
import { PageContext } from '../pages';
import useSWR from 'swr'
import Doggo from './ErrorDog';


// Pexels API requires you send your fetch with an auth header whose value is your API key.
// This is exported because it's also needed in getServerSideProps within pages/index.js.
export const token = {
  headers: {
    "Authorization": process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  }
};

// firstRender is the props object getServerSideProps generates on the application's first load.
const Viewer = ({ firstRender, pageNum }) => {
  
  // Viewer never modifies the context object, so we only need to destructure the object 
  // and we can ignore the function needed to modify it.
  const [ pageDetails, updatePage ] = useContext(PageContext)
  const { display, query, pageLimit } = pageDetails

  // This ternary allows us to switch between the curated and search API endpoints.
  const route = display === 'search' ? 
  `search?query=${query}&`:
  'curated?';

  // ...this is an obvious line of code but everything else in this file has a comment above it.
  const URI = `https://api.pexels.com/v1/${route}&page=${pageNum}&per_page=10`
  
  // Here is our mastermind. If you've never seen it before, read the short novel at the bottom of this file.
  const { data, error } = useSWR([URI, token], {fallbackData: firstRender});
  if (error) console.log(error)
  
  if (data.photos && data.photos.length) {
    const newLimit = Math.ceil(data.total_results / 10)
    if (newLimit !== pageLimit) {
      updatePage({...pageDetails, pageLimit: newLimit})
    }
  }

  return (
    <div className='flex flex-wrap min-h-full border-1 border-gray-200/50 w-screen bg-slate-600 justify-around relative'>
      {/* data will have at most ten items in photos. There is a conditional loading component in
          the event the user spams the 'next' button faster than useSWR is able to keep up. */}
      {data.photos && data.photos.length ? 
       data.photos.map((photo) => <PhotoCard key={photo.id.toString()} props={photo}/>) : 
       data.photos ? 
      //  a 204 error page if a user's search yields no results
       <Doggo/> :
       <p>Loading...</p>}
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



/*
How do I think I can structure the app to slide my divs like I want to?

The page loads. A div is in focus. It is assigned photos and keeps them.
"Next" is clicked; The div begins to slide off screen to the left, revealing the "next page".
The animation finishes and the div immediately re-appears, also rendering the "next" page. 
There is no flicker, the user is unaware of the layer piling.
The animation finishes and the under-layer switches to the next page.

** "next" calls are debounced for the duration of the animation **
-- gotta learn about throttling and debouncing to make this production grade code --

  THERE is one viewer component, and one render component.
The viewer has two layers. The Background layer which is a fetch to the NEXT page.

We have the 'Slider'layer which will preserve currentState and slide it off left or right.
We have 'Background' layer which will inherit next or prev onClick.
The 'Next' layer which will useSWR to fetch the next page.
The 'Prev' layer which will useSWR to fetch the previous page.

We useState to hold photosets.
one for thesePhotos, one for nextPhotos.
changeThesePhotos(nextPhotos)
getNextPhotos(useSWR(url blah blah page + 1, token)) <-- data data multiline func

getServerSideProps = (): props => {get and return page 1}
const [thesePhotos, changePhotos] = useState(props)
const [prevPhotos, getPrevious] = useState(props)
const [nextPhotos, getNext] = useState(useSWR(page+1))

getPrevious(() => {
  page > 1 ?
  return { data } = useSWR(page-1) :
  nothing;
})

getNext(() => {
  page < lastPage ?
  return { data } = useSWR(page+1) :
  nothing;
})

changePage = (direction) => {
  direction === next ?
    page < lastPage ? changePhotos(nextPhotos) : null;
    page > 1 ? changePhotos(prevPhotos) : null;
}

ON PAGINATE!!! 
paginate(next) =  {
  -Background layer inherits nextPhotos.
  -getPrevious & getNext are triggered - functions are then debounced for 333ms
  -Slider begins moving to the left, animation transition for 333ms
  -Wait 330 ms and then Slider = changePhotos(nextPhotos) 
  -debounce expires and Slider sneakily rerenders on top of Background
  -prevPhotos and nextPhotos are queued and everything is set to be triggered again
}


*/