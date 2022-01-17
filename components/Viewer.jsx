import PhotoCard from './PhotoCard';
import { useContext } from 'react';
import { PageContext, token } from '../pages';
import useSWR, { useSWRConfig } from 'swr'

// Cast the traditional fetching function to a variable.
// this is syntactic sugar which later makes useSWR more readable.
// const fetcher = (...args) => fetch(...args).then(res => res.json())

// The Viewer may show:
// - Up to ten PhotoCard components
// - a loading screen
// - an error/message screen
const Viewer = ({ firstRender, pageNum}) => {
    // , fetcher
  // Error will display error message and can be used to share future specific messages we may have for the users.
  const { cache } = useSWRConfig()
  console.log('...cache?', cache)

  const [ pageDetails ] = useContext(PageContext)
  const { display, page, query,} = pageDetails

  const route = display === 'search' ? 
  `search?query=${query}&`:
  'curated?';

  const URI = `https://api.pexels.com/v1/${route}&page=${pageNum}&per_page=10`
  
  const { data, error } = useSWR([URI, token], {fallbackData: firstRender});
  

  return (
    <div className={`flex flex-wrap border-4 border-gray-200/50 min-h-3/4 w-screen bg-slate-600 justify-around`}>
      {data ? data.photos.map((photo) => {
        return <PhotoCard key={photo.id.toString()} props={photo}/>
      }) : <p>Loading...</p>}
    </div>
  )
}



export default Viewer
