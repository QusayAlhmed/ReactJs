import React from 'react'

import { NavBar, Logo, LogoText, UlList, NavLinks, ListItem } from './style'

const Navbar = () => {
  return (
    <NavBar>
      <div className='container'>
        <Logo>
          <LogoText>Anchor Company</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <NavLinks to='/'>Home</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks to='/work'>Work</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks to='/portofolio'>Portfolio</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks to='/resume'>Resume</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks to='/about'>About</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks to='/contact'>Contact</NavLinks>
          </ListItem>
        </UlList>
      </div>
    </NavBar>
  )
}

export default Navbar
