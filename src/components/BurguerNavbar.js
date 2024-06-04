// import React, {useState} from "react"
// import "./BurguerNavbar.css"
// const BurguerNavbar = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     return(
//         <div className="burguermenu">
//             <div className={`nav_items ${isOpen && "open"}`}>
//                 <a href="#"> APP QR</a>
//                 <a href="#"> SOPORTE</a>
//                 <a href="#"> INFORMACIÓN INSTITUCIONAL</a>
//             </div>
//             <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//         </div>
//     )
// }
// export default BurguerNavbar
import React, { useState } from "react";
import "./BurguerNavbar.css"; // Import the CSS file
import { StaticImage } from "gatsby-plugin-image";

const BurguerNavbar = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen)
}

return (
    <div className="navbar">
        <div className="nav-logo">
            <StaticImage src="../images/logoblanco.png"/>
        </div>
        <div className={`nav_items ${isOpen ? "open" : ""}`}> 
            <a href="./pages/404.js">APP QR</a>
            <a href="./info.js" >SOPORTE</a>
            <a href="./infoInstitucional.js">INFORMACIÓN INSTITUCIONAL</a>
        </div>
        <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        {/* onClick={() => setIsOpen(true)}
        {isOpen && <SoporteInicio />} */}
    </div>
);
};

export default BurguerNavbar;