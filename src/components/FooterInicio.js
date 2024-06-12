import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './FooterInicio.css'
import FooterModalCompartir from "./FooterModalCompartir"
import { FaLinkedin } from "react-icons/fa6";

const FooterInicio = () =>{
    return(
        <footer className='footer '>
          <div className='footeri'>
            
            <div className='footerleft'>
              <StaticImage src="../images/ministerio.png"/>
            </div>

            <div className='logoblanco'>
              <StaticImage  src="../images/logoblanco.png" alt="logo blanco" className='logoblanco'/>
            </div>

              <div className='logotipos'>
                <a href='https://www.instagram.com/'><StaticImage src="../images/inst.png" alt="logo Instagram" className='logo'/></a>
                <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"><StaticImage src="../images/tiktok.png" alt="logo Tiktok" className='logo'/></a>
                <a href="https://x.com/?lang=es"><StaticImage src="../images/twitter.png" alt="logo twitter" className='logo'/></a>
                <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA/videos?view=0"><StaticImage src="../images/youtube.png" alt="logo youtube" className='logo'/></a>
              </div>

              <div className='enlaces'>
                <a href="https://www.patrimonionacional.es/politica-de-privacidad">Política de Privacidad </a>|
                <a href="https://www.patrimonionacional.es/politica-de-cookies"> Cookies </a>|
                <a href="https://www.patrimonionacional.es/accesibilidad"> Accesibilidad </a>|
                <a href="https://www.patrimonionacional.es/aviso-legal"> Aviso legal</a>
              </div>
              
              <div className="compartir">
                <FooterModalCompartir/>
              </div>
            </div>
        </footer>
    )
}
export default FooterInicio