// InfoInstitucional.js
import * as React from 'react';

import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsInfo from '../components/TabsInfo';

export default function InfoInstitucional() {
  const tabs = [
    {
      label: 'Bienvenida de la Presidenta',
      content: (
        <div>
          <h2>Bienvenida de la Presidenta</h2>
          <p>
            Bienvenidos a Patrimonio Nacional.
            <br /><br />
            Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.
            <br /><br />
            Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros talleres. A nuestras publicaciones.
            <br /><br />
            Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad.
            <br /><br />
            Ana de la Cueva
            <br />
            Presidenta de Patrimonio Nacional
          </p>
        </div>
      ),
    },
    {
      label: 'Conoce nuestra historia',
      content: (
        <div>
          <h2>Conoce nuestra historia</h2>
          <p>Contenido sobre la historia...</p>
        </div>
      ),
    },
    {
      label: 'Consejo de Administración',
      content: (
        <div>
          <h2>Consejo de Administración</h2>
          <p>Contenido sobre el Consejo de Administración...</p>
        </div>
      ),
    },
    // Añade más pestañas según sea necesario
    {
      label: 'Actos oficiales e institucionales',
      content: (
        <div>
          <h2>Consejo de Administración</h2>
          <p>Contenido sobre el Consejo de Administración...</p>
        </div>
      ),
    },
    {
      label: 'Casa de S.M. el Rey',
      content: (
        <div>
          <h2>Consejo de Administración</h2>
          <p>Contenido sobre el Consejo de Administración...</p>
        </div>
      ),
    },
    {
      label: 'Retratos oficiales',
      content: (
        <div>
          <h2>Consejo de Administración</h2>
          <p>Contenido sobre el Consejo de Administración...</p>
        </div>
      ),
    },
    {
      label: <a href='#' 
      style={{ textDecoration: 'none', color: 'inherit' }}>
        Ministerio de la presidencia</a>,
      content: (
        <div>
          <h2>Consejo de Administración</h2>
          <p>Contenido sobre el Consejo de Administración...</p>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className={`container ${infoStyle.flexContainer}`}>
        <TabsInfo tabs={tabs} />
      </div>
    </Layout>
  );
}
