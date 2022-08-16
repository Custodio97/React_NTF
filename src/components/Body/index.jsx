import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
    GlobalStyle,
    darkTheme,
    lightTheme,
    StyledApp
} from './style'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollpUp'
import {IoMdColorFill} from 'react-icons/io'
import Home from '../Home'
import About from '../About'
import Blog from '../Blog'
import Contact from '../Contact'
import  Footer  from '../Footer'



const Body = () => {
    const [theme, setTheme] = useState("light")
    
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
          
          <GlobalStyle />
          <StyledApp>
              <Navbar />
              <button className='color' onClick={() => themeToggler()}>
                  <IoMdColorFill/>
              </button>
              <ScrollToTop/>
              <Home />
              <About />
              <Blog />
              <Contact />
              <Footer/>
          </StyledApp>
         
     </ThemeProvider>
  )
}

export default Body