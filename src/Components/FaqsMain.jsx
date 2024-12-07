import React, { useContext } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaqsContext } from '../Context/FaqsContext';

export default function FaqsMain() {
    const { activeFaq, handleToggle, faqsData, handleThemeToggle, theme } = useContext(FaqsContext);

    return (
        <div className="flex justify-center items-center  flex-col max-w-lg m-2 rounded-xl p-6">
            <div className="flex justify-between w-full mb-12  ">
                <h1 className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'} mr-2 text-lg sm:text-xl  `}>FAQs :</h1>
                <button
                    className={`relative w-12 h-6 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'}`}
                    onClick={handleThemeToggle}
                >
                    <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${theme === 'light' ? 'translate-x-0' : 'translate-x-6'}`}
                    ></div>
                </button>
            </div>
            <div className="w-full max-h-[calc(100vh-200px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                {faqsData.map((faq, index) => (
                    <div key={index} className="w-full border-b mb-4 pb-2">
                        <div className="flex justify-between items-center">
                            <p className={`text-[16px] ${theme === 'light' ? 'text-black' : 'text-white'} sm:text-[18px]`}>
                                {faq.question}
                            </p>
                            <button
                                className="text-lg px-2 transform transition-transform duration-300"
                                onClick={() => handleToggle(index)}
                            >
                                {activeFaq === index ? (
                                    <FaAngleUp className={`${theme === 'light' ? 'text-black' : 'text-white'}`} />
                                ) : (
                                    <FaAngleDown className={`${theme === 'light' ? 'text-black' : 'text-white'}`} />
                                )}
                            </button>
                        </div>
                        <div
                            className={`overflow-hidden mt-2 transition-all duration-500 ease-in-out transform ${activeFaq === index ? 'max-h-screen' : 'max-h-0'}`}
                        >
                            <p
                                className={`text-[13px] sm:text-[15px] ${theme === 'light' ? 'text-black' : 'text-white'}`}
                            >
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
