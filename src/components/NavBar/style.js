import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background-color: #393d4a;
  position: relative;
  border-bottom: 1px solid #eb5424;
`

export const Logo = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  } ;
`

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #f1f1f1;
`

export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
    margin-top: 20px;
    display: none;
  } ;
`

export const ListItem = styled.li`
  display: inline-block;
  @media (max-width: 991px) {
    display: block;
    text-align: center;
  } ;
`

export const Anchor = styled.a`
  display: block;
  color: #f1f1f1;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  transition: 0.3s all ease-in-out;
  cursor: pointer;

  &:hover {
    color: #eb5424;
  }
`
export const NavLinks = styled(NavLink)`
  display: block;
  color: #f1f1f1;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  transition: 0.3s all ease-in-out;
  cursor: pointer;

  &:hover {
    color: #eb5424;
  }
`
