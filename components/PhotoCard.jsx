import Image from 'next/image'
// Create a function
const PhotoCard = ({ props }) => {
  const { alt, photographer, photographer_url, avg_color } = props;
  const pic = props.src.medium;
  // console.log('props in photoCard', props);
  return (
    <div 
    className='flex flex-col rounded min-h-350 m-4 h-1/2 w-9/50 relative'
    style={{backgroundColor: avg_color}}
    >
      <Image
        src={pic}
        alt={alt}
        loading="eager"
        layout="fill"
        objectFit='contain'
      />
    {/* it has an image that fills its container up to its side and top margins */}
    {/* the div continues for a few pixels to display the author and a link */}
    </div>
  )
}

export default PhotoCard
