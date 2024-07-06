import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import IntroSection from "./components/IntroSection.jsx"
import Partners from "./components/Partners.jsx"
import Services from "./components/Services.jsx"
import WhyAboutSection from "./components/WhyAboutSection.jsx"
import DigitalSolutionSection from "./components/DigitalSolutionSection.jsx"
import TestimonialsSection from "./components/TestimonialsSection.jsx"
import DiscussionSection from "./components/DiscussionSection.jsx"
import Footer from "./components/Footer.jsx"
import CopyrightSection from './components/CopyrightSection.jsx'
function App() {
  return (
    <div className="container">
        <Navbar />
        <IntroSection />
        <Partners />
        <Services />
        <WhyAboutSection />
        <DigitalSolutionSection />
        <TestimonialsSection />
        <DiscussionSection />
        <Footer />
        <CopyrightSection />
    </div>
  )
}

export default App
