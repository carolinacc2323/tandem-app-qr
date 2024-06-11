import React from 'react';
import './CompaQr.css';
import { FacebookShareButton, TwitterShareButton, EmailShareButton, WhatsappShareButton, } from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon, WhatsappIcon, XIcon } from "react-share";

function CompaQr() {
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
        url={"https://www.pinterest.es/"}
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
        url={"https://www.pinterest.es/"}
        hashtags={["qrpatrimonio", "hashtag2"]}
      >
        <XIcon size={32} round />
      </TwitterShareButton>
      <br />
      <WhatsappShareButton>
        <WhatsappIcon size={32} round/>
      </WhatsappShareButton>
      </div>
    </div>
  );
}

export default CompaQr;
