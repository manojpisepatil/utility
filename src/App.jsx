import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import SocialBar from './components/SocialBar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Cards />
      <SocialBar />
    </div>
  );
}

export default App;