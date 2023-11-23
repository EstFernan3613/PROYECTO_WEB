import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBar'>
                <Link to='/usuario'>
                    <button>Usuario</button>
                </Link>
                <Link to='/'>
                    <button>Inicio</button>
                </Link>
            </div>
        );
    }
}

export default NavBar;