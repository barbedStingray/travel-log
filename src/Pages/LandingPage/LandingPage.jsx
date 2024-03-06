import React, { useState } from 'react';

import BackgroundDiv from '../../Components/BackgroundDiv';

import ReactCountryFlag from 'react-country-flag';


const LandingPage = () => {

    const [background, setBackground] = useState('landingPage');
    const [title, setTitle] = useState('Travel Log');

    const countryCodes = [
        'US',
        'BS',
        'CA',
        'CR',
        'GR',
        'GT',
        'ID',
        'MX',
        'MA',
        'NZ'
    ];
    const backgroundSettings = [
        // Bahamas
        {
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/c7qxbqdtmehml8dkhong.jpg',
            background: 'background1',
            title: 'Bahamas',
            path: '/bahamas',
        },
        // Canada
        {
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/az6foxpi2urwpoh7ezvz.jpg',
            background: 'background2',
            title: 'Canada',
            path: '/canada',
        },
        // Costa Rica
        {
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/dxxajmj8zdkka9rf10ab.jpg',
            background: 'background3',
            title: 'Costa Rica',
            path: '/costarica',
        },
        // Greece
        {
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/t90erqmpraxbdrlqws4z.jpg',
            background: 'background4',
            title: 'Greece',
            path: '/greece',
        },
        // Indonesia
        {
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/qrah3zilihzhzdl6xluk.jpg',
            background: 'background5',
            title: 'Indonesia',
            path: '/indonesia',
        },
        // Morocco
        {
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/fltb8pxxhpw6ilzkwv4j.jpg',
            background: 'background6',
            title: 'Morocco',
            path: '/morocco',
        },
    ];


    return (
        <div className='landingPage'>
            <div className={background}>


                <h1>{title}</h1>

                <div className='imagesContainer'>
                    {backgroundSettings.map((pic, i) => (
                        <BackgroundDiv
                            key={i}
                            image={pic.image}
                            background={pic.background}
                            setBackground={setBackground}
                            setTitle={setTitle}
                            title={pic.title}
                            path={pic.path}
                        />
                    ))}
                </div>

                {countryCodes.map((country) => (
                    <ReactCountryFlag
                        countryCode={country}
                        svg
                        style={{
                            width: '3em',
                            height: '3em',
                        }}
                        title={country}
                    />
                ))}

            </div>
        </div>
    )
}

export default LandingPage;
