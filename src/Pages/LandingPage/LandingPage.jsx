import React, { useState } from 'react';

import BackgroundDiv from '../../Components/BackgroundDiv';

import ReactCountryFlag from 'react-country-flag';


const LandingPage = () => {

    const [background, setBackground] = useState('landingPage');
    const [title, setTitle] = useState('Travel Log');
    const [flag, setFlag] = useState('US');


    // slideshow logic
    const [indexPrime, setIndexPrime] = useState(0);
    const [indexSecond, setIndexSecond] = useState(1);
    const [indexThird, setIndexThird] = useState(2);

    const imageDisplay = [ indexPrime, indexSecond, indexThird ]

    function nextPhoto() {
        if (indexPrime === backgroundSettings.length - 1) {
            setIndexPrime(0);
            setIndexSecond(indexSecond + 1);
            setIndexThird(indexThird + 1);
            return
        } 
        else if(indexSecond === backgroundSettings.length - 1) {
            setIndexSecond(0);
            setIndexPrime(indexPrime + 1);
            setIndexThird(indexThird + 1);
            return
        } 
        else if(indexThird === backgroundSettings.length - 1) {
            setIndexThird(0);
            setIndexSecond(indexSecond + 1);
            setIndexPrime(indexPrime + 1);
            return
        }
        else {
            setIndexPrime(indexPrime + 1);
            setIndexSecond(indexSecond + 1);
            setIndexThird(indexThird + 1);
        }
    }
    function prevPhoto() {
        if (indexPrime === 0) {
            setIndexPrime(backgroundSettings.length - 1);
            setIndexSecond(indexSecond - 1); 
            setIndexThird(indexThird - 1); 
            return
        } 
        else if(indexSecond === 0) {
            setIndexSecond(backgroundSettings.length - 1);
            setIndexPrime(indexPrime - 1);
            setIndexThird(indexThird - 1);
            return
        }
        else if(indexThird === 0) {
            setIndexThird(backgroundSettings.length - 1);
            setIndexSecond(indexSecond - 1); 
            setIndexPrime(indexPrime - 1);
        }
        else {
            setIndexPrime(indexPrime - 1);
            setIndexSecond(indexSecond - 1);
            setIndexThird(indexThird - 1);
        }
    }

    const countryCodes = [
        'US',
        'GT',
        'MX',
        'NZ'
    ];
    const backgroundSettings = [
        // Bahamas
        {
            position: 0,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/c7qxbqdtmehml8dkhong.jpg',
            background: 'background1',
            title: 'Bahamas',
            path: '/bahamas',
            countryCode: 'BS',
        },
        // Canada
        {
            position: 1,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/az6foxpi2urwpoh7ezvz.jpg',
            background: 'background2',
            title: 'Canada',
            path: '/canada',
            countryCode: 'CA',
        },
        // Costa Rica
        {
            position: 2,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/dxxajmj8zdkka9rf10ab.jpg',
            background: 'background3',
            title: 'Costa Rica',
            path: '/costarica',
            countryCode: 'CR',
        },
        // Greece
        {
            position: 3,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/t90erqmpraxbdrlqws4z.jpg',
            background: 'background4',
            title: 'Greece',
            path: '/greece',
            countryCode: 'GR',
        },
        // Indonesia
        {
            position: 4,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/qrah3zilihzhzdl6xluk.jpg',
            background: 'background5',
            title: 'Indonesia',
            path: '/indonesia',
            countryCode: 'ID',
        },
        // Morocco
        {
            position: 5,
            image: 'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/fltb8pxxhpw6ilzkwv4j.jpg',
            background: 'background6',
            title: 'Morocco',
            path: '/morocco',
            countryCode: 'MA',
        },
    ];


    return (
        <div className='landingPage'>
            <div className={background}>


                <h1>{title}</h1>
                <ReactCountryFlag
                    countryCode={flag}
                    svg
                    style={{
                        width: '3em',
                        height: '3em',
                    }}
                    title={flag}
                />

                <div className='imagesContainer'>
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
                </div>



                <div className='imagesContainer'>
                    {imageDisplay.map((position) => (
                        <BackgroundDiv
                            key={backgroundSettings[position].position}
                            image={backgroundSettings[position].image}
                            background={backgroundSettings[position].background}
                            setBackground={setBackground}
                            setTitle={setTitle}
                            setFlag={setFlag}
                            title={backgroundSettings[position].title}
                            path={backgroundSettings[position].path}
                            countryCode={backgroundSettings[position].countryCode}
                        />
                    ))}
                </div>
                <button onClick={nextPhoto}>Next Photo</button>
                <button onClick={prevPhoto}>Prev Photo</button>


            </div>
        </div>
    )
}

export default LandingPage;
