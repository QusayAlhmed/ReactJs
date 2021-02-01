import React from 'react'
import {
  HomeDiv,
  HomeButton,
  HomeDisc,
  HomeInfoHeader,
  HomeTitle,
  HomeInformation,
  Span,
} from './style'
const Home = () => {
  return (
    <HomeDiv>
      <div className='container'>
        <HomeInformation>
          <HomeTitle className='margin-bottom'>Qusay Ahmed Alhomse</HomeTitle>
          <HomeInfoHeader>Creative Director</HomeInfoHeader>
          <HomeDisc>
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDisc>
          {/* <!-- ./home-desc --> */}
          <HomeButton>Let's Begin</HomeButton>
        </HomeInformation>
        {/* <!-- ./home-information --> */}
      </div>
    </HomeDiv>
  )
}

export default Home
