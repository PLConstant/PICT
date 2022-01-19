import Image from 'next/image'

const Doggo = () => {
  return (
    <Image 
      src='/no_content.png'
      layout='fill'
      objectFit='contain'
    />
  )
}

export default Doggo
