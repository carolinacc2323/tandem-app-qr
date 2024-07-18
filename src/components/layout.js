import * as React from "react"
import Footer from "./Footer"
import NavbarTandem from "./NavbarTandem"

const Layout = ({ children }) => {
  return (
    <>
      <NavbarTandem/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout