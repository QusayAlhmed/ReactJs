import styled from 'styled-components'
export const WorkSection = styled.section`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
`

export const WorkTitle = styled.h2`
  font-size: 60px;
  text-align: center;
  color: #f1f1f1;
`

export const Span = styled.span`
  font-weight: normal;
`

export const Part = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  margin-left: ${(props) => (props.first === 1 ? '0px' : '5%px')};
  @media (max-width: 575px) {
    width: 100%;
    float: none;
    margin-left: 0;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 47%;
  }
`

export const Icon = styled.i`
  color: #f2f2f2;
  margin-bottom: 20px;
`

export const PartTitle = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`

export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
  border-color: #f1f1f1;
`

export const PartDesc = styled.p`
  font-size: 14px;
  color: #f2f2f2;
  padding: 20px;
`
