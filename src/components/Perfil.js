import React from 'react'
import { Link } from 'gatsby'
import BannerUser from './BannerUser'

const Perfil = ({id,email,role})=>{

    if(role=='admin'){
        return(
            <>
                <p>Eres: {email} | {role}</p>
                <ul>
                    <li>Ver lista de usuarios!!!</li>
                    <li>Ver lista de códigos Qr</li>
                    <li>Cambiar modo oscuro/claro</li>
                    <li>Cambiar contraseña</li>
                    <li>Contactar con soporte</li>
                    <li>Cambiar su foto de perfil</li>
                    <li><Link to='/AppQr'>Crear QR</Link></li>
                    <li>Mostrar historial de tu QR</li>
                    <li>Administrar tus propios códigos QR</li>
                    
                </ul>
            </>
        )
    }
    if(role=='employee'){
        return(
            <>
                <BannerUser/>
                <p>Eres: {email} | {role} | {id}</p>
                <ul>
                    <li>Cambiar modo oscuro/claro</li>
                    <li>Cambiar contraseña</li>
                    <li>Contactar con soporte</li>
                    <li>Cambiar su foto de perfil</li>
                    <li><Link to='/AppQr'>Crear QR</Link></li>
                    <li>Mostrar historial de tu QR</li>
                    <li>Administrar tus propios códigos QR!!!</li>
                </ul>
            </>
        )
    }
    if(role=='guest'){
        return(
            <>
                <p>Eres:| {email} | {role}</p>
                <ul>
                    <li>Cambiar modo oscuro/claro</li>
                    <li>Cambiar contraseña</li>
                    <li>Contactar con soporte</li>
                    <li>Cambiar su foto de perfil</li>
                    <li><Link to='/AppQr'>Crear QR</Link></li>
                </ul>
            </>
        )
    }
    return (
        <>
        <div>
            <h1>Perfil de Tsuky</h1>
            <p>{id}</p>
            <p>{email}</p>
            {/* {role== 'admin' && <p>Eres un administrador</p>}
            {role=='employee' && <p>Eres un empleado</p>}
            {role=='guest' && <p>Eres un invitado</p>} */}
        </div>
        </>
    )
}
export default Perfil