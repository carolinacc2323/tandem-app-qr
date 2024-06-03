import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BurguerNavbar from "./BurguerNavbar"
const Header = ()=>{
    return(
        <div className="header">
            {/* <StaticImage src="../images/logo.png" width={150}/> */}
            <BurguerNavbar/>
        </div>
    )
}

export default Header