import '../styles/global.css'
import './i18n'
import i18n from './i18n'

export default function App({ Component, pageProps }) {
  i18n.init();
  
  return <Component {...pageProps} />
}
