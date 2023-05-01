import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from './logo.png'

export default function Header() {
    const [clicked, setClicked] = useState(false);


    let openMenu = () => {
        if (clicked) {
            setClicked(false)
        }
        else {
            setClicked(true)
        }
    }

    function burgerMenu() {
        return (
            <div className="burgerMenu">
                <Link onClick={openMenu} to='/'>Company</Link>
                <Link onClick={openMenu} to='/'>Process</Link>
                <Link onClick={openMenu} to='/cloudService'>Cloud Service</Link>
                <Link onClick={openMenu} to='/digitalService'>Digital Media Service</Link>
                <Link onClick={openMenu} to='/consultingService'>Consulting Service</Link>
                <Link onClick={openMenu} to='/mobileAppService'>Mobile App Development Service</Link>
                <Link onClick={openMenu} to='/webDesignService'>Web Design Service</Link>
                <Link onClick={openMenu} to='/contact'>Contact</Link>
            </div>
        )

    }


    return (
        <header>
            <div className="container header">
                <div className="logo col-2">
                    <img src={Logo} alt="" />
                </div>
                <div className="navbar col-5">
                    <nav>
                        <Link to='/'>Company</Link>
                        <Link to='/'>Process</Link>
                        <Link className="dropdown">Services
                            <i className="fa-solid fa-angle-down"></i>
                        </Link>
                        <Link to='/contact'>Contact</Link>
                        <div className="dropdownMenu">
                            <Link to='/cloudService'>Cloud Service</Link>
                            <Link to='/digitalService'>Digital Media Service</Link>
                            <Link to='/consultingService'>Consulting Service</Link>
                            <Link to='/mobileAppService'>Mobile App Development Service</Link>
                            <Link to='/webDesignService'>Web Design Service</Link>
                        </div>
                    </nav>
                    {
                        clicked ? burgerMenu() : ''
                    }
                    <button className="burgerButton" onClick={openMenu}>
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}
