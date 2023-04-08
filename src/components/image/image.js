import React from 'react'
import './image.css'
import myImage from '../../assests/myImage.jpeg'

const Image = () => {
    return (
        <div className="imageDiv">
            <img src={myImage} alt="Hla Htun" id="hlaPicture"/>
        </div>
    )
}

export default Image