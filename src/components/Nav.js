import React from 'react';
import '../Styles/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h1>Anime <span>Geek</span></h1>
            <ul className="nav-links">
                <Link to='/animes' style={{ textDecoration: 'none' }}>
                    <li>Animes</li>
                </Link>
                <Link to='/manga' style={{ textDecoration: 'none' }}>
                    <li>Mangas</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
