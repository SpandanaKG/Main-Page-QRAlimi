import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx' 
import Problem from './components/Problem.jsx'
import Features from './components/Feature.jsx'
import Testimonials from './components/Testimonials.jsx' 
import CTA from './components/CTA.jsx'  
import Footer from './components/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
    
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
