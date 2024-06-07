import React from 'react';
import './CompaQr.css'
import { StaticImage } from 'gatsby-plugin-image';
function CompaQr() {
  return (
    <div className="compartir-container">
      <div className="compartir-header">
        <p>COMPARTIR</p>
      </div>
      <div className="compartir-icons">
        <StaticImage src='../images/email.png'/>
        <StaticImage src='../images/inst.png'/>
        <StaticImage src='../images/whatsApp.png'/>
        <StaticImage src='../images/facebook.png'/>
      </div>
    </div>
  );
}

export default CompaQr;
