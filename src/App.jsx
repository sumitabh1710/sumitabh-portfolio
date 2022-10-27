import React from 'react'
import Experience from './component/Experience/Experience'
import Footer from './component/Footer/Footer'
import Header from './component/header/Header'
import Nav from './component/Nav/Nav'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import Portfolio from './component/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio/>
      <Contact />
      <Footer />
    </>
  )
}

export default App