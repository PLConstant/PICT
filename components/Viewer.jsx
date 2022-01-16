import useSWR from 'swr'

// Cast the traditional fetching function to a variable.
// this is syntactic sugar which later makes useSWR more readable.
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Viewer = () => {

  const { data, error } = useSWR("URI", fetcher);

  return (
    <div className='flex flex-wrap border-4 border-gray-200/50 h-3/4 w-screen bg-slate-600 justify-between'>
      
    </div>
  )
}

export default Viewer
