import React from 'react'

export default function Sidebar(props) {
    const  {handleToggleModal, data} = props
    return (
        <div className='sideBar'>
            <div className='bgOverlay' onClick={ handleToggleModal}> </div>
            <div className='sideBarContents'>
                <h2>{data?.date}</h2>
                <div className='descriptionContainer'>
                    <p className='description'>Description</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </button>
            </div>

        </div>
    )
}
