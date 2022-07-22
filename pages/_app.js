import '../styles/globals.css'
import { BurgerAppProvider } from '../context/BurgerAppProvider'

function MyApp({ Component, pageProps }) {
  return(
    <BurgerAppProvider
      className="bg-gradient-to-r from-[#000000] via-[#232526] to-[#000000]"
    >
      <Component {...pageProps} />
    </BurgerAppProvider>
  )
}

export default MyApp
