import React from 'react';
import { Link } from 'react-router-dom';

const BackgroundDiv = ({ image, background, title, path, setBackground, setTitle }) => {

    function backgroundChange(newPic) {
        console.log('the mouse entered');
        setBackground(newPic);
        setTitle(title);
    }

    return (
        // <Link to={path}>
            <img onMouseEnter={() => backgroundChange(background)}
                className='imagePic'
                src={image}
            />
        // </Link>

    )
}

export default BackgroundDiv
