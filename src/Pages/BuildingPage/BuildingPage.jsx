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
      <h1>Sorry, I'm not complete yet!</h1>
      <p>Have a drink...</p>
      <p>Enjoy the View...</p>
      <Link to='/'><p>Travel Back Home</p></Link>
    </m.div>
  )
}

export default BuildingPage
