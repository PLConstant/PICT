import Header from '../components/Header'
import Viewer from '../components/Viewer'
import { createContext, useState } from 'react'

const defaultContext = {
  display: 'curated',
  page: 1,
  query: null,
}

export const PageContext = createContext();
export default function Home() {
  const [pageDetails, updatePage] = useState(defaultContext)
  
  return (
    <div className='flex-col h-screen max-h-auto w-screen items-center'>
      <PageContext.Provider value={[pageDetails, updatePage]}>
        <Header/>
        <Viewer/>
      </PageContext.Provider>
    </div>
  )
}
