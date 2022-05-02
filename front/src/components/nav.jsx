import { render } from '@testing-library/react';
import React from 'react';
import '../styles/nav.scss';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__logo">
                <h1 className="nav__logo__text">ToDoApp</h1>
                <img
                    className="nav__logo__background"
                    src="/triangle.png"
                    alt=""
                />
            </div>
            <h2 className="nav__title">Aplicación para gestión de proyectos</h2>
        </div>
    );
}

export default Nav;
