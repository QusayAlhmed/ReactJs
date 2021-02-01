import React from 'react'
import './index.css'
import Home from '../Home/Home'
import Portofolio from '../Portofolio/Portofolio'
import Work from '../Work/Work'
import Profile from '../Profile/Profile'
import About from '../About/About'
import Social from '../SocialMedia/Social'
import Footer from '../Footer/Footer'
import Drop from '../Drop/Drop'
const Index = () => {
  return (
    <React.Fragment>
      <Home />
      <Work />
      <Portofolio />
      <Profile />
      <About />
      <Social />
      <Drop />
      <Footer />
    </React.Fragment>
  )
}

export default Index
