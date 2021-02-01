import React from 'react'
import {
  DropForm,
  DropInput,
  ContactSection,
  DropTitle,
  DropTitleSpan,
  DropInputContainer,
  TextAreas,
} from './contact'
const Contact = () => {
  return (
    <ContactSection>
      <div className='container'>
        <DropTitle>
          <DropTitleSpan>Contact With </DropTitleSpan>Me
        </DropTitle>
        <DropForm>
          <DropInputContainer>
            <DropInput type='text' placeholder='Your Name' />
            <DropInput type='email' placeholder='Your Email' />
          </DropInputContainer>
          <DropInput type='text' sub placeholder='Your Subject' />
          <TextAreas cols='30' rows='10' placeholder='Your Message'></TextAreas>
          <DropInput type='submit' value='Send Message' />
        </DropForm>
      </div>
    </ContactSection>
  )
}

export default Contact
