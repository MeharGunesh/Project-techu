import React from 'react'
import '../App.css';
import mask1 from "../images/Mask group (1).png"
import mask2 from "../images/Mask group (2).png"
import mask3 from "../images/Mask group.png"
import mask4 from "../images/Mask group (3).png"
import mask5 from "../images/Mask group (4).png"
import mask6 from "../images/Mask group (5).png"
import mask7 from "../images/Mask group (6).png"
import mask8 from "../images/Mask group (7).png"
import mask9 from "../images/Mask group (8).png"
import mask10 from "../images/Mask group (9).png"
import mask11 from "../images/Mask group (10).png"

export const Gallery = () => {
  return (
    <>
    <div className='imageframe-div'>
        <div className="image-container">
          <img id='image-frame' src={mask1} alt='#'></img>
          <img id='image-frame' src={mask2} alt='#'></img>
          <img id='image-frame' src={mask3} alt='#'></img>
        </div>
        <div className="imagetwo-container">
          <img id='image-frame' src={mask4} alt='#'></img>
          <img id='image-frame' src={mask5} alt='#'></img>
          <img id='image-frame' src={mask6} alt='#'></img>
          <img id='image-frame' src={mask7} alt='#'></img>
        </div>
        <div className="imagethree-container">
          <img id='image-frame' src={mask8} alt='#'></img>
          <img id='image-frame' src={mask9} alt='#'></img>
          <img id='image-frame' src={mask10} alt='#'></img>
          <img id='image-frame' src={mask11} alt='#'></img>
          <img id='image-frame' style={{}} src={mask3} alt='#'></img>
        </div>
      </div>
    </>
  )
}
