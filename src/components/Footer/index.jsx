import React from 'react'
import {
    Footer
} from './style'
import {
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsMailbox
} from 'react-icons/bs'
const Foote = () => {
  return (
      <Footer>
          <p>©2022 Nuron, Inc. All rights reserved</p>
          <div>
              <BsInstagram />
              <BsLinkedin />
              <BsTwitter />
              <BsMailbox/>
          </div>
    </Footer>
  )
}

export default Foote