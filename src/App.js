import './App.css';

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

      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        {/* <Route path="*" element={ <BuildingPage /> } /> */}
        {/* <Route path='/morocco' element={ <Morocco /> } /> */}
      </Routes>



    </div>
  );
}

export default App;
