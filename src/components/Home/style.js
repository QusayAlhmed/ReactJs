import styled from 'styled-components'

export const HomeDiv = styled.div`
  height: 500px;
  background: url('https://i.imgur.com/Ol3TmQU.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`

export const HomeInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const HomeTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #5e5e5e;
  @media (max-width: 768px) {
    font-size: 40px;
    color: #fff;
  }
`

export const HomeInfoHeader = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 575px) {
    font-size: 30px;
  }
`

export const HomeDisc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Span = styled.span`
  color: #000;
`

export const HomeButton = styled.button`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  border-radius: 5px 37px 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
  &:hover {
    background-color: #f1f1f1;
    color: #eb5424;
  }
`
