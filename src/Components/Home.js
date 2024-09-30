import useSpeedtype from "../utils/customHooks/useSpeedtype";
import { myInfo, uiInfo } from "../utils/data";

const Home = () => {
    const word = useSpeedtype(myInfo.profession, 200);


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center',  // Ensures the section is centered
        });
    };

    const bgStyle = {
        backgroundImage: `url('${uiInfo.homeBG}')`, // Absolute path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as per your needs
    };

    return (
        <div style={bgStyle} className="flex justify-center items-center flex-col text-white drop-shadow-lg" id="home">
            <img
                src={myInfo.profile_picture}
                alt="Profile-Picture"
                width={200}
                height={200}
                className="rounded-full shadow-lg mb-4"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center [text-shadow:_2px_0px_8px_#000000]">
                Hello 👋 I'm {myInfo.firstName}
            </h1>
            <span className="text-xl md:text-2xl text-center [text-shadow:_2px_0px_8px_#000000]">
                and I am a
                <span className="font-bold text-red-500"> {word}</span>
                <span className="[text-shadow:_2px_0px_8px_#000000] blinking-cursor text-white"> |</span>
            </span>
            <div className="flex flex-col md:flex-row md:space-x-8 m-4 items-center justify-center">
                <a href={myInfo.resume} target="_blank" rel="noreferrer"><button className="px-8 py-2 mt-2 rounded-md bg-black text-sm md:text-base">Download Resume</button></a>
                <button onClick={() => scrollToSection('contact')}
                    className="px-8 py-2 mt-2 rounded-md bg-red-500 hover:scale-110 transition-all duration-150 ease-in-out text-sm md:text-base">
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default Home;
