import './header.css'
import React from 'react'
import {FaHome} from 'react-icons/fa'

export default props =>
<header className="header d-none d-sm-flex flex-column">

    <h1 className="mt-3">
         <FaHome className="mr-2 mb-1"></FaHome>{props.title}

    </h1>
    <p className="lead text-muted">
        Projeto de cadastro com JSON server
    </p>
</header>