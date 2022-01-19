import Image from 'next/image'

// API photo object holds all these properties and more.
// Feel free to console.log(props) to view other options.
const PhotoCard = ({ props }) => {
  const { alt, photographer, photographer_url, avg_color, src } = props
  const pic = src.medium;


  return (
      <div 
      className='flex flex-col h-fit rounded m-4 w-fit relative z-10 drop-shadow-lg'
      style={{backgroundColor: avg_color}}
      >
        <img
          className='mt-3 mx-3'
          src={pic}
          alt={alt}
          // loading="eager"
          layout="fill"
          object-fit='contain'
        />
        <div 
        className='flex rounded-b h-10 w-full'
        style={{backgroundColor: avg_color}}
        >
          <a
          href={photographer_url}
          target="_blank"
          className='pl-2 pr-1 py-1 my-1 mr-0 ml-3 rounded-l-md bg-stone-50/40 underline'
          >
            {photographer}
          </a>
          <a href={photographer_url} target="_blank">
            <img 
                src='/pexels_logo.png' 
                layout='fill'
                className='pl-1 pr-0 my-1 h-8 w-9 rounded-r-md bg-stone-50/40'
              />
          </a>
        </div>
      </div>
  )
}

export default PhotoCard

/*
Strategy:

The outer div is a flex container arranged as a column.
That way the two children (Image, and credits) can be stacked
on top of one another.
*/
