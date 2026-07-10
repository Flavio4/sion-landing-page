import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import OurStory from './components/OurStory/OurStory'
import OurProcess from './components/OurProcess/OurProcess'
import CTA from './components/CTA/CTA'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 300, easing: 'ease', once: true, offset: 100 })
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <OurStory />
        <OurProcess />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
