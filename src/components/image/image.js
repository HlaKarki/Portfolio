import React from 'react'
import './image.css'
import myImage from '../../assests/myImage.jpeg'

const Image = () => {
    return (
        <div>
            <img src={myImage} alt="Picture of Hla Htun" id="hlaPicture"/>
        </div>
    )
}

export default Image