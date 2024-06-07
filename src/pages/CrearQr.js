import React, { useState, useRef } from 'react';
import Layout from '../components/layout';
import QRCode from 'qrcode.react';
import TabsQr from '../components/TabsQr';
import QrComponent from '../components/QrComponent';
import ModalExport from '../components/ModalExport';
import './CrearQr.css';
import CompaQr from '../components/CompaQr';

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
        return 'Introduce la coordenada';
      case 'three':
        return 'Introduce el texto';
      default:
        return 'Introduce el contenido';
    }
  };

  const containerStyle = {
    padding: '20px',
  };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta'];

  return (
    <Layout>
      <div className="titulo">
        <h1>GENERADOR DE QR</h1>
      </div>
      <div className="container1" style={containerStyle}>
        <div className="contenidoqr">
          <p className="grupo1">Contenido de tu QR</p>
          <TabsQr onTabChange={handleTabChange} />
          <br />
          <div className="url">
            <input
              className="contenido1"
              type="text"
              placeholder={getPlaceholder()}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="personalizarqr">
          <p className="grupo2">Personaliza tu QR</p>
          <QrComponent
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            colorOptions={colorOptions}
          />
        </div>
        <div className="qrcontenido">
          <p className="grupo3">QR creado</p>
          <div className="qrdescarga" ref={qrRef}>
            <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
          </div>
          <div className="qrcreado">
            <p>Contenido: {inputValue}</p>
            <p>Color: {qrColor}</p>
            <p>Tamaño: {qrSize}</p>
            <br />
            <p>Descargar QR</p>
            <ModalExport qrRef={qrRef} />
            <CompaQr/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CrearQr;
