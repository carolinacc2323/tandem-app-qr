import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import BurguerNavbar from "./BurguerNavbar"
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    <>
      <BurguerNavbar/>
      <main>
        {children}
        </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout