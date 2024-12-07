import React, { useContext } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaqsContext } from '../Context/FaqsContext';


export default function FaqsMain() {
    const {activeFaq,handleToggle,faqsData,handleThemeToggle,theme } = useContext(FaqsContext);

    return (
        <div className="flex justify-center items-center  border-2  flex-col max-w-lg m-2 rounded-xl p-6">
            <div className='flex justify-between w-full mb-12 '>
            <h1 className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white' }  text-lg sm:text-xl`}>5 Basic React FAQs</h1>
            <button
            className={`relative w-12 h-6 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'}`}
            onClick={handleThemeToggle}
            >
                <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${theme === 'light' ? 'translate-x-0' : 'translate-x-6'}`}
                ></div>
            </button>

            </div>
            {faqsData.map((faq, index) => (
                <div key={index} className="w-full border-b  mb-4 pb-2">
                    <div className="flex justify-between items-center">
                        <p className={`text-[16px] ${theme === 'light' ? 'text-black' : 'text-white' }  sm:text-[18px]`}>{faq.question}</p>
                        <button
                            className="text-lg  px-2"
                            onClick={() => handleToggle(index)}
                        >
                            {activeFaq === index ?<FaAngleUp className={`${theme === 'light' ? 'text-black' : 'text-white'}`} />
 : <FaAngleDown className={`${theme === 'light' ? 'text-black' : 'text-white'}`} />

                            }
                        </button>
                    </div>
                    <p
                        className={`${
                            activeFaq === index ? 'block' : 'hidden'
                        } mt-2 ${theme === 'light' ? 'text-black' : 'text-white' }  text-[13px] sm:text-[15px]`}
                    >
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    );
}
