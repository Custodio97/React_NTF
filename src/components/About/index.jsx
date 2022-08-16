import React from 'react'
import nft1 from '../../image/nft1.webp'
import nft2 from '../../image/nft2.webp'
import nft3 from '../../image/nft3.webp'
import nft4 from '../../image/nft4.webp'
import { BsHeartFill, BsMessenger } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import {
    Section,
    Container,
    Card
} from './style'
const About = () => {
    const data = [
        { img: nft1, title: "Preatent",desc:"Highest bid 6/30" },
        { img: nft2, title: "OrBid6", desc: "Highest bid 6/31" },
        { img: nft3, title: "Delta25", desc: "Highest bid 6/30" },
        { img: nft4, title: "mAtal8", desc: "Highest bid 6/50" },
    ]
  return (
      <Section id="about">
         
          <Container>
              {data.map((data, index) => {
                  return (
                      <Card key={index}>
                          <div className='img-container'>
                              <img src={data.img} alt="nft" />
                          </div>
                          <div className='text-text'>
                              <h1>{data.title}</h1>
                              <span>{data.desc}</span>
                              <div>
                                  <BsHeartFill/>
                                  <AiFillLike/>
                              </div>
                          </div>
                      </Card>
                  )
              })}
          </Container>
    </Section>
  )
}

export default About