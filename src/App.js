import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Saiborg from './components/Saiborg/Saiborg';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Research from './components/Research/Research';
import Footer from './components/Footer/Footer';


function AppLayout() {
  const location = useLocation();
  const hideFooter = location.pathname === '/projects';
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <div className='App'>
      <div className="site-bg" />
      <div className="site-grid" />
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/saiborg" element={<Saiborg />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
      <button
        type="button"
        className="theme-fab"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
