import Header from '../components/Header'
import Viewer from '../components/Viewer'
import { createContext, useState } from 'react'

const defaultContext = {
  display: 'curated',
  page: 1,
  query: null,
}

export const token = {
  headers: {
    "Authorization": process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  }
};

export const PageContext = createContext();
export default function Home(props) {
  const [pageDetails, updatePage] = useState(defaultContext)
  
  return (
    <div className='flex-col h-screen max-h-auto w-screen items-center'>
      <PageContext.Provider value={[pageDetails, updatePage]}>
        <Header/>
        <Viewer displayMode='hidden' firstRender={props.data} pageNum={pageDetails.page+1}/>
        <Viewer displayMode='show' firstRender={props.data} pageNum={pageDetails.page}/>
      </PageContext.Provider>
    </div>
  )
}

// Server Side Render the first page of the application: curated page 1
export async function getServerSideProps() {
  const res = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=10`, token);
  const data = await res.json();
  if (!data) return {error: true};
  return {
    props: { data }
  }
}
