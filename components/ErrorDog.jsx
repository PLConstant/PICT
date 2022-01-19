import { PageContext } from '../pages';
import { useContext } from 'react';

const Doggo = () => {
  const [pageDetails, updatePage] = useContext(PageContext)

  const goHome = () => {
    updatePage({...pageDetails, page: 1, display: 'curated'})
  }

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
        className='h-full w-full rounded-md self-center'
        layout='fill'
        object-fit='contain'
      />
    </div>
  )
}

export default Doggo
