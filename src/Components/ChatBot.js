import { useState } from "react";
import geminiai from "../utils/geminiai";
import { promptData } from "../utils/constant";
import { BsRobot } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import { suggestMsg } from "../utils/constant";

const ChatBot = ({ messages, setMessages }) => {
    const [typing, setTyping] = useState(false);
    const [text, setText] = useState('');



    async function geminiCall(prompt) {
        try {
            const gemini_response = await geminiai.generateContent(prompt);
            return gemini_response.response.text();
        } catch (error) {
            return "Something Went Wrong";
        }
    }


    const handleClick = async (question) => {
        setText('');
        if (question === "") return;
        setTyping(true);
        setMessages((prev) => [
            ...prev,
            { message: question, from: "user" }
        ]);


        const prompt = `Act as Sanket's chatbot. Your name is gemi. Users will ask questions about Sanket; respond in short. 
        If unsure, say I don't have this information. 
        User question is ${question} ?
        Refer to this information:` + promptData;



        const res = await geminiCall(prompt);
        setTyping(false);
        setMessages((prev) => [
            ...prev,
            { message: res, from: "gemini" }
        ]);
    };

    return (
        <div className="fixed bottom-20 right-4 bg-white w-[90vw] max-w-[400px] z-[100] rounded-lg h-[70vh] flex flex-col shadow-lg">
            {/* Header */}
            <div className="flex items-center p-4 bg-red-500 text-white rounded-t-lg space-x-2">
                <BsRobot className="text-2xl" />
                <div className="flex flex-col items-start">
                    <h1 className="font-semibold text-[20px]">Gemi ChatBot</h1>
                    <small className="text-[10px]">Powered By Gemini</small>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {messages.map((m, index) => (
                    <div
                        key={index}
                        className={`flex items-center space-x-1 ${m.from === 'gemini' ? 'justify-start' : 'justify-end'}`}
                    >
                        {m.from === 'gemini' ? <BsRobot className="text-2xl" /> : null}
                        <span
                            className={`px-4 py-2 max-w-[70%] rounded-lg text-white text-sm ${m.from === 'gemini' ? 'bg-red-500' : 'bg-red-600'
                                }`}
                        >
                            {m.message}
                        </span>
                    </div>
                ))}
                {typing ? (
                    <div className="flex justify-start">
                        <span className="px-4 py-2 bg-gray-300 rounded-lg">Typing...</span>
                    </div>
                ) : null}
            </div>
            <div className="flex items-center space-x-1 overflow-x-auto touch-pan-x w-full scrollbar-hide snap-x snap-mandatory p-2">
                {suggestMsg.map((m, index) => (
                    <span
                        key={index}
                        className="text-black text-[15px] bg-gray-300 px-2 py-1 rounded-full cursor-pointer  snap-center whitespace-nowrap"
                        onClick={() => handleClick(m?.message)}
                    >
                        {m?.showText}
                    </span>
                ))}
            </div>

            <div className="flex items-center p-2 border-t border-gray-300">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-red-300"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ask something about Sanket..."
                />
                <button onClick={() => handleClick(text)} className="ml-2 text-red-500 hover:text-red-700 transition">
                    <GrSend className="text-2xl mx-[5px]" />
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
