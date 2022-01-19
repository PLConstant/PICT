import { PageContext } from '../pages';
import { useContext } from 'react';

const Doggo = () => {
  const [pageDetails, updatePage] = useContext(PageContext)

  // return to the homepage (curated)
  const goHome = () => {
    updatePage({...pageDetails, page: 1, display: 'curated'})
  }

  // a good old HTTP statusDog to tell a user their search returned no results
  return (
    <div
      className='flex h-1/3 w-1/3 relative z-10 justify-around m-10'
      onClick={goHome}
    >
      <button
        className='h-8 w-8 right-4 top-4 absolute p-1 rounded-full bg-white/40'
      >
        X
      </button>
      <img
        src='/no_content.png'
        alt='Sorry, your search returned no results.'
        className='h-full w-full rounded-md self-center'
        layout='fill'
        object-fit='contain'
      />
    </div>
  )
}

export default Doggo
