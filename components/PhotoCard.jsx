import Image from 'next/image'

// API photo object holds all these properties and more.
// Feel free to console.log(props) to view other options.
const PhotoCard = ({ props }) => {
  const { alt, photographer, photographer_url, avg_color, src } = props
  const pic = src.medium;


  return (
      <div 
      className='flex flex-col rounded-t min-h-350 m-4 w-9/50 relative'
      style={{backgroundColor: avg_color}}
      >
        <Image
          src={pic}
          alt={alt}
          loading="eager"
          layout="fill"
          objectFit='contain'
        />
        <div 
        className='rounded-b h-10 w-9/50'
        style={{backgroundColor: avg_color}}
        >
          <p>{'...hello?'}</p>
        </div>
      </div>
  )
}

export default PhotoCard
