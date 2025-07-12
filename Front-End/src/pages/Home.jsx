import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Category from '../components/Category'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <LatestCollection/>
      <BestSeller/>
      <About/>
      <OurPolicy/>
      <NewsletterBox/>
    
    </div>
  )
}

export default Home