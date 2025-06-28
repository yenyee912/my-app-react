// "use client"; // ✅ must be the first line

import '../styles/globals.css'
import  FooterPane  from '../components/FooterPane'
import NavbarPane from '../components/HeaderPane'

export const metadata = {
  title: 'React App Demo',
}

// should be in _app.js
// export default function App({ Component, pageProps }) {
//   return (
//     <div className="global-wrapper">
//       <h1>React APp demo</h1>
//       <Component {...pageProps} /> === {children}
//       <FooterPane />
//     </div>
//   )
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavbarPane />
        <main className="flex-grow m-4">
          {/* {console.log("from root layout: ", children)} */}
         <div className="border-red-700">{children}</div> 
        </main>
        <FooterPane />
      </body>
    </html>
  )
}