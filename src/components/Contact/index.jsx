import React from 'react'
import {
    Section,
    Form,
    BoxInput,
    BoxText,
    BoxHeade,
    Button
} from './style'
import contact from '../../image/contact1.webp' 
const Contact = () => {
  return (
      <Section id="contact">
          <img src={contact} alt="" />
          <Form>
              <BoxHeade>
                  <h1>Contact Us</h1>
              </BoxHeade>
              <BoxInput>
                  <input type="text" placeholder='Your Name' />
              </BoxInput>
              <BoxInput>
                  <input type="email" placeholder='Your Email' />
              </BoxInput>
              <BoxInput>
                  <input type="text" placeholder='Your Subject' />
              </BoxInput>
              <BoxText>
                  <textarea></textarea>
              </BoxText>
              <Button type='submit'>Submit</Button>
          </Form>
    </Section>
  )
}

export default Contact