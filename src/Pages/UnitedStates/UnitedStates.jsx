import React from 'react';

import './UnitedStates.css';

const UnitedStates = () => {

  const diamondImages = [
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096938/travel-log/unitedStates/Alaska/irj5k2rdlmr6tw82ttnj.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096943/travel-log/unitedStates/Alaska/jmacuvf9ghbf4mdrqrad.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096943/travel-log/unitedStates/Alaska/cjyysmoltusmqx3hxabb.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096942/travel-log/unitedStates/Alaska/kkun21rkygtghx4hznhj.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096941/travel-log/unitedStates/Alaska/yz9mtjfm1ydpjrznmeri.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096940/travel-log/unitedStates/Alaska/ydfka4zy2k4rjellxg9s.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096938/travel-log/unitedStates/Alaska/vluacj9dojckccwpwbp8.jpg',
    'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1715096938/travel-log/unitedStates/Alaska/psgv2stfi6ag1j07vvvk.jpg',
  ];


  return (
    <div className='unitedStatesPage'>


      <div className='coolDiamondContainer'>
        <div className='coolDiamonds'>
          {diamondImages.map((pic, i) => (
            <img className='alaskaPic' key={i} alt='alska pic' src={pic} />
          ))}
        </div>
      </div>




    </div>
  )
}

export default UnitedStates
