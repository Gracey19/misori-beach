import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import The_Lake from './pages/The_Lake';
import Contact from './pages/contact';

function App() { 
  return ( 
    <Router>
      <Routes>
        {/* The "Home" station */}
        <Route path="/" element={<Home />} />
        
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/lake" element={<The_Lake />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> 
  ); 
}

export default App;

