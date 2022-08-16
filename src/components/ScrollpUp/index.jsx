import React,{useState,useEffect} from 'react'
import { FaAngleUp } from 'react-icons/fa'
import {Div} from './style'
const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
               setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
           }
       }) 
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth",
        })
    }
  return (
      <Div>
          {" "}
          {showTopBtn && (
              <FaAngleUp
                onClick={goToTop}
               className='icon-position icon-style'
              />
          )}{" "}
    </Div>
  )
}

export default ScrollToTop