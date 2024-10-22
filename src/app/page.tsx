"use client"
import React from 'react'
import Header from '../components/header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Page
