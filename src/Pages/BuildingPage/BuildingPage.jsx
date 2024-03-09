import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';


const BuildingPage = () => {
  return (
    <m.div
      className='buildingPage'
      key={'/'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}

    >
      <h1>Still working this one out!</h1>
      <p>Come back another time to see the updates!</p>
      <p>In the meantime... Enjoy the View...</p>
      <Link to='/'><p>Travel Back Home</p></Link>
    </m.div>
  )
}

export default BuildingPage
