import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  ProfileSkills,
  ProfileDiv,
  ProfileUl,
  ProfileLi,
  ProfileSpan,
  SkillsSection,
  SkillsTitle,
  SkillsDesc,
  SkillsBar,
  SkillsSpanTitle,
  SkillsSpanPerc,
  SkillsBarParent,
  ProfileTitle,
  SkillsBarParentSpan,
} from './style'
const Profile = () => {
  const [skills, setSkills] = useState([])
  useEffect(() => {
    axios.get('js/data.json').then((res) => setSkills(res.data.skills))
  })
  const mapOnSkills = skills.map((skills) => {
    return (
      <SkillsBar key={skills.id}>
        <SkillsSpanTitle>{skills.name}</SkillsSpanTitle>
        <SkillsSpanPerc>{skills.percent}</SkillsSpanPerc>
        <SkillsBarParent>
          <SkillsBarParentSpan sp={skills.id}></SkillsBarParentSpan>
        </SkillsBarParent>
      </SkillsBar>
    )
  })
  return (
    <ProfileSkills>
      <div className='container'>
        <ProfileDiv>
          <ProfileTitle>
            <span>My </span>Profile
          </ProfileTitle>
          <ProfileUl>
            <ProfileLi>
              <ProfileSpan>Name: </ProfileSpan>
              Qusay Ahmed Alhomse
            </ProfileLi>
            <ProfileLi>
              <ProfileSpan>Birthday:</ProfileSpan>
              08/11/1996
            </ProfileLi>
            <ProfileLi>
              <ProfileSpan>Address:</ProfileSpan>
              Turkey/Bursa
            </ProfileLi>
            <ProfileLi>
              <ProfileSpan>Phone:</ProfileSpan>
              +90 553 718 48 64
            </ProfileLi>
            <ProfileLi>
              <ProfileSpan>Email:</ProfileSpan>
              hamza@hamza.com
            </ProfileLi>
            <ProfileLi>
              <ProfileSpan>Website: </ProfileSpan>
              <ProfileSpan web>www.google.com</ProfileSpan>
            </ProfileLi>
          </ProfileUl>
        </ProfileDiv>
        {/* <!-- ./profile --> */}

        <SkillsSection>
          <SkillsTitle>
            Some <span>Skills</span>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {mapOnSkills}
        </SkillsSection>
      </div>
      {/* <!-- ./container --> */}
    </ProfileSkills>
  )
}

export default Profile
