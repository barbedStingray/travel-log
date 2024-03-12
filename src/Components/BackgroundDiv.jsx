import React from 'react';
import { Link } from 'react-router-dom';

const BackgroundDiv = ({ 
    image, 
    background, 
    title, 
    path, 
    setBackground, 
    setTitle, 
    setCountryCSS, 
    titleCSS
    }) => {


    function backgroundChange(newPic) {
        console.log(`titleCSS`, titleCSS);
        setBackground(newPic);
        setTitle(title);
        setCountryCSS(titleCSS);
    }
    function backgroundReset(newPic) {
        setBackground(newPic);
    }

    

    return (
        <Link to={path}>
            <img 
                onMouseEnter={() => backgroundChange(background)}
                onMouseLeave={() => backgroundReset(`${background} hidden`)}
                className='imagePic'
                src={image}
            />
        </Link>

    )
}

export default BackgroundDiv
