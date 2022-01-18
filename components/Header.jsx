import SearchBar from './SearchBar'
import { useContext } from 'react'
import { PageContext } from '../pages'
import Image from 'next/image'

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

const buttonTheme = pageDetails.page > 1 ?
'bg-zinc-400/60 hover:border-2 hover:bg-amber-100/20 hover:text-slate-700 hover:drop-shadow-md':
'bg-zinc-400/20 hover:bg-transparent hover:text-transparent';

  // returns the pagination button components whose  onClick's
  // both point to changePage. Passing in 'next' or 'back' accordingly.
  // Also renders the SearchBar component between the buttons.
  return (
    <div 
    className='flex h-1/4 w-screen bg-slate-900 justify-between relative'
    >
      <button 
      onClick={() => changePage("back")}
      className={`w-56 ${buttonTheme} text-amber-50 text-3xl z-10`}>
      Prev <p className='text-5xl'>⇦</p>
      </button>
      <div className='w-3/4 z-10 self-center' >
        <SearchBar/>
      </div>
      <button 
      onClick={() => changePage("next")}
      className='w-56 hover:border-2 bg-zinc-400/60 text-amber-50 text-3xl hover:bg-amber-100/20 hover:text-slate-700 hover:drop-shadow-md z-10'>
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
