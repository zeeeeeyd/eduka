import React from 'react'
import Navbar from '../../components/shared/Navbar'
import Hero from '../../components/website/Hero'
import Highlights from '../../components/website/Highlights'
import Learn from '../../components/website/Learn'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Highlights />
        <Learn />
    </div>
  )
}

export default MainLayout