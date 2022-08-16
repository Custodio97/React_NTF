import React from 'react'
import icon1 from '../../image/icon1.png'
import icon2 from '../../image/icon2.png'
import icon3 from '../../image/icon3.png'
import icon4 from '../../image/icon4.png'
import {Section,Container,Box} from './style'
const Blog = () => {
    const data = [
        { img: icon1, title: "Set up your wallet", desc: "Powerful features and inclusions,wicth makes Nuron standout,easily customizable and scalable" },
        { img: icon2, title: "Create your collection", desc: "A great collection of beautiful website templates for your need.Choose the best suitable templete." },
        { img: icon3, title: "Add your NTF's", desc: "We made the template fully resonsive, so it looks great on all devices, atbles and" },
        {
            img: icon4, title: "I throw myselft", desc:
        "down among the tall grass by the stream as I lie close to the earth NTF's"}
    ]
  return (
      <Section id="blog">
          <h1>Create and sell your NFTs</h1>
          <Container>
              {data.map((data, index) => {
                  return (
                      <Box key={index}>
                          <img src={data.img} alt="icon" />
                          <h2>{data.title}</h2>
                          <p>{data.desc}</p>
                      </Box>
                  )
              })}
          </Container>
    </Section>
  )
}

export default Blog