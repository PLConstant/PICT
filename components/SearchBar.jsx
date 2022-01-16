const SearchBar = () => {
  return(
    <div className='flex flex-col w-3/4 justify-center items-center'>
      <h1 className='text-xl text-center w-screen text-blue-900 font-bold self-center'>Welcome to REC&apos;t - An image search service but <i>better</i></h1>
      <input className='my-6 py-5 px-2 h-8 w-1/3 min-w-200 rounded' type='text' />
    </div>
  )
}

export default SearchBar