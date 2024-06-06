import React from "react"
import Layout from "../components/layout"
import { useState, useRef } from "react"

// import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react'
import QrComponent from "../components/QrComponent"
import QRCode from "qrcode.react"
import download from "downloadjs"
import { toPng, toJpeg, toSvg } from "html-to-image"
import TabsQr from "../components/TabsQr"

import './CrearQr.css'

function CrearQr() {
    const [inputValue, setInputValue] = useState('');
    const [qrColor, setQrColor] = useState('black');
    const [qrSize, setQrSize] = useState(100);
    const qrRef = useRef(null);
    const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
    const handleColorChange = (color) => {
    setQrColor(color);
    };
    const handleSizeChange = (size) => {
      setQrSize(parseInt(size, 10));
    };
    const handleDownload = async () => {
      if (qrRef.current) {
        const dataUrl = await toPng(qrRef.current);
        download(dataUrl, 'qr-code.png');
      }
    };
  
    const handleDownload2 = async () => {
      if (qrRef.current) {
        const dataUrl = await toJpeg(qrRef.current);
        download(dataUrl, 'qr-code.jpeg');
      }
    };
  
    const handleDownload3 = async () => {
      if (qrRef.current) {
        const dataUrl = await toSvg(qrRef.current);
        download(dataUrl, 'qr-code.svg');
      }
    };
    const containerStyle = {
    //   backgroundColor: "beige",
      border: "2px solid black",
      padding: "20px",
      borderRadius: "10px",
    //   textAlign: "center",
    };
    const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
    return (
      <Layout>
        <div style={containerStyle}>
            <div>
                <h1>GENERADOR DE QR</h1>
            </div>
            <div className="contenidoqr">
                <TabsQr/>
                <br />
                {/* <p>Introduce el contenido deseado</p> */}
                <input className="
                contenido1" type="text" placeholder="Introduce el contenido" value={inputValue} onChange={handleInputChange} />
            </div>
          <QrComponent
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            colorOptions={colorOptions}
          />
          <br /> 
          <div className="qr-contenido">
          <div ref={qrRef}>
            <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
          </div>
          <br />
         <br />
           {/* <TandemButton enlace="#">Generar QR</TandemButton> */}
          <p>Contenido del QR</p>
          <p>{inputValue}</p>
          <p>{qrColor}</p>
          <p>{qrSize}</p>
          </div>
          <br />
          <p>Descargar QR</p>
          <button onClick={handleDownload} className="button22">Png</button>
          <button onClick={handleDownload2} className="button22">Jpeg</button>
          <button onClick={handleDownload3} className="button22">Svg</button>
        </div>
      </Layout>
    );
}
export default CrearQr