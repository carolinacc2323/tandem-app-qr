import React, { useState } from 'react';
import './CompaQr.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, EmailIcon, WhatsappIcon, XIcon } from "react-share";
import { FiLink } from "react-icons/fi";

function CompaQr() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://tandem-app-qr.vercel.app/")
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); // Popup desaparece después de 2 segundos
      })
      .catch((err) => {
        console.error('Error copying link: ', err);
      });
  };

  return (
    <div className="compartir-container">
      <div className="compartir-header">
        <p>COMPARTIR</p>
      </div>
      <div className="compartir-icons">
        <EmailShareButton
          subject='Generador códigos QR'
          body='carolinacc.tandem@gmail.com'
          separator='--'
        >
          <EmailIcon size={32} round/>
        </EmailShareButton>
        <br />
        <FacebookShareButton
          url={"https://tandem-app-qr.vercel.app/"}
          quote={"no sé que es quote"}
          hashtag={"#generadorqrpatrimonio"}
          description={'dataUrl'}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <br />
        <TwitterShareButton
          title={"Generar códigos QR"}
          url={"https://tandem-app-qr.vercel.app/"}
          hashtags={["qrpatrimonio", "codigoqr"]}
        >
          <XIcon size={32} round />
        </TwitterShareButton>
        <br />
        <WhatsappShareButton>
          <WhatsappIcon size={32} round/>
        </WhatsappShareButton>
        <FiLink size={32} onClick={handleCopyLink}/>
      </div>
      {showPopup && (
        <div className="popup">
          ¡Enlace copiado con éxito!
        </div>
      )}
    </div>
  );
}

export default CompaQr;
