import './App.css'
import React from 'react'
import Logo from '../components/teamplate/logo'
import Nav from '../components/teamplate/nav'
import Footer from '../components/teamplate/footer'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'

export default props =>
<BrowserRouter>
    <div className="app">
        <Logo/>
        <Nav/>
        <Routes/>
        <Footer/>
    </div>

</BrowserRouter>
