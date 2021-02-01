import React from 'react'

import {
  NavBar,
  Logo,
  LogoText,
  UlList,
  Anchor,
  ListItem,
  NavLinks,
} from './style'

const Navbar = () => {
  return (
    <NavBar>
      <div className='container'>
        <Logo>
          <LogoText>Anchor Company</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <NavLinks anchor to='/'>
              Home
            </NavLinks>
          </ListItem>
          <ListItem>
            <Anchor>Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>About</Anchor>
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
