import '../styles/globals.css'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
    value={{
      refreshInterval: 0,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
      provider: () => new Map()
    }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
