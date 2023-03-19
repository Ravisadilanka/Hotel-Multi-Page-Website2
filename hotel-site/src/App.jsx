import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import Home from '../src/components/pages/Home'
import About from '../src/components/About/About'
import Gallery from './components/Gallery/Gallery'
import Destinations from './components/Destination/Home'
import SinglePage from './SinglePage/SinglePage'
import Blog from './components/Blog/Blog'
import BlogSingle from './components/Blog/blog-single-page/BlogSingle'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/gallery' Component={Gallery}></Route>
          <Route path='/destinations' Component={Destinations}></Route>
          <Route path='/singlepage/:id' Component={SinglePage}></Route>
          <Route path='/blog' Component={Blog}></Route>
          <Route path='/blogsingle/:id' Component={BlogSingle}></Route>
          <Route path='/testimonials' Component={Testimonial}></Route>
          <Route path='/contact' Component={Contact}></Route>
          <Route path='/sign-in' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
