import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center my-4 px-4">
            <div className="flex flex-col md:flex-row md:space-x-2 items-center">
                <h1 className="text-center md:text-left">
                    Created by <span className="font-bold">Sanket R. Waghmare</span>
                </h1>
                <span className="hidden md:block"> | </span>
                <div className="flex items-center space-x-2 justify-center">
                    <FaRegCopyright />
                    <span>2024 All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;

