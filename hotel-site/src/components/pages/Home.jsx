import React from 'react'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../HomeSection/Popular/MostPopular'

function Home() {
  return (
    <>
        <Hero />
        <HomeAbout />
        <MostPopular />
        <DestinationHome />
    </>
  )
}

export default Home