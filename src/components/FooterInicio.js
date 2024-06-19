import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './FooterInicio.css'
import FooterModalCompartir from "./FooterModalCompartir"
import { FaLinkedin } from "react-icons/fa6";

const FooterInicio = () =>{
    return(
        <footer className='footeri '>
          <div className='footerin'>
            
            <div className='footerlefti'>
              <StaticImage src="../images/ministerio.png"/>
            </div>

            <div className='logoblancoi'>
              <StaticImage  src="../images/logoblanco.png" alt="logo blanco" className='logoblanco'/>
            </div>

              <div className='logotiposi'>
                <a href='https://www.instagram.com/'><StaticImage src="../images/inst.png" alt="logo Instagram" className='logo'/></a>
                <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"><StaticImage src="../images/tiktok.png" alt="logo Tiktok" className='logo'/></a>
                <a href="https://x.com/?lang=es"><StaticImage src="../images/twitter.png" alt="logo twitter" className='logo'/></a>
                <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA/videos?view=0"><StaticImage src="../images/youtube.png" alt="logo youtube" className='logo'/></a>
              </div>

              <div className='enlacesi'>
                <a href="./Politica">Política de Privacidad </a>|
                <a href="./Cookies"> Cookies </a>|
                <a href="./Accesibilidad"> Accesibilidad </a>|
                <a href="./AvisoLegal"> Aviso legal</a>
              </div>
              
              <div className="compartiri">
                <FooterModalCompartir/>
              </div>
            </div>
        </footer>
    )
}
export default FooterInicio