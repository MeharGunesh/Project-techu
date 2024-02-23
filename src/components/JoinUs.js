import React from 'react'
import '../App.css';
import mask12 from "../images/Frame 106.png"
import mask13 from "../images/Frame 106 (1).png"
import mask14 from "../images/Frame 106 (2).png"
import mask15 from "../images/Frame 106 (3).png"
import mask16 from "../images/Frame 106 (4).png"
import mask17 from "../images/Frame 106 (5).png"
import dropdpwn from "../images/chevron-down.png"

import logoone from "../images/Group 48095961.png"
import userlogo from "../images/Ellipse 38.png"


export const JoinUs = () => {
  return (
    <>
      <div className='content-two'>
        <div className="contenttwo">
          <h2 className='maangalyam'>Discover Your Perfect Match with Our Powerful Features</h2>
          <p className='Unlock' >Unlock a world of possibilities with our cutting-edge features designed to make your journey to finding love seamless and<br />enjoyable. From advanced search options to privacy controls, explore the tools that set us apart and maximize your<br /> chances of meeting your ideal life partner.</p>
        </div>
        <div className='search-card'>
          <div className='search-bar'>
            <div className='logo-search'>
              <img style={{ width: "auto", paddingRight: "50px" }} src={logoone} alt="#"></img>
              <input style={{ padding: "0px 20px" }} className='user-input' placeholder='Type to search'></input>
            </div>
            <div className='user-logo'>
              <img style={{ width: "auto" }} src={userlogo} alt="#"></img>
            </div>
          </div>
          <div className='sidebysidediv' >
            <div className='sideby-sidediv-one'>
              <div className='advance-search'>
                <h6 style={{ padding: "10px", textAlign: "center" }}>Advance Search</h6>
              </div>
              <div className='basic-details'>
                <div className='input-fields'>
                  <h6>Basic Details</h6>
                  <select id="basic">
                    <option>18-22</option>
                  </select>
                  <h6>Height</h6>
                  <select id="basic">
                    <option>4’7” - 5’2”</option>
                  </select>
                </div>
                <div className='input-fields'>
                  <h6>Caste & Religion Details</h6>
                  <h6>Religion</h6>
                  <select id="basic">
                    <option>18-22</option>
                  </select>
                  <h6>Caste</h6>
                  <select id="basic">
                    <option>4’7” - 5’2”</option>
                  </select>
                  <h6>Sub-Caste</h6>
                  <select id="basic">
                    <option>4’7” - 5’2”</option>
                  </select>
                </div>
              </div>
              <div className='view-more'>
                <button className='search-btn'>View More
                  <img style={{ width: "auto" }} src={dropdpwn} alt="drop down img"></img>
                </button>
              </div>
            </div>
            <div className='sideby-sidediv-two'>
              <div className='Based'>
                <h6>Based on your prefference</h6>
                <div className='based-cards'>
                  <div className='cardone'>
                    <div className='image'>
                      <img style={{ width: "auto", margin: "15px 30px" }} src={mask15} alt='#'></img>
                    </div>
                    <div className='card-content'>
                      <h6 style={{ fontSize: "15px" }}>Sravani Reddykonda</h6>
                      <p style={{ fontSize: "12px" }}>26 yrs | 5ft 6in</p>
                      <p style={{ fontSize: "12px" }}>Mail - sravani@gmail.com</p>
                      <p style={{ fontSize: "12px" }}>Caste</p>
                      <p style={{ fontSize: "15px" }}>Occupation</p>
                    </div>
                  </div>
                  <div className='cardone'>
                    <div className='image'>
                      <img style={{ width: "auto", margin: "15px 30px" }} src={mask16} alt='#'></img>
                    </div>
                    <div className='card-content'>
                      <h6 style={{ fontSize: "15px" }}>Sravani Reddykonda</h6>
                      <p style={{ fontSize: "12px" }}>26 yrs | 5ft 6in</p>
                      <p style={{ fontSize: "12px" }}>Mail - sravani@gmail.com</p>
                      <p style={{ fontSize: "12px" }}>Caste</p>
                      <p style={{ fontSize: "15px" }}>Occupation</p>
                    </div>
                  </div>
                </div>
                <div className='based-cards-two'>
                  <div className='cardone'>
                    <div className='image'>
                      <img style={{ width: "auto", margin: "15px 30px" }} src={mask14} alt='#'></img>
                    </div>
                    <div className='card-content'>
                      <h6 style={{ fontSize: "15px" }}>Sravani Reddykonda</h6>
                      <p style={{ fontSize: "12px" }}>26 yrs | 5ft 6in</p>
                      <p style={{ fontSize: "12px" }}>Mail - sravani@gmail.com</p>
                      <p style={{ fontSize: "12px" }}>Caste</p>
                      <p style={{ fontSize: "15px" }}>Occupation</p>
                    </div>
                  </div>
                  <div className='cardone'>
                    <div className='image'>
                      <img style={{ width: "auto", margin: "15px 30px" }} src={mask13} alt='#'></img>
                    </div>
                    <div className='card-content'>
                      <h6 style={{ fontSize: "15px" }}>Sravani Reddykonda</h6>
                      <p style={{ fontSize: "12px" }}>26 yrs | 5ft 6in</p>
                      <p style={{ fontSize: "12px" }}>Mail - sravani@gmail.com</p>
                      <p style={{ fontSize: "12px" }}>Caste</p>
                      <p style={{ fontSize: "15px" }}>Occupation</p>
                    </div>
                  </div>
                </div>
                <h6>Based on your prefference</h6>
                <div className='based-cards-two'>
                  <div className='cardone'>
                    <div className='image'>
                      <img style={{ width: "auto", margin: "15px 30px" }} src={mask12} alt='#'></img>
                    </div>
                    <div className='card-content'>
                      <h6 style={{ fontSize: "15px" }}>Sravani Reddykonda</h6>
                      <p style={{ fontSize: "12px" }}>26 yrs | 5ft 6in</p>
                      <p style={{ fontSize: "12px" }}>Mail - sravani@gmail.com</p>
                      <p style={{ fontSize: "12px" }}>Caste</p>
                      <p style={{ fontSize: "15px" }}>Occupation</p>
                    </div>
                  </div>
                  <div className='cardone'>
                    <div className='image'>
                      <img style={{ width: "auto", margin: "15px 30px" }} src={mask17} alt='#'></img>
                    </div>
                    <div className='card-content'>
                      <h6 style={{ fontSize: "15px" }}>Sravani Reddykonda</h6>
                      <p style={{ fontSize: "12px" }}>26 yrs | 5ft 6in</p>
                      <p style={{ fontSize: "12px" }}>Mail - sravani@gmail.com</p>
                      <p style={{ fontSize: "12px" }}>Caste</p>
                      <p style={{ fontSize: "15px" }}>Occupation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
