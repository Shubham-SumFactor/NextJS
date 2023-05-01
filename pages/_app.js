/*_app.js is an entry pt => provide wrapper to all / 
available in all pages*/

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div><Component {...pageProps} />
  <footer>
  <p>© 2023 Mr.Riddle</p>
</footer></div>
}

//footer component is added and will be available to all