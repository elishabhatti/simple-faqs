import React from 'react'

export default function FaqsMain() {
  return (
    <div className='flex justify-center items-center flex-col max-w-md p-4 ' >
        <div>
            <div>
                <div className='flex justify-between items-center'>
            <p><b>1. What is React.js?</b></p>
            <div>
                <button>+</button>
            </div>
                </div>
            <p>React.js is a JavaScript library developed by Facebook for building user interfaces. It is used for creating single-page applications (SPAs) and allows developers to build reusable UI components.</p>
            </div>
        </div>
        <div>
            <div>
                <div className='flex justify-between items-center'>
            <p><b>2. What are React components?</b></p>
            <div>
                <button>+</button>
            </div>
                </div>
            <p>React components are the building blocks of a React application. They are reusable pieces of code that define how a part of the UI should look and behave. Components can be functional or class-based.</p>
            </div>
        </div>
        <div>
            <div>
                <div className='flex justify-between items-center'>
            <p><b>3. What is the Virtual DOM in React?</b></p>
            <div>
                <button>+</button>
            </div>
                </div>
            <p>The Virtual DOM is a lightweight representation of the actual DOM. React uses the Virtual DOM to improve performance by making updates more efficient. When the state of an object changes, React updates the Virtual DOM and compares it with the previous version to determine the minimal set of updates needed for the real DOM.</p>
            </div>
        </div>
        <div>
            <div>
                <div className='flex justify-between items-center'>
            <p><b>4. What is JSX in React?</b></p>
            <div>
                <button>+</button>
            </div>
                </div>
            <p>JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like code directly in JavaScript. JSX makes it easier to write and visualize the structure of components. For example:</p>
            <p>const element = <h1>Hello, World!</h1></p>
            </div>
        </div>
        <div>
            <div>
                <div className='flex justify-between items-center'>
            <p><b>5. What is React used for?</b></p>
            <div>
                <button>+</button>
            </div>
                </div>
            <p>React is used to build interactive user interfaces (UIs) for web applications. It makes it easy to create reusable UI components, manage dynamic data, and build single-page applications (SPAs) that provide a smooth user experience.</p>
            </div>
        </div>
    </div>
  )
}
