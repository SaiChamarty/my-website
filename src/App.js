import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='Text'>
          <div className='intro'>
            <h1>Hey there! I'm</h1>
          </div>
          <div className='name'>
            <h1>Sai Chamarty</h1>
          </div>
          <div className='description'>
            <h1>I am an engineer passionate about App development and Machine Learning.</h1>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;