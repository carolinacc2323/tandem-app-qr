import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer"
import NavbarTandem from "./NavbarTandem"


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