import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../components/analytics/Layouts/RootLayout'


export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
 
}
