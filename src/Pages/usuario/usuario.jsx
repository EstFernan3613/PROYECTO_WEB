import React from 'react';
import './Usuario.css';
import NavBar from './NavBar';

const Usuario = () => {
    return (
        <div className='Usuario'>
            <NavBar />
            <div className='login-form'>
                <h2>Iniciar sesión</h2>
                <form>
                    <input type='text' placeholder='Nombre de usuario' />
                    <input type='password' placeholder='Contraseña' />
                    <button type='submit'>Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
}

export default Usuario;