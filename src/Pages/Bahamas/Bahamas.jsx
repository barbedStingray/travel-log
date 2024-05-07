import React from 'react';
import ReactPlayer from 'react-player';

import LoremIpsum from '../../Components/LoremIpsum';

import './Bahamas.css';


const Bahamas = () => {

    const sideScroller = ['hobbitHues', 'spartanStrength', 'dToons', 'travelLog', 'pugsNcookeis', 'holidayParticles', 'witchesTODO'];

    return (
        <div className='bahamasPage'>
            <div className='scrollWatcher'></div>


            <div className='bahamasPageTitle'>
                <h1>The Bahamas</h1>
            </div>


            <div className='bahamasScrollWrapper'>



                <h3>Castaway Cay</h3>
                <p>???</p>

                <h5>The Island</h5>
                <p>Island Overview, location... set up...</p>
                <img className='bahamaPic' src='https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715018024/travel-log/Bahamas/photosBahamas/n013y3aib0c8le9dnmlu.jpg' alt='stingray' />
                <LoremIpsum />

                <h5>The Stingrays</h5>
                <p>The Job, the stingrays...</p>
                <img className='bahamaPic' src='https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715018044/travel-log/Bahamas/photosBahamas/c7d0dkl6rqq0roqgg6pk.jpg' alt='stingray' />
                <LoremIpsum />


                <h5>The Crew</h5>
                <p>The people from all over</p>
                <img className='bahamaPic' src='https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715018012/travel-log/Bahamas/photosBahamas/ofoc2l9gcmuvicdwdcsk.jpg' alt='stingray' />
                <LoremIpsum />

                <h5>The Life</h5>
                <p>The fun, the hobbies</p>
                <img className='bahamaPic animateBahamaPic' src='https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715018008/travel-log/Bahamas/photosBahamas/jl8ht8mypjfk1x5dgask.jpg' alt='stingray' />
                <LoremIpsum />


                <h3>Lighthouse Point</h3>
                <p>The coral, the scenes, the food?</p>
                <img className='bahamaPic' src='https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715018024/travel-log/Bahamas/photosBahamas/n013y3aib0c8le9dnmlu.jpg' alt='stingray' />
                <LoremIpsum />

                <h3>Coco Cay</h3>
                <p>Cruise Life, the comparison</p>
                <LoremIpsum />
                <img className='bahamaPic' src='https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715018008/travel-log/Bahamas/photosBahamas/jl8ht8mypjfk1x5dgask.jpg' alt='stingray' />



                <div className='sidescrolling'>
                    <div className='rightScroll' >
                        {sideScroller.map((item, i) => (
                            <p key={i} >{item}</p>
                        ))}
                    </div>
                    <div className='leftScroll' >
                        {sideScroller.map((item, i) => (
                            <p key={i} >{item}</p>
                        ))}
                    </div>

                </div>



                <ReactPlayer
                    url='https://res.cloudinary.com/dzh1qe1zp/video/upload/v1715014616/travel-log/Bahamas/video/trashRace.mp4'
                    playing={false}
                    loop={false}
                    controls={true}
                    light={false}
                // width={'400px'}
                // height={'400px'} 
                // style={}
                // stopOnUnmount={true}
                // wrapper={} element/component to use as a container
                // playIcon={} element or component to use as play button
                />



            </div>









        </div>
    )
}

export default Bahamas
