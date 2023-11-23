import React from 'react';
import './PerfilUsuario.css';
import NavBar from './NavBar';

const PerfilUsuario = () => {
    return (
        <div className='PerfilUsuario'>
            <NavBar />
            <div className='perfil-info'>
                <h2>Perfil de Usuario</h2>
                <p>Nombre: Juan Pérez</p>
                <p>Email: juanperez@gmail.com</p>
                <p>Fecha de registro: 01/01/2021</p>
            </div>
        </div>
    );
}

export default PerfilUsuario;