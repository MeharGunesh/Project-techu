import React from 'react'

export const JoinusTwo = () => {
    return (
        <>
            <div className='join-us'>
                <div className='join-us-today'>
                    <h6>Join Us Today</h6>
                    <h1>Your Journey to Love Starts Here</h1>
                    <p>Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.</p>

                </div>
                <div className='input-div-join'>
                    <div className='input-fields'>
                        <h6>Profile</h6>
                        <select id="basic">
                            <option>18-22</option>
                        </select>
                        <h6>First Name</h6>
                        <input id="basic" type='tel' placeholder='name'></input>
                        <h6>Phone number</h6>
                        <input id="basic" type='tel' placeholder='name'></input>
                    </div>
                    <div className='input-fields'>
                        <h6>Gender</h6>
                        <input id="basic" type='tel' placeholder='name'></input>
                        <h6>Second Name</h6>
                        <input id="basic" type='tel' placeholder='name'></input>
                    </div>
                </div>
                <button className='search-btn'>Search(CTA)</button>
            </div>
        </>
    )
}
