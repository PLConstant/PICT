import Header from '../components/Header'
import Viewer from '../components/Viewer'
import Example from './example'
export default function Home() {
  return (
    <div className='flex-col h-screen w-screen items-center'>
      <Header/>
      <Viewer/>
      {/* <Example/> */}
    </div>
  )
}