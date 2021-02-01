import React from 'react'
import {
  CreativDirect,
  CreativInfo,
  CreativInfoAnchor,
  CreativInfoDesc,
  CreativSection,
  CreativTitle,
  CreativTitleSpan,
} from './style'
const About = () => {
  return (
    <CreativSection>
      <div className='container'>
        <CreativInfo>
          <CreativTitle>
            <CreativTitleSpan>This is</CreativTitleSpan> Me
          </CreativTitle>
          <CreativDirect>Creative Director</CreativDirect>
          <CreativInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            <CreativInfoAnchor>explicabo</CreativInfoAnchor> maxime quibusdam
            quaerat nihil aliquid aperiam deleniti, repellendus dolorum.
            Possimus nisi cupiditate ad veritatis?
          </CreativInfoDesc>
          <CreativInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativInfoDesc>
        </CreativInfo>
        {/* <!-- .creative-info --> */}
      </div>
    </CreativSection>
  )
}

export default About
