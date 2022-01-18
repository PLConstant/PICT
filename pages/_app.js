import '../styles/globals.css'
import { SWRConfig } from 'swr'

/* 
SWRConfig provider is mostly syntactic sugar. Allows us to abstract the 
fetcher function away from the individual useSWR hooks. 
refreshInterval set to 0 disables it, as this application rests on api calls and frequently 
re-renders its data as a result of simply using the application
*/

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
    value={{
      refreshInterval: 0,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
    }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
