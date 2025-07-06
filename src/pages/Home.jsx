import React from 'react'
import Hero from '../components/block/home/Hero.jsx'
import Savings from '../components/block/home/Security.jsx'
import Security from '../components/block/home/Savings.jsx'
import Diverse from '../components/block/home/Diverse.jsx'
import Saver from '../components/block/home/Saver.jsx'
const Home = () => {
  return (
  <div>
    <Hero/>
    <Security/>
    <Savings/>
    <Diverse/>
    <Saver/>
  
    </div>
  )
}

export default Home