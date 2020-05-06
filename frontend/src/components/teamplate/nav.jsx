import './nav.css'
import React from 'react'
import {FaHome} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <FaHome/> Inicio
        </Link>
        <Link to="/users">
            <FaUsers/> Usuários
        </Link>
    </nav>
</aside>