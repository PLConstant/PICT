import Image from 'next/image'
// Create a function
const PhotoCard = ({ props }) => {
  const { id, alt, photographer, photographer_url } = props;
  const pic = props.src.medium;
  // console.log('props in photoCard', props);
  return (
    <div className='flex flex-col min-w-290 min-h-290 m-4 w-9/50 h- 1/2 bg-slate-900 relative'>
      <Image
        src={pic}
        alt={alt}
        layout="fill"
      />
    {/* it has an image that fills its container up to its side and top margins */}
    {/* the div continues for a few pixels to display the author and a link */}
    </div>
  )
}

export default PhotoCard
