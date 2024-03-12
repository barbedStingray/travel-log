import './App.css';
import { AnimatePresence } from 'framer-motion';


// browser
import { Routes, Route, useLocation } from 'react-router-dom';

// components
import LandingPage from './Pages/LandingPage/LandingPage';
import BuildingPage from './Pages/BuildingPage/BuildingPage';
import Morocco from './Pages/Morocco/Morocco';


function App() {

  const location = useLocation();

  console.log('location', location);

  return (
    <div className="travelLog">

      <AnimatePresence
        mode='wait'
        // initial={false}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<BuildingPage />} />
          {/* <Route path='/morocco' element={<Morocco />} /> */}
        </Routes>
      </AnimatePresence>


    </div>
  );
}

export default App;
