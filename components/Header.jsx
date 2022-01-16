import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='flex h-1/4 w-screen bg-slate-400 justify-between'>
      <button className='w-56 border-2 bg-black text-white'>{"<-- Prev"}</button>
      <SearchBar/>
      <button className='w-56 border-2 bg-black text-white'>{"Next -->"}</button>
    </div>
  )
}

/*
This is my header component.
I would like it to occupy the top quarter of the screen.
At flex-start and flex-end we will have our pagination buttons. 
occupying the full container height.

*/

export default Header
