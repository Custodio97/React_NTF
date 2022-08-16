import React from 'react'
import home from '../../image/home.webp'
import {
     Section,
    Container
} from './style'
const Home = () => {
  return (
      <Section id="home">
          <Container>
              <h1>Discover Digital Art, Collect and Sell Your Specific NFTs.</h1>
              <p>Partner with one of the world's largest retailers to showcase your brand and products.</p>
              <div>
                  <button className='get'>Get Start</button>
                  <button className='create'>Create</button>
              </div>
          </Container>
          <img src={home} alt="image home" />
    </Section>
  )
}

export default Home