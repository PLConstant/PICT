import SearchBar from './SearchBar'
import { useContext } from 'react'
import { PageContext } from '../pages'
import Image from 'next/image'

const Header = () => {
  
  // destructure the context object and the function needed to modify it
  // from the context provider (via useContext hook)
  const [pageDetails, updatePage] = useContext(PageContext)
  const { page, pageLimit } = pageDetails;
 
 // Pagination function. Updates the context object to increment
 // or decrement the page number property.
const changePage = (direction) => {
  direction === "next" && page < pageLimit? 
  updatePage({...pageDetails, page: page + 1}) :
  page > 1 ?
  updatePage({...pageDetails, page: page - 1}) :
  null;
}

const buttonTheme = {
  canClick : 'bg-zinc-400/60 hover:border-2 hover:bg-amber-100/20 hover:text-slate-700 hover:drop-shadow-md',
  cantClick: 'bg-zinc-400/20 hover:bg-transparent hover:text-transparent hover:cursor-default'
}

const enableNext = page < pageLimit ? buttonTheme.canClick : buttonTheme.cantClick;
const enableBack = page > 1 ? buttonTheme.canClick : buttonTheme.cantClick;

  // returns the pagination button components whose onClick's
  // both point to changePage. Passing in 'next' or 'back' accordingly.
  // Also renders the SearchBar component between the buttons.
  return (
    <div 
    className='flex h-1/4 w-screen bg-slate-900 justify-between relative'
    >
      <button 
        onClick={() => changePage("back")}
        className={`w-56 text-amber-50 text-3xl z-10 ${enableBack}`}
      >
        Prev <p className='text-5xl'>⇦</p>
      </button>
      <div className='w-3/4 z-10 self-center' >
        <SearchBar/>
      </div>
      <button 
        onClick={() => changePage("next")}
        className={`w-56 text-amber-50 text-3xl z-10 ${enableNext}`}
      >
        Next <p className='text-5xl'>⇨</p>
      </button> 
      <Image 
        src='/header.png'
        className='z-0'
        objectFit='cover'
        layout='fill'
      />
    </div>
  )
}

export default Header
