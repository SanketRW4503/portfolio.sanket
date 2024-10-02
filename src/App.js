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
import ChatBot from './Components/ChatBot';
import { BsRobot } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [chatbot, setChatBot] = useState(false);
  const [messages, setMessages] = useState([
    { message: "What would you like to know about Sanket?", from: "gemini" },
  ]);

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
          className='fixed bottom-20 right-6 bg-gradient-to-r from-red-500 to-red-700 p-2 rounded-lg text-white text-4xl font-bold hover:shadow-inner'>
          <RxDoubleArrowUp />
        </button>
      )}

      {
        chatbot ?
          <ChatBot messages={messages} setMessages={setMessages} /> : null

      }

      <div
        className='flex items-center fixed bottom-4 right-6 p-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white text-2xl cursor-pointer hover:scale-105 transition-transform transform hover:shadow-lg'
        onClick={() => setChatBot(!chatbot)}
      >

        <div className='text-white p-2  '>
          {
            chatbot ? <IoMdClose /> : <BsRobot />
          }

        </div>
      </div>
    </>
  );
}

export default App;
