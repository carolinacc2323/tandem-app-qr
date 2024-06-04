import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    <>
  
      <div className="container">
       <Header/>
      <main>
        {children}
        </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default Layout