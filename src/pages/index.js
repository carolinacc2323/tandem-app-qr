import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./index.module.css"

const Index = () => {
  
    return (
    <>
      <Layout>
      <section className={styles.section}>
      <article>
      <div className={styles.eslogan}>
        <h3><strong>Vive una experiencia única, visita Aranjuez</strong></h3>
      </div>
      <div className={styles.eslogan2}>
        <h2>GENERADOR DE CÓDIGOS QR</h2>
      </div>
      <div className={styles.imagenqr}>
        <StaticImage src="../images/qrimagen.png" alt="qrimagen" className={styles.qrImagen}/>
      </div>
      <div className={styles.desplegableSlide}>
      <button type='button' className={styles.buttondesp}>Usos de la aplicación </button>
      </div>
    </article>
    <article>
    <div className={styles.login}>
      <h2>EMPLEADOS PATRIMONIO NACIONAL</h2>
    </div>
      <div className={styles.acceso}>
        <StaticImage src="../images/userlogin.png" alt="user" className={styles.userLogin}/>
        {/*<VscAccount color="red" className={styles.userLogin}/>*/}
        <button href="" type='button' className={styles.buttonacces}>ACCESO</button>
      </div>
    </article>
    </section> 
      </Layout>
    </>
    )
  }
export default Index