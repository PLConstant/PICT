import Image from 'next/image'

// API photo object holds all these properties and more.
// Feel free to console.log(props) to view other options.
const PhotoCard = ({ props }) => {
  const { alt, photographer, photographer_url, avg_color, src } = props
  const pic = src.medium;


  return (
      <div 
      className='flex flex-col h-fit rounded m-4 w-9/50 relative z-10 drop-shadow-md'
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
          className='px-3 py-2'
          >
            {photographer}
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
