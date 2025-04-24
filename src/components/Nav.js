import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import FindRestroom from './components/FindRestroom';
import About from './components/About';
import Contact from './components/Contact';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<FindRestroom />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <footer className='Nav-footer'><p className='Nav-footer-text'>© 2023 Restroom Finder. All rights reserved.</p></footer>
    </Router>
  );
}

export default App;
