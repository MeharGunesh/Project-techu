import React from 'react'
import mask12 from "../images/Frame 106.png"

import mask17 from "../images/Frame 106 (5).png"

import rateone from "../images/Review.png"

export const ContentTwo = () => {
    return (
        <>
            <div className='content-div-three'>
                <div className='happy'>
                    <h5 style={{ textAlign: "center", paddingTop: "50px" }}>394+ Happy Maangalaaym Users</h5>
                    <h1 style={{ textAlign: "center" }}>Don’t just take our words</h1>

                    <div className='based-cards-three'>
                        <div className='cardone'>
                            <div className='image'>
                                <img style={{ width: "auto", margin: "15px 30px" }} src={mask12} alt='#'></img>
                            </div>
                            <div className='card-content'>
                                <img style={{ width: "auto" }} src={rateone}></img>
                                <p style={{ fontSize: "12px" }}>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                <h6 style={{ fontSize: "15px" }}>Raghu & Shwetha</h6>
                            </div>
                        </div>
                        <div className='cardone'>
                            <div className='image'>
                                <img style={{ width: "auto", margin: "15px 30px" }} src={mask17} alt='#'></img>
                            </div>
                            <div className='card-content'>
                                <img style={{ width: "auto" }} src={rateone}></img>
                                <p style={{ fontSize: "12px" }}>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                <h6 style={{ fontSize: "15px" }}>Raghu & Shwetha</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
