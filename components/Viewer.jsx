import PhotoCard from './PhotoCard';
import { useContext } from 'react';
import { PageContext, token } from '../pages';
import useSWR from 'swr'

// Cast the traditional fetching function to a variable.
// this is syntactic sugar which later makes useSWR more readable.
const fetcher = (...args) => fetch(...args).then(res => res.json())

// The Viewer may show:
// - Up to ten PhotoCard components
// - a loading screen
// - an error/message screen
const Viewer = ({ firstRender, pageNum, displayMode }) => {
  
  // The loading screen will be hard coded... (cute animation?)
  // Error will display error message and can be used to share future specific messages we may have for the users.
  // The primary funcitonality of Viewer follows:
  // - Create a "current photos" stateful variable
  // - Use serverside rendering to preRender the first page of the api
  // - Create a "next photos" variable stateful variable
  // - always be displaying currentPhotos
  // - On first pageLoad, useSWR to get the API's following page
  // - leverage SWR's caching ability to store *all* pages we've loaded
  // - hold "previous photos" in a stateful variable
  // - Parse data to handle either means of fetch request exactly the same. Keep it simple.
  // - Handle logic to return data by curated *or* search responses.
  // - Take API state (Curated || Search) as props.
  // - Take pagination and Search events as props so that they trigger methods

  const [ pageDetails ] = useContext(PageContext)
  const URI = `https://api.pexels.com/v1/curated?page=${pageNum}&per_page=10`;
  const { data, error } = useSWR([URI, token], fetcher, {fallbackData: firstRender});


 const display = displayMode === 'hidden' ? 'hidden' : ''

  return (
    <div className={`${display} flex flex-wrap border-4 border-gray-200/50 min-h-3/4 w-screen bg-slate-600 justify-around`}>
      {data ? data.photos.map((photo) => {
        return <PhotoCard key={photo.id.toString()} props={photo}/>
      }) : <p>Loading...</p>}
    </div>
  )
}



export default Viewer
