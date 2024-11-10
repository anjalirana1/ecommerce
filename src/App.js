import { useEffect } from 'react';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
  return (
    <>
       <Navbar/>
       <Home/>
       <Footer/>
    </>
  );
}

export default App;
