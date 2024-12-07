import React, { useContext } from 'react'
import FaqsMain from './Components/FaqsMain'
import { FaqsContext } from './Context/FaqsContext'

export default function App() {
  const {theme} = useContext(FaqsContext)
  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-white' }  justify-center items-center py-9 h-[100vh] font-work-sans`}>
      <FaqsMain/>
    </div>
  )
}
