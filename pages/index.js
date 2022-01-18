import Header from '../components/Header'
import Viewer, { token } from '../components/Viewer'
import { createContext, useState } from 'react'

/*
Index is the applications main component. It is here that we create the initial 
context object and wrap all dependant components with the context provider.
See docs in Viewer component if you're wondering about the 'token' variable
*/

// The context's initial state
const defaultContext = {
  display: 'curated',
  page: 1,
  query: null,
}
// Export to make context available 
export const PageContext = createContext();

// Props object in this case is only the result of getServerSideProps below.
// This allows our applications first page to be rendered on the server side
// as opposed to initially displaying a loading screen while awaiting the API call.
export default function Home(props) {
  const [pageDetails, updatePage] = useState(defaultContext)
  
  return (
    <div className='flex-col h-screen max-h-auto w-screen items-center'>
      {/* passing useState components into the context provider as props for all child components */}
      <PageContext.Provider value={[pageDetails, updatePage]}>
        <Header/>
        <Viewer firstRender={props.data} pageNum={pageDetails.page}/>
        {/* The following line is a major source of what makes this app so fast. 
            see the comments inside the Viewer component for more details. */}
        <div className='hidden'><Viewer firstRender={props.data} pageNum={pageDetails.page+1}/></div>
      </PageContext.Provider>
    </div>
  )
}

// A function that Next.js will run when a client first requests our application.
// This function is a cruz of Next.js' ServerSide rendering capabilities.
export async function getServerSideProps() {
  const res = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=10`, token);
  const data = await res.json();
  if (!data) return {error: true};
  return {
    props: { data }
  }
}
