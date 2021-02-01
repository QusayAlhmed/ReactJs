import styled from 'styled-components'

export const SocialSection = styled.section`
  height: auto;
  overflow: hidden;
`

export const SocialDiv = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background-color: ${(props) => (props.item === 1 ? '#3b5998' : '')};
  background-color: ${(props) => (props.item === 2 ? '#1DA1F2' : '')};
  background-color: ${(props) => (props.item === 3 ? '#cc2127' : '')};

  @media (max-width: 991px) {
    width: 100%;
    float: none;
    text-align: center;
    padding: 50px;
  }
`

export const SocialIcon = styled.i`
  width: 50px;
  height: 50px;
  background: #f1f1f1;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
  color: ${(props) => (props.color === 1 ? '#3b5998' : '')};
  color: ${(props) => (props.color === 2 ? '#1DA1F2' : '')};
  color: ${(props) => (props.color === 3 ? '#cc2127' : '')};
  @media (max-width: 991px) {
    float: none;
    margin-bottom: 10px;
  }
`

export const DivInsideSocial = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #f1f1f1;
`

export const SpanInsideDiv = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: ${(props) => (props.info2 ? 'normal' : '')};
`
