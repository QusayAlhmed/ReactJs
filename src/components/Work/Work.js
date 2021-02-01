import React, { Component } from 'react'
import axios from 'axios'
import {
  WorkSection,
  WorkTitle,
  PartDesc,
  Part,
  Icon,
  PartTitle,
  Line,
  Span,
} from './style'

class Work extends Component {
  state = {
    work: [],
  }
  componentDidMount = () => {
    axios
      .get('js/data.json')
      .then((res) => this.setState({ work: res.data.works }))
  }

  render() {
    const { work } = this.state
    const mapOnData = work.map((workItems) => {
      return (
        <Part first={workItems.id} key={workItems.id}>
          <Icon className={workItems.icon_name}></Icon>
          <PartTitle>{workItems.title}</PartTitle>
          <Line />
          <PartDesc>{workItems.body}</PartDesc>
        </Part>
      )
    })
    return (
      <WorkSection>
        <div className='container'>
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {mapOnData}
        </div>
      </WorkSection>
    )
  }
}

export default Work
