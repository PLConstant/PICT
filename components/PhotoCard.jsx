import Image from 'next/image'
// Create a function
const PhotoCard = ({ props }) => {
  const { alt, photographer, photographer_url, avg_color } = props;
  const pic = props.src.medium;
  // console.log('props in photoCard', props);
  return (
    <>
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
      </div>
      {/* <div 
      className='rounded-b h-10 w-9/50'
      style={{backgroundColor: avg_color}}
      >
        <p>{'...hello?'}</p>
      </div> */}
     </>
  )
}

export default PhotoCard
