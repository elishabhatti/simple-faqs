import React, { useContext } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaqsContext } from '../Context/FaqsContext';


export default function FaqsMain() {
    const {activeFaq,handleToggle,faqsData} = useContext(FaqsContext);

    return (
        <div className="flex justify-center items-center border border-gray-400  flex-col max-w-lg m-2 bg-white rounded-xl p-6">
            <div className='flex justify-between w-full mb-10 '>
            <h1 className='font-bold  text-lg sm:text-xl'>5 Basic React FAQs</h1>
            <button>Switch To Theme</button>
            </div>
            {faqsData.map((faq, index) => (
                <div key={index} className="w-full border-b  mb-4 pb-2">
                    <div className="flex justify-between items-center">
                        <p className="text-[16px] sm:text-[18px]">{faq.question}</p>
                        <button
                            className="text-lg  px-2"
                            onClick={() => handleToggle(index)}
                        >
                            {activeFaq === index ?<FaAngleUp /> : <FaAngleDown />
                            }
                        </button>
                    </div>
                    <p
                        className={`${
                            activeFaq === index ? 'block' : 'hidden'
                        } mt-2 text-gray-700 text-[13px] sm:text-[15px]`}
                    >
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    );
}
