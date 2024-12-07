import React, { createContext,useState } from 'react'

 const FaqsContext = createContext()

const FaqsProvider = ({children}) => {
        // State for each FAQ toggle
        const [activeFaq, setActiveFaq] = useState(null);

        // Function to handle toggling of a specific FAQ
        const handleToggle = (index) => {
            setActiveFaq(activeFaq === index ? null : index);
        };
    
        const faqsData = [
            {
                question: "1. What is React.js?",
                answer: "React.js is a JavaScript library developed by Facebook for building user interfaces. It is used for creating single-page applications (SPAs) and allows developers to build reusable UI components."
            },
            {
                question: "2. What are React components?",
                answer: "React components are the building blocks of a React application. They are reusable pieces of code that define how a part of the UI should look and behave. Components can be functional or class-based."
            },
            {
                question: "3. What is the Virtual DOM in React?",
                answer: "The Virtual DOM is a lightweight representation of the actual DOM. React uses the Virtual DOM to improve performance by making updates more efficient. When the state of an object changes, React updates the Virtual DOM and compares it with the previous version to determine the minimal set of updates needed for the real DOM."
            },
            {
                question: "4. What is JSX in React?",
                answer: "JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like code directly in JavaScript. JSX makes it easier to write and visualize the structure of components."
            },
            {
                question: "5. What is React used for?",
                answer: "React is used to build interactive user interfaces (UIs) for web applications. It makes it easy to create reusable UI components, manage dynamic data, and build single-page applications (SPAs) that provide a smooth user experience."
            }
        ];
    
    return(
        <FaqsContext.Provider value={{activeFaq, setActiveFaq,handleToggle,faqsData}}>
            {children}
        </FaqsContext.Provider>
    )
}

export {FaqsContext,FaqsProvider}