import React from 'react'
import logo from '../images/Layer_1.png'

export const Fotter = () => {
    return (
        <>
            <div className='fotter'>
                <div className='fotter-div'>
                    <div className='fotter-logo'>
                        <img className='logo-img' src={logo} alt='logo'></img>
                        <p>Clarity gives you the blocks<br />and components you need to<br />create a truly professional website.</p>
                    </div>
                    <div className='fotter-list-items'>
                        <div>
                            <ul>
                                <li id="fotter-items">Company</li>
                                <li id="fotter-items">About   </li>
                                <li id="fotter-items">Features </li>
                                <li id="fotter-items">Contact Us  </li>
                                <li id="fotter-items">Career  </li>
                            </ul>

                        </div>
                        <div>
                            <ul>
                                <li id="fotter-items">Help</li>
                                <li id="fotter-items">Customer Support</li>
                                <li id="fotter-items">Delivery Details</li>
                                <li id="fotter-items">Terms & Conditions</li>
                                <li id="fotter-items">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='fotter-subscribe'>
                        <h6 style={{ marginLeft: "15px", marginBottom: "15px" }}>Newsletter</h6>
                        <input id="fotter-input" type='tel' placeholder='Enter your email address'></input>
                        <button className='fotter-btn'>Subscribe Now</button>
                    </div>
                </div>
                <hr style={{ width: "80%", margin: "auto", border: "1px solid black" }}></hr>
                <p style={{ textAlign: "center", margin: "50px 0px" }}>© Copyright 2022, All Rights Reserved by ClarityUI</p>
            </div>
        </>
    )
}
