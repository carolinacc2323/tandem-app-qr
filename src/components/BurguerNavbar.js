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
        <div className="logotipos">
            <StaticImage src="../images/logo.png" width={145} height={85}/>
        </div>
        <div className={`nav_items ${isOpen ? "open" : ""}`}> 
            <a href="#">APP QR</a>
            <a href="#">SOPORTE</a>
            <a href="#">INFORMACIÓN INSTITUCIONAL</a>
        </div>
        <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);
};

export default BurguerNavbar;