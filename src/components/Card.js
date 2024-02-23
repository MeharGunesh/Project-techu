import React from 'react'
import '../App.css';

export const Card = () => {
    return (
        <>
            <div className='card-div'>
                <h6 className='Main'>Main Heading</h6>
                <div className='inputdiv-one' >
                    <div className="input-one">
                        <p className='Looking'>Looking for</p>
                        <select className='select-one'>
                            <option>Male</option>
                        </select>
                    </div>
                    <div className='input-two'>
                        <p className='Age' >Age</p>
                        <select className='select-two'>
                            <option>Male</option>
                        </select>
                    </div>
                </div>
                <div className='inputdiv-two'>
                    <div className='input-three'>
                        <p className="Relegion">Relegion</p>
                        <select className='select-three'>
                            <option>Male</option>
                        </select>
                    </div>
                    <div className='input-four' >
                        <p className='Mother-Tongue'>Mother Tongue</p>
                        <select className='select-four'>
                            <option>Male</option>
                        </select>
                    </div>
                </div>
                <button className='search-btn'>Search(CTA)</button>
            </div>
        </>
    )
}
