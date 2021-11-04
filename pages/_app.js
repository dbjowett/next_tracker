import Page from '../components/Page'
import nProgress from 'nprogress'
import '../styles/nProgress.css'
import Router from 'next/router'

Router.events.on('routeChangeStart', ()=> nProgress.start())
Router.events.on('routeChangeComplete', ()=> nProgress.done())
Router.events.on('routeChangeError', ()=> nProgress.done())

export default function MyApp({ Component, pageProps }) {
  return (
  <Page>
    <Component {...pageProps} />
  </Page>
  )
}
