import PhotoCard from './PhotoCard';
import useSWR from 'swr'

// Cast the traditional fetching function to a variable.
// this is syntactic sugar which later makes useSWR more readable.
const fetcher = (...args) => fetch(...args).then(res => res.json())
const token = {
  headers: {
    "Authorization": process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  }
};
const URI = `https://api.pexels.com/v1/curated?page=1&per_page=10`;

// The Viewer may show:
// - Up to ten PhotoCard components
// - a loading screen
// - an error/message screen
const Viewer = () => {

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

  const { data, error } = useSWR([URI, token], fetcher);

console.log('swr', data);


  return (
    <div className='flex flex-wrap border-4 border-gray-200/50 min-h-3/4 w-screen bg-slate-600 justify-around'>
      {data ? data.photos.map((photo) => {
        return <PhotoCard key={photo.id.toString()} props={photo}/>
      }) : <p>Loading...</p>}
    </div>
  )
}

// Server Side Render the first page of the application: curated page 1
export async function getServerSideProps() {
  const res = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=10`, token);
  const data = await res.json();
  console.log('gssp', data);
  if (!data) return {error: true};
  return {
    props: { data }
  }
}

export default Viewer
