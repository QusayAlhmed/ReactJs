import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  DivInsideSocial,
  SocialDiv,
  SocialIcon,
  SocialSection,
  SpanInsideDiv,
} from './style'
const Social = () => {
  const [social, setSocial] = useState([])
  useEffect(() => {
    axios.get('js/data.json').then((res) => setSocial(res.data.social))
  })
  const mapOnSocial = social.map((socialItems) => {
    return (
      <SocialDiv key={socialItems.id} item={socialItems.id}>
        <SocialIcon
          color={socialItems.id}
          className={socialItems.icon}
        ></SocialIcon>
        <DivInsideSocial>
          <SpanInsideDiv className='info1'>{socialItems.title}</SpanInsideDiv>
          <SpanInsideDiv info2>{socialItems.body}</SpanInsideDiv>
        </DivInsideSocial>
      </SocialDiv>
    )
  })
  return <SocialSection>{mapOnSocial}</SocialSection>
}

export default Social
