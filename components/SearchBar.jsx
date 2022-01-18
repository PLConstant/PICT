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
    <div 
    className='flex flex-col justify-center items-center'
    >
      <p 
      className='text-2xl text-center w-screen text-cyan-800/60 font-bold self-center'
      >
        PICT: images in an instant.
      </p>
      <input 
      className='my-6 py-5 px-2 h-8 w-1/3 min-w-200 rounded' 
      value={query}
      onChange={handleChange}
      onKeyPress={handleKeypress}
      />
      {pageDetails.display === 'search' ?
        <img
          src='/home_button.png'
          alt='Home'
          height={35}
          width={35}
          className='hover:bg-green-100/50 rounded-md p-1'
          onClick={() => updatePage({...pageDetails, display: 'curated', page: 1})}
        /> :
      null}
    </div>
  )
}

export default SearchBar