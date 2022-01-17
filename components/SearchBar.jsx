const SearchBar = () => {
  // ... what if the search bar makes the fetch requests and parses the data?
  // search bar holds state to know if it's being invoked or not.
  // if the pagination is dispatched while search is not being invoked, it fetches to curated.
  // and if pagination is dispaltched while search is being invoked, it fetches to search.
  // we're aming to parse the data as identically as possible in either case, 
  // so coding this logic here to pass a static typed data variable to the viewport may make sense.
  // the viewport would only need to recieve data.
  // in theory, the SWR cache could work exactly the same if it were placed in this component instead of viewport.
  // this is being considered to better balance how much code is wrriten across the various component files of this codebase.
  
  return(
    // a parent flex container set to arrange its children centered along a column
    // occupying 3/4ths of its paternal width in order to spread the buttons a reasonable distance away from itself
    <div className='flex flex-col w-3/4 justify-center items-center'>
      <h1 className='text-xl text-center w-screen text-blue-900 font-bold self-center'>Welcome to REC&apos;t - An image search service but <i>better</i></h1>
      {/* A simple text field set to be responsive but with a minimum width */}
      <input className='my-6 py-5 px-2 h-8 w-1/3 min-w-200 rounded' type='text' />
    </div>
  )
}

export default SearchBar