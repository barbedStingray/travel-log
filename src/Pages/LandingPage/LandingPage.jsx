import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';

import BackgroundDiv from '../../Components/BackgroundDiv';

import ReactCountryFlag from 'react-country-flag';

// react-icons
import { GiCompass } from "react-icons/gi";





const LandingPage = () => {

    const [background, setBackground] = useState('');
    const [title, setTitle] = useState('');
    const [photoSlides, setPhotoSlides] = useState('imagesContainer');
    // const [flag, setFlag] = useState('US');

    // slideshow logic
    const [indexPast, setIndexPast] = useState(0);
    const [indexPrime, setIndexPrime] = useState(1);
    const [indexFuture, setIndexFuture] = useState(2);
    const imageDisplay = [indexPast, indexPrime, indexFuture];


    // need a useEffect to unhide them. 
    useEffect(() => {
        setTimeout(displaySlideshow, 4000);
        // refactor to filter through photos without hardcode
        setTimeout(() => nextPhoto(1), 1000);
        setTimeout(() => nextPhoto(4), 2000);
        setTimeout(() => nextPhoto(7), 3000);
        setTimeout(() => nextPhoto(8), 4000);
    }, []);
    // slideshow 3 pic rotation
    function displaySlideshow() {
        setPhotoSlides('imagesContainer unhide');
    }
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

    // motion svg criteria
    const stingcon = {
        hidden: {
            // opacity: 0,
            pathLength: 0,
            fill: "rgba(0, 128, 0, 0)"
        },
        visible: {
            // opacity: 1,
            pathLength: 1,
            fill: "rgba(0, 128, 0, 1)"
        }

    };



    return (
        <m.div
            className='landingPage'
            key={'/'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >


            <h1 className='titleLog'>Travel Log</h1>
            {/* <ReactCountryFlag
                    countryCode={flag}
                    svg
                    style={{
                        width: '3em',
                        height: '3em',
                    }}
                    title={flag}
                /> */}
            <div className='stingrayContainer'>
                <m.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3895 3740"
                    className="stingray"
                >
                    <m.path
                        d="M1770.99 2.98038C1455.45 28.6281 1162.66 124.129 901.792 286.484C876.056 302.499 855.841 316.443 856.867 317.469C857.893 318.495 878.013 311.841
                            901.58 302.686C1151.83 205.462 1447.37 158.449 1758.53 166.365C1815.64 167.819 1884.8 170.905 1912.21 173.227C2312.95 207.161 2657.78 350.792
                            2979.69 617.86C3076.83 698.454 3218.96 850.608 3291.87 952.073C3533.89 1288.85 3672.05 1765.17 3661.67 2227.01C3655.56 2498.86
                            3605.45 2742.43 3508.27 2972.56C3417.6 3187.27 3296.82 3364.96 3127.4 3532.88C3087.28 3572.64 3059.13 3602.74 3064.84
                            3599.76C3113.97 3574.18 3227.62 3496.38 3300.37 3438.55C3358.2 3392.58 3480.78 3269.95 3527.46 3211.38C3733.78 2952.49 3846.89
                            2647.33 3885.37 2245.7C3899.82 2094.97 3897.78 1867.84 3880.78 1734.82C3806.78 1155.68 3485.59 642.478 2996.3 321.589C2920.9 272.138
                            2863.83 240.094 2772.14 195.735C2567.21 96.583 2366.08 38.1644 2136.27 11.0423C2051.52 1.04071 1849.64 -3.41596 1770.99 2.98038ZM1281.37
                            333.248C771.664 426.863 395.16 694.192 187.14 1110.19C41.153 1402.13 -27.2195 1791.51 9.99681 2119.02C51.3625 2483.01 198.994 2840 413.64 3095.08C625.652 3347.03
                            879.608 3525.64 1181.29 3634.99C1678.5 3815.22 2248.85 3761.1 2701.4 3490.74C2776.84 3445.67 2855.6 3374.41 2911.86 3300.3C2938.36 3265.4 2966.68 3221.77 2962.84
                            3221.77C2961.43 3221.77 2941.83 3235.66 2919.28 3252.65C2569.93 3515.8 2133.45 3631.6 1697.91 3576.69C1045.84 3494.47 493.792 3026.91 302.938 2395.22C227.056 2144.07 211.783 1866.45
                            259.516 1606.07C308.84 1337.02 426.458 1080.27 600.091 862.595C655.874 792.667 791.123 656.927 857.199 604.552C998.521 492.541 1137.97 411.196 1297.48 347.702C1366.7 320.148 1364.32
                            318.013 1281.37 333.248ZM2259.04 519.896C2176.47 538.441 2112.96 594.941 2083.92 675.689C2074.77 701.129 2074.22 708.198 2074.46 798.216C2074.67 876.401 2076.75 909.583 2085.89 980.969C2106.01 1138.15 2109.45 1207.78
                            2100.92 1285.37C2088.74 1396.26 2058.2 1483.36 2002.21 1566.9C1887.51 1738.06 1679.14 1838.66 1439.33 1838.66C1321.06 1838.66 1238.68 1803.09 1154.13 1715.52C1110.15 1669.97 1089.85 1643.71 1021.37
                            1543.76C925.306 1403.57 874.573 1350.3 802.409 1313.86C746.821 1285.79 661.743 1276.27 607.983 1292.11C496.396 1324.99 406.624 1435.65 385.545 1566.32C378.592 1609.42 382.77 1704.64 393.898 1756.67C432.805 1938.6 542.09 2097.36 690.477 2187.51C705.563 2196.67
                            719.432 2204.17 721.297 2204.17C723.162 2204.17 727.162 2197.16 730.186 2188.59C741.33 2156.98 763.934 2111.54 781.961 2084.51C804.361 2050.93 852.028 2002.87 888.542 1977.05C912.974 1959.78 985.986 1921.73 994.704
                            1921.73C996.702 1921.73 985.267 1930.42 969.301 1941.04C934.082 1964.47 879.649 2018.65 857.319 2052.5C790.77 2153.39 768.004 2279.81 798.866 2377.11C840.198 2507.43 948.333 2564.78 1123.03 2549.03C1397.72 2524.26 1722.17
                            2361.53 1963.42 2127.52C2154.1 1942.56 2283.91 1734.13 2333.43 1533.38C2355.05 1445.71 2364.75 1317.75 2361.6 1161.64C2358.14 990.572 2344.98 897.027 2309.34 790.009C2304.79 776.356 2301.62 764.639 2302.29 763.971C2302.96 763.302 2314.84 789.423 2328.68
                            822.02C2373.34 927.106 2393.23 1000.72 2407.18 1112.47C2416.17 1184.44 2417.69 1449.13 2409.41 1500.15C2385.33 1648.58 2354.27 1746.66 2291.67 1871.89C2218.96 2017.35 2133.58 2134.32 2011.43 2255.82C1963.5 2303.49 1884.69 2372.16 1848.96 2397.37C1830.76 2410.21
                            1825.85 2418.18 1838.49 2414.35C1852.3 2410.17 2049.5 2382.93 2113.66 2376.34C2149.07 2372.7 2227.14 2368.65 2287.15 2367.33L2396.25 2364.93L2387.96 2383.2C2368.65 2425.77 2383.08 2463.92 2422.53 2474.54C2444.24 2480.39 2465.25 2474.98 2520.93 2449.22C2581.31 2421.28 2617.54
                            2411.66 2672.75 2408.89C2745.58 2405.24 2801.58 2421.34 2882.42 2469.16C2987.63 2531.4 3053.96 2598.75 3100.02 2690.12C3155.64 2800.42 3168.77 2926.17 3139.02 3063.55C3091.1 3284.84 2923.06 3494.15 2686.86 3626.73C2638.35 3653.97 2556.36 3692.13 2507.26 3710.34C2489.58 3716.89 2475.1
                            3723.46 2475.07 3724.92C2474.96 3731.46 2615.61 3695.47 2688.94 3670.2C2965.39 3574.93 3145.16 3422.22 3258.37 3186.46C3357.16 2980.74 3364.36 2759.24 3278.57 2564.87C3232.26 2459.9 3188.74 2404.34 3059.2 2284.76C3021.31 2249.78 3004.67 2214.97 3004.63 2170.64C3004.61 2141.51 3005.77 2137.33 3020.28 2113.8C3041.65
                            2079.14 3048.23 2058.47 3048.18 2026.08C3048.08 1956.32 2993.95 1909.42 2927.11 1921.19C2901.71 1925.67 2869.99 1938.87 2845.81 1955.02L2832.38 1963.99L2854.83 1916.9C2920.6 1778.97 2946.05 1618.94 2932.32 1429.54C2917.36 1223.01 2872.46 1047.47 2794.32 890.024C2699.17 698.279 2568.97 571.408 2422.8 528.004C2376.27 514.185 2301.05 510.46 2259.04 519.896Z
                            "
                        variants={stingcon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 10, ease: "easeInOut" },
                            fill: { duration: 1, ease: [1, 0, 0.8, 1], delay: 4.5 }
                        }}
                    />
                </m.svg>
            </div>

            {/* maps just 3 locations to the dom */}
            <div className={photoSlides}>

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
                <div
                    className='compassIcon'
                    onClick={() => nextPhoto(indexPrime)}
                >
                    <GiCompass />
                </div>
            </div>

            <div className={background}>
                <h1>{title}</h1>
            </div>


        </m.div>
    )
}

export default LandingPage;
