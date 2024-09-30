import { useState } from "react";
import { myInfo } from "../utils/data";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center',  // Ensures the section is centered
        });
        setIsMenuOpen(false); // Close menu when navigating
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="flex justify-between p-4 z-10 items-center font-bold fixed top-0 left-0 right-0 w-screen bg-black text-white cursor-pointer px-4 md:px-[10%] overflow-hidden">
                <h1 className="text-lg md:text-2xl">Portfolio.<span className="text-red-500">{myInfo.firstName}</span></h1>
                <ul className="hidden md:flex space-x-8">
                    <li className="hover:text-red-500" onClick={() => scrollToSection('home')}>Home</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('about')}>About</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('projects')}>Projects</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Fullscreen Mobile Menu */}
            <div className={`fixed top-0 left-0 w-screen h-screen bg-black text-white z-20 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
                <ul className="flex flex-col justify-center items-center space-y-8 h-full text-2xl">
                    <li className="hover:text-red-500" onClick={() => scrollToSection('home')}>Home</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('about')}>About</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('projects')}>Projects</li>
                    <li className="hover:text-red-500" onClick={() => scrollToSection('contact')}>Contact</li>
                    <button className="mt-8 text-red-500 text-lg" onClick={toggleMenu}>Close</button>
                </ul>
            </div>
        </>
    );
};

export default Header;
