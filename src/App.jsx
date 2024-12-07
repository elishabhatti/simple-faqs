import React, { useContext } from 'react'
import FaqsMain from './Components/FaqsMain'
import { FaqsContext } from './Context/FaqsContext'

export default function App() {
  const {theme} = useContext(FaqsContext)
  return (
    <div className={`flex ${theme === 'dark' ? 'bg-[#23272F]' : 'bg-white' }  justify-center items-center py-9 h-[100vh] font-work-sans`}>
      <FaqsMain/>
    </div>
  )
}
