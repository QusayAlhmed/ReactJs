import styled from 'styled-components'

export const DropSection = styled.section`
  padding: 50px 0;
  text-align: center;
`

export const DropTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  color: #f1f1f1;
  @media (max-width: 575px) {
    font-size: 2.5em;
  }
`

export const DropTitleSpan = styled.span`
  font-weight: normal;
`

export const DropForm = styled.form`
  width: 70%;
  margin: auto;
  & > input {
    width: 100%;
  }
  @media (max-width: 575px) {
    width: 90%;
  }
`

export const DropInput = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 10px 5px;
  margin-bottom: 10px;
  background: transparent;
  border: 1px solid #0003;
  border-radius: 3px;
  color: #888;
  &::placeholder {
    padding: 10px;
    color: #888;
  }
  &[type='submit'] {
    cursor: pointer;
    background-color: #eb5424;
    border: none;
    color: #f1f1f1;
    transition: 0.3s all ease-in-out;
    &:hover {
      background-color: #f1f1f1;
      color: #eb5424;
    }
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`
export const DropInputContainer = styled.div`
  overflow: hidden;
  & > input {
    width: 49%;
  }
  & > input[type='text'] {
    float: left;
  }
  & > input[type='email'] {
    float: right;
  }
`

export const TextAreas = styled.textarea`
  width: 100%;
  border: 1px solid #0003;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  outline: 0;
  background: transparent;
  &::placeholder {
    color: #888;
    padding: 10px;
  }
`
