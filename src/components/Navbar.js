import React from 'react'
import logo from '../images/Layer_1.png'
import dropdpwn from "../images/chevron-down.png"
import '../App.css';

export const Navbar = () => {
    return (
        <>
            <div className='nav-bar'>
                <div className='layer-one'>
                    <img className='logo-img' src={logo} alt='logo'></img>
                </div>
                <div className='layer-two'>
                    <div className='menu-list'>
                        <ul id="nav-list">
                            <a href='#'>
                                <li id="nav-list-items">Home</li>
                            </a>
                            <a href='#'>
                                <li id="nav-list-items">Plans</li>
                            </a>
                            <a href='#'>
                                <li id="nav-list-items">Help
                                    <img style={{ width: "auto" }} src={dropdpwn} alt="drop down img"></img>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className='login-btn'>
                        <button className='login'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
