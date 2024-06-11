import React from "react";
import Layout from "../components/layout";
import { useState, useRef } from "react";
import QRCode from "qrcode.react";

import QrComponent from "../components/QrComponent";
import ModalExport from "../components/ModalExport";

import './CrearQr.css';
import TabsQr from "../components/TabsQr";
import ModalCompartir from "../components/ModalCompartir";
import InstModal from "../components/InstModal";


function CrearQr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const [tabValue, setTabValue] = useState('one');
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
  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  const getPlaceholder = () => {
    switch (tabValue) {
      case 'one':
        return 'Introduce la URL';
      case 'two':
        return 'Introduce la coordenada (latitud,longitud)';
      case 'three':
        return 'Introduce el texto';
      default:
        return 'Introduce el contenido';
    }
  };

  const containerStyle = {
    padding: "5px",
  };
  const colorOptions = ['black', 'blue', 'red'];

  return (
    <Layout>

      <div className="titulo">
          <h1>GENERADOR DE QR</h1>
      </div>
      <div className="pagina" style={containerStyle}>

        <div className="url">
          <h4 className="grupo1" >Contenido del QR</h4>
          <TabsQr onTabChange={handleTabChange} />
          
        <div className="input-container">
         
        <input
            
            type="text"
            placeholder=""
            value={inputValue}
            onChange={handleInputChange}
            id="inputField"
            name="inputField"
          />
          <label htmlFor="inputField">{getPlaceholder()}</label>
        </div>
        <InstModal />
        </div>

        <div className="qrcomponent">
          <h4 className="grupo2" >Personalizar QR</h4>
          <div className="colorytamaño">
            <QrComponent
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            colorOptions={colorOptions}
          />

          </div>

        </div>

        <div className="qrcontenido">
          <h4 className="grupo3">QR creado</h4>
          <div className="qrcontenidoint" style={{
            display:'grid',
            gridTemplateColumns: '3fr 1fr'
          }}>
            <div className="qrdescarga" ref={qrRef}>
            <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
            </div>

            <div className="qrcreado">
              <h5>Contenido: {inputValue}</h5>
              <p>Color: {qrColor}</p>
              <p>Tamaño: {qrSize}</p>

              <ModalExport qrRef={qrRef} />

              <ModalCompartir/>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  );
}

export default CrearQr