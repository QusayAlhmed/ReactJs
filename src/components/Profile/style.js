import styled from 'styled-components'

export const ProfileSkills = styled.section`
  padding: 50px 0;
  overflow: hidden;
`

export const ProfileDiv = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`
export const ProfileTitle = styled.h2`
  color: #f1f1f1;
  font-size: 40px;
  margin-bottom: 20px;
  & > span {
    font-weight: normal;
  }
`
export const ProfileUl = styled.ul`
  list-style: none;
`

export const ProfileLi = styled.li`
  margin-bottom: 8px;
  color: #f1f1f1;
`

export const ProfileSpan = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
  color: #888;
  font-weight: ${(props) => (props.web ? 'normal' : '')};
  color: ${(props) => (props.web ? '#eb5424' : '')};
`

// .profile_skills .profile .profile-list .profile-item span.web {
//     font-weight: normal;
//     color: #
// }

export const SkillsSection = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
`
export const SkillsTitle = styled.h2`
  color: #f1f1f1;
  font-size: 40px;
  margin-bottom: 20px;
  & > span {
    font-weight: normal;
  }
`
export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
  font-weight: bold;
`

export const SkillsBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
  color: #f1f1f1;
`

export const SkillsSpanTitle = styled.span`
  float: left;
`

export const SkillsSpanPerc = styled.span`
  float: right;
  margin-right: 100px;
`

export const SkillsBarParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`

export const SkillsBarParentSpan = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.sp === 1 ? '70%' : '')};
  width: ${(props) => (props.sp === 2 ? '80%' : '')};
  width: ${(props) => (props.sp === 3 ? '90%' : '')};
`

/*.profile_skills .skills .bar .parent span.sp1 {
    width: 100%;
}

.profile_skills .skills .bar .parent span.sp2 {
    width: 90%;
}

.profile_skills .skills .bar .parent span.sp3 {
    width: 80%;
} */
/*
.profile_skills .profile .profile-title,
.profile_skills .skills .skills-title{
    font-size: 40px;
    margin-bottom: 20px
}

.profile_skills .profile .profile-title span,
.profile_skills .skills .skills-title span{
    font-weight: normal;
} */
