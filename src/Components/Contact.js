import { useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import validate from "../utils/validate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { myInfo } from "../utils/data";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const res = validate(form);
        if (res !== "") {
            toast.error(res); // Show error toast if validation fails
            return;
        }

        // Show loading toast
        const toastId = toast.loading('Sending your message...');

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_API
            )
            .then(
                () => {
                    // Update the loading toast to success
                    toast.update(toastId, {
                        render: 'Your Message has been sent successfully!',
                        type: 'success',
                        isLoading: false,
                        autoClose: 3000,
                    });
                    form.current.reset(); // Reset the form after sending
                },
                (error) => {
                    // Update the loading toast to error
                    toast.update(toastId, {
                        render: 'Failed to send Message',
                        type: 'error',
                        isLoading: false,
                        autoClose: 5000,
                    });
                }
            );
    };

    return (
        <div className="bg-black text-white my-4 px-4 py-8 flex flex-col items-center" id="contact">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <div className="flex flex-col lg:flex-row justify-between mt-8 w-full lg:px-[20%]">
                <div className="flex justify-center flex-col items-center mb-8 lg:mb-0">
                    <h2 className="text-lg">Stay Connected With</h2>
                    <div className="flex text-2xl space-x-4 my-4 cursor-pointer">
                        <a href={myInfo.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href={myInfo.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href={myInfo.leetcode} target="_blank" rel="noreferrer"><SiLeetcode /></a>
                        <a href={myInfo.twitter} target="_blank" rel="noreferrer"><RiTwitterXFill /></a>
                        <a href={myInfo.geeksforgeeks} target="_blank" rel="noreferrer"><SiGeeksforgeeks /></a>
                        <a href={myInfo.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>

                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 w-full lg:w-1/2">
                    <h2 className="text-lg">Message Me</h2>
                    <div className="flex flex-col md:flex-row md:space-x-4 text-black">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className="rounded-md outline-none text-sm p-2 w-full"
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            className="rounded-md outline-none text-sm p-2 w-full mt-2 md:mt-0"
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="rounded-md outline-none text-black text-sm p-2"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="p-2 text-sm rounded-md text-black outline-none h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-red-500 text-white rounded-md px-6 py-2 w-max text-sm"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
