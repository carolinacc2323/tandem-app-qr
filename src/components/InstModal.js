import React, { useState } from 'react';
import { Button, Fade, CloseButton } from 'reactstrap';

function InstModal() {
  const [isOpen, setIsOpen] = useState(false); // Initial state for fade visibility

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle open/closed state on button click
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        Instrucciones
      </Button>
      <Fade in={isOpen} timeout={500} className="mt-3" tag="h5">
        <CloseButton onClick={()=>{
          setIsOpen(false)
        }}/>
        <ol>
        <li>Ingrese el contenido que desea codificar en el código QR (URL, coordenadas o texto según la selección de pestaña).</li>
        <li>Elija el color y tamaño deseado para el código QR entre las opciones disponibles.</li>
        <li>El código QR generado debe mostrarse junto con sus detalles.</li>
        </ol>
      </Fade>
    </div>
  );
}

export default InstModal;
