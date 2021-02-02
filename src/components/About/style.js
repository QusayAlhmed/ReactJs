import styled from 'styled-components'
export const CreativSection = styled.section`
  height: 500px;
  background: url('https://i.imgur.com/66nS3d1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: 991px) {
    height: auto;
    background-size: auto;
  }
`

export const CreativInfo = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
  @media (max-width: 991px) {
    width: 100%;
    padding-top: 10px;
    float: none;
    text-align: center;
  }
`

export const CreativTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
  color: #393d4a;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`

export const CreativTitleSpan = styled.span`
  font-weight: normal;
  color: #393d4a;
`

export const CreativDirect = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`

export const CreativInfoDesc = styled.p`
  color: #393d4a;
  line-height: 1.8;
  font-weight: bold;
  @media (max-width: 991px) {
    font-size: 1em;
    padding: 20px;

    &:last-of-type {
      font-weight: normal;
      display: none;
    }
  }
`

export const CreativInfoAnchor = styled.a`
  text-decoration: underline;
  cursor: pointer;
`
