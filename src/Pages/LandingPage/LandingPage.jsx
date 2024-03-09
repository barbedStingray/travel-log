import React, { useState } from 'react';
import { motion as m } from 'framer-motion';

import BackgroundDiv from '../../Components/BackgroundDiv';

import ReactCountryFlag from 'react-country-flag';




const LandingPage = () => {

    const [background, setBackground] = useState('');
    const [title, setTitle] = useState('Travel Log');
    // const [flag, setFlag] = useState('US');

    // slideshow logic
    const [indexPast, setIndexPast] = useState(0);
    const [indexPrime, setIndexPrime] = useState(1);
    const [indexFuture, setIndexFuture] = useState(2);
    const imageDisplay = [indexPast, indexPrime, indexFuture];


    // slideshow 3 pic rotation
    function nextPhoto(indexPrime) {
        if (indexPrime + 3 > backgroundSettings.length) {
            const prime = (indexPrime + 3) - (backgroundSettings.length);
            const future = prime + 1;
            const past = prime - 1;
            setIndexPrime(prime);
            setIndexPast(past);
            setIndexFuture(future);
            return
        }
        else if (indexPrime + 3 === backgroundSettings.length) {
            const prime = 0;
            const future = prime + 1;
            const past = backgroundSettings.length - 1;
            setIndexPrime(prime);
            setIndexPast(past);
            setIndexFuture(future);
            return
        }
        else if (indexPrime + 3 === backgroundSettings.length - 1) {
            const prime = (indexPrime + 3);
            const past = prime - 1;
            const future = 0;
            setIndexPrime(prime);
            setIndexPast(past);
            setIndexFuture(future);
            return
        }
        else {
            const prime = indexPrime + 3;
            const future = prime + 1;
            const past = prime - 1;
            setIndexPrime(prime);
            setIndexFuture(future);
            setIndexPast(past);
            return
        }
    }
    const backgroundSettings = [
        // United States
        {
            position: 0,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/nsasmhmuylu09u3hd4sz.jpg',
            background: 'background0',
            title: 'United States',
            path: '/unitedstates',
            countryCode: 'US',
        },
        // Bahamas
        {
            position: 1,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/c7qxbqdtmehml8dkhong.jpg',
            background: 'background1',
            title: 'Bahamas',
            path: '/bahamas',
            countryCode: 'BS',
        },
        // Canada
        {
            position: 2,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/az6foxpi2urwpoh7ezvz.jpg',
            background: 'background2',
            title: 'Canada',
            path: '/canada',
            countryCode: 'CA',
        },
        // Indonesia
        {
            position: 3,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/qrah3zilihzhzdl6xluk.jpg',
            background: 'background3',
            title: 'Indonesia',
            path: '/indonesia',
            countryCode: 'ID',
        },
        // Mexico
        {
            position: 4,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/yop6mdflwgyu8y1t8inv.jpg',
            background: 'background4',
            title: 'Mexico',
            path: '/mexico',
            countryCode: 'MX',
        },
        // Guatemala
        {
            position: 5,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/saaraaxwom7julwcc9sa.jpg',
            background: 'background5',
            title: 'Guatemala',
            path: '/guatemala',
            countryCode: 'GT',
        },
        // Costa Rica
        {
            position: 6,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/dxxajmj8zdkka9rf10ab.jpg',
            background: 'background6',
            title: 'Costa Rica',
            path: '/costarica',
            countryCode: 'CR',
        },
        // Greece
        {
            position: 7,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/t90erqmpraxbdrlqws4z.jpg',
            background: 'background7',
            title: 'Greece',
            path: '/greece',
            countryCode: 'GR',
        },
        // Morocco
        {
            position: 8,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/fltb8pxxhpw6ilzkwv4j.jpg',
            background: 'background8',
            title: 'Morocco',
            path: '/morocco',
            countryCode: 'MA',
        },
        // New Zealand
        {
            position: 9,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/woppieclfpcedlr6xoun.jpg',
            background: 'background9',
            title: 'New Zealand',
            path: '/newzealand',
            countryCode: 'NZ',
        },
    ];


    return (
        <m.div 
            className='landingPage'
            key={'/'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}      
        >


            <div className='indexDiv'>
                <h1>{title}</h1>
                {/* <ReactCountryFlag
                    countryCode={flag}
                    svg
                    style={{
                        width: '3em',
                        height: '3em',
                    }}
                    title={flag}
                /> */}
            </div>
            <h1>March 8th, 2024</h1>
            <h1>X</h1>

            {/* maps all locations to the dom */}
            {/* <div className='imagesContainer'>
                {backgroundSettings.map((pic, i) => (
                    <BackgroundDiv
                        key={i}
                        image={pic.image}
                        background={pic.background}
                        setBackground={setBackground}
                        setTitle={setTitle}
                        setFlag={setFlag}
                        title={pic.title}
                        path={pic.path}
                        countryCode={pic.countryCode}
                    />
                ))}
            </div> */}


            {/* maps just 3 locations to the dom */}
            <div className='imagesContainer'>
                {imageDisplay.map((position) => (
                    <BackgroundDiv
                        key={backgroundSettings[position].position}
                        image={backgroundSettings[position].image}
                        background={backgroundSettings[position].background}
                        setBackground={setBackground}
                        setTitle={setTitle}
                        title={backgroundSettings[position].title}
                        path={backgroundSettings[position].path}
                    />
                ))}
            </div>

            <div className='indexDiv'>
                <button onClick={() => nextPhoto(indexPrime)}>Next Photo</button>
            </div>

            <div className={background}></div>

        </m.div>
    )
}

export default LandingPage;
