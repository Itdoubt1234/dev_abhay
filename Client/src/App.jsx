import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

function App() {
  return (
    <div className='w-full bg-white min-h-screen flex flex-col items-center p-light'>
      <ScrollRestoration />
      <Header />
      <div className="flex-1 w-full"><Outlet /></div>
      <Footer />
    </div>
  )
}

export default App