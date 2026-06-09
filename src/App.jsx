import { useState, useCallback, useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
    document.body.style.overflow = 'auto'
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    }
  }, [loading])

  return (
    <>
      <CustomCursor />

      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
      <Analytics />
    </>
  )
}
