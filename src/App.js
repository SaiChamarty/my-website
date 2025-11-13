import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Saiborg from './components/Saiborg/Saiborg';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound'; // Your custom 404 component
import Research from './components/Research/Research';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/saiborg" element={<Saiborg />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;