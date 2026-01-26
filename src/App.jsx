import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';

function App() { 
  return ( 
    <Router>
      <Routes>
        {/* The "Home" station */}
        <Route path="/" element={<Home />} />
        
        {/* The "Accommodations" station */}
        <Route path="/accommodations" element={<Accommodations />} />
      </Routes>
    </Router> 
  ); 
}

export default App;

