import * as React from "react"
//import Header from "./Header"
//import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import Header from "./Header";
import BurguerNavbar from "./BurguerNavbar";
const Layout = ({ children }) => {
  return (
    <>
  
      <div className="container">
       <Header/>
      <main>
        {children}
        </main>
    
      <footer>
      Este es el footer

      </footer>
     
    </div>
    </>
  )
}

export default Layout
