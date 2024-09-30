import './App.css';
import { useState, useEffect } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import SkillSection from './Components/SkillSection';
import { RxDoubleArrowUp } from "react-icons/rx";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header />
      <Home />
      <About />
      <SkillSection />
      <Project />
      <Contact />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 bg-red-500 p-2 rounded-lg text-white text-4xl font-bold hover:shadow-inner'>
          <RxDoubleArrowUp />
        </button>
      )}
    </>
  );
}

export default App;
