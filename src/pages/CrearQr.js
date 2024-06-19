import React, { useState, useRef } from "react";
import Layout from "../components/layout";
import QRCode from "qrcode.react";
import QrComponent from "../components/QrComponent";
import ModalExport from "../components/ModalExport";
import './CrearQr.css';
import TabsQr from "../components/TabsQr";
import Mapa from "../components/Mapa";
import { Button } from "reactstrap";
import { FaHouse } from "react-icons/fa6";

function CrearQr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const [tabValue, setTabValue] = useState('one');
  const [latLng, setLatLng] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
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

  const handleLatChange = (e) => {
    const lat = e.target.value;
    setLatitude(lat);
    updateLatLng(lat, longitude);
  };

  const handleLngChange = (e) => {
    const lng = e.target.value;
    setLongitude(lng);
    updateLatLng(latitude, lng);
  };

  const updateLatLng = (lat, lng) => {
    if (lat && lng) {
      const parsedLat = parseFloat(lat);
      const parsedLng = parseFloat(lng);
      if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
        const newLatLng = { lat: parsedLat, lng: parsedLng };
        setLatLng(newLatLng);
        const osmUrl = `https://www.openstreetmap.org/?mlat=${parsedLat}&mlon=${parsedLng}#map=18/${parsedLat}/${parsedLng}`;
        setInputValue(osmUrl);
      }
    }
  };

  const setLatLngFromMap = (latLng) => {
    setLatLng(latLng);
    setLatitude(latLng.lat.toString());
    setLongitude(latLng.lng.toString());
    const osmUrl = `https://www.openstreetmap.org/?mlat=${latLng.lat}&mlon=${latLng.lng}#map=18/${latLng.lat}/${latLng.lng}`;
    setInputValue(osmUrl);
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
      <div className="titulo mt-3">
        <h1 >GENERADOR DE QR</h1>
      </div>
      <div className="pagina" style={containerStyle}>
        <div className="url">
          <h4 className="grupo1">Contenido del QR</h4>
          <TabsQr onTabChange={handleTabChange} />
          <div className="input-container">
            {tabValue === 'two' ? (
              <>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder=" "
                    value={latitude}
                    onChange={handleLatChange}
                    id="latitude"
                    name="latitude"
                  />
                  <label htmlFor="latitude">Latitud</label>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder=" "
                    value={longitude}
                    onChange={handleLngChange}
                    id="longitude"
                    name="longitude"
                  />
                  <label htmlFor="longitude">Longitud</label>
                </div>
              </>
            ) : (
              <div className="input-field">
                <input
                  type="text"
                  placeholder=" "
                  value={inputValue}
                  onChange={handleInputChange}
                  id="inputField"
                  name="inputField"
                />
                <label htmlFor="inputField">{getPlaceholder()}</label>
              </div>
            )}
          </div>
          
          {tabValue === 'two' && typeof window !== 'undefined' && (
            <div className="map-container">
              <p>Haz clic en el mapa para obtener las coordenadas</p>
              <Mapa setLatLng={setLatLngFromMap} latLng={latLng} />
            </div>
          )}
        </div>

        <div className="qrcomponent">
          <h4 className="grupo2">Personalizar QR</h4>
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
            display: 'grid',
            gridTemplateColumns: '3fr 1fr'
          }}>
            <div className="qrdescarga" ref={qrRef}>
              <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
            </div>

            <div className="qrcreado">
              <p>Color: {qrColor}</p>
              <p>Tamaño: {qrSize}</p>
              <ModalExport qrRef={qrRef} />
              <Button color="warning" href="/AppQr">
                <FaHouse size={30} />
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}

export default CrearQr;
