import React from 'react'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Download from '../HomeSection/Download/Download'
import Gallery from '../HomeSection/Gallery/Gallery'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../HomeSection/Popular/MostPopular'
import Work from '../HomeSection/Work/Work'

function Home() {
  return (
    <>
        <Hero />
        <HomeAbout />
        <MostPopular />
        <DestinationHome />
        <Download />
        <Work />
        <Gallery />
    </>
  )
}

export default Home