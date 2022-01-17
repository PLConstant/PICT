import SearchBar from './SearchBar'
import { useContext, useState } from 'react'
import { PageContext } from '../pages'
// import backgroundImage from './white_marble.PNG'
const Header = () => {
  const [pageDetails, updatePage] = useContext(PageContext)
 
  // Search bar functionality will dispatch that a search has been executed, along with a parsed query string
  // Home button will dispatch the return to our curated homepage
 
const changePage = (direction) => {
  direction === "next" ? 
  updatePage({...pageDetails, page: pageDetails.page + 1}) :
  pageDetails.page > 1 ?
  updatePage({...pageDetails, page: pageDetails.page - 1}) :
  null;
}

  return (
    <div 
    className='flex h-1/4 w-screen bg-slate-400 justify-between'
    // style={backgroundImage}
    >
     {/* fancy onHover work for later */}
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
