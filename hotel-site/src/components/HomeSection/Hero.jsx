import React from 'react'
import Data from './Data'
import Slide from './Slide'
import './Home.css'

function Hero() {
  return (
    <>
        <Slide slides={Data}/>
    </>
  )
}

export default Hero