import React from 'react';
import { Link } from 'react-router-dom';

const BackgroundDiv = ({ 
    image, 
    background, 
    title, 
    path, 
    countryCode, 
    setBackground, 
    setTitle, 
    setFlag, }) => {


    function backgroundChange(newPic) {
        console.log('the mouse entered');
        setBackground(newPic);
        setTitle(title);
        setFlag(countryCode);
    }

    

    return (
        // <Link to={path}>
            <img 
                onMouseEnter={() => backgroundChange(background)}
                onMouseLeave={() => backgroundChange(`${background} hidden`)}
                className='imagePic'
                src={image}
            />
        // </Link>

    )
}

export default BackgroundDiv
