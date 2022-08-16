import React,{useState} from 'react'

import {
    Header,
    Logo,
    Nav,
    DivSerach,
    Toggle
} from './style'
import {
    FaSearch,
    FaTimes,
    FaBars
} from 'react-icons/fa'
import logo from '../../image/logo.webp'
const Navbar = () => {
    const [show, SetShow] = useState(false)
    const handleClick=()=>{ SetShow(!show) } 
  return (
      <Header>
          <Logo>
              <img src={logo} alt='logo ' />
          </Logo>
          <Nav>
              <ul className={show ? "nav-menu active":"nav-menu"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </Nav>
          <DivSerach>
              <FaSearch color='#ccc'/>
              <input type="search" placeholder='Search' />
          </DivSerach>
          <Toggle onClick={handleClick}>
              {show ? <FaTimes/> : <FaBars/>}
          </Toggle>
    </Header>
  )
}

export default Navbar