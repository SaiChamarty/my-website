import '../App.css';
import Navbar from './Navbar';

function Home() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Text'>
        <div className='name'>
          <h1>Home page</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
