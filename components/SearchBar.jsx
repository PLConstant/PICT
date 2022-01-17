import { useState, useContext } from "react";
import { PageContext, token } from '../pages';

const SearchBar = () => {

  const [ pageDetails, updatePage ] = useContext(PageContext)  

  // in theory, the SWR cache could work exactly the same if it were placed in this component instead of viewport.
  // Consider restructuring the application such that "search" becomes more of a "head" to viewport as "body"
  
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };


  const handleKeypress = e => {
  if (e.key === 'Enter') {
    setQuery(query = query.replace(' ', '+'))
    handleSubmit();
  }
};

const handleSubmit = () => {
  updatePage({display: 'search', page: 1, query: query})
  console.log(pageDetails)
  setQuery("");
};

  return(
    // a parent flex container set to arrange its children centered along a column
    // occupying 3/4ths of its paternal width in order to spread the buttons a reasonable distance away from itself
    <div className='flex flex-col w-3/4 justify-center items-center'>
      <h1 className='text-xl text-center w-screen text-blue-900 font-bold self-center'>Welcome to REC&apos;t - An image search service but <i>better</i></h1>
      {/* A simple text field set to be responsive but with a minimum width */}
        <input 
        className='my-6 py-5 px-2 h-8 w-1/3 min-w-200 rounded' 
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        />
    </div>
  )
}

export default SearchBar