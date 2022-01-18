import SearchBar from './SearchBar'
import { useContext } from 'react'
import { PageContext } from '../pages'

const Header = () => {
  // destructure the context object and the function needed to modify it
  // from the context provider (via useContext hook)
  const [pageDetails, updatePage] = useContext(PageContext)
 
 
 // Pagination function. Updates the context object to increment
 // or decrement the page number property.
const changePage = (direction) => {
  direction === "next" ? 
  updatePage({...pageDetails, page: pageDetails.page + 1}) :
  pageDetails.page > 1 ?
  updatePage({...pageDetails, page: pageDetails.page - 1}) :
  null;
}


  // returns the pagination button components whose  onClick's
  // both point to changePage. Passing in 'next' or 'back' accordingly.
  // Also renders the SearchBar component between the buttons.
  return (
    <div 
    className='flex h-1/4 w-screen bg-slate-400 justify-between'
    >
     
      <button 
      onClick={() => changePage("back")}
      className='w-56 border-2 bg-black text-white'>
      {"<-- Prev"}
      </button>

      <SearchBar/>

      <button 
      onClick={() => changePage("next")}
      className='w-56 border-2 bg-black text-white'>
      {"Next -->"}
      </button>
        
    </div>
  )
}

export default Header
