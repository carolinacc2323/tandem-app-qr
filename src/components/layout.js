import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import Footer from "./Footer"
import NavbarTandem from "../pages/NavbarTandem"


const Layout = ({ children }) => {
  return (
    <>
      <NavbarTandem/>
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