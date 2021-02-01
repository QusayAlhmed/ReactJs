import React from 'react'
import { FooterParagraph, FooterSection, Span } from './style'
const Footer = () => {
  return (
    <FooterSection>
      <FooterParagraph>
        This Template Made in
        <Span>
          <i
            className='
        fa fa-calendar-check-o'
          ></i>
          1/2021
        </Span>
        By
        <Span>Qusay Ahmed Alhomse</Span>
      </FooterParagraph>
    </FooterSection>
  )
}

export default Footer
