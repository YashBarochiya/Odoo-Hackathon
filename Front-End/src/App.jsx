import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header  from './components/header'
import MainContent from './components/mainCon'
import Footer from './components/Footer'
import BrowseItems from './components/BrowseItems'
import MyItems from './components/MyItems'
import Swaps from './components/Swaps'

// Create a HomePage component that combines Header, MainContent, and Footer
const HomePage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/browse' element={<BrowseItems />} />
        <Route path='/my-items' element={<MyItems />} />
        <Route path='/swaps' element={<Swaps />} />
      </Routes>
    </div>
  )
}

export default App