import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  PortofolioSection,
  PortofolioTitle,
  PortofolioSpan,
  PortofolioUl,
  PortofolioLi,
  DivIndsideBox,
  Image,
  Overlay,
  OverlaySpan,
} from './style'

const Portofolio = () => {
  // using hook to fetch data
  const [images, setImage] = useState([])
  useEffect(() => {
    axios.get('js/data.json').then((res) => setImage(res.data.portfolio))
  })

  const mapOnImages = images.map((imageItems) => {
    return (
      <DivIndsideBox key={imageItems.id}>
        <Image src={imageItems.image} alt='imag-had' />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </DivIndsideBox>
    )
  })
  return (
    <PortofolioSection>
      <PortofolioTitle>
        <PortofolioSpan>My</PortofolioSpan> Portfolio
      </PortofolioTitle>
      <PortofolioUl>
        <PortofolioLi active>All</PortofolioLi>
        <PortofolioLi>HTML</PortofolioLi>
        <PortofolioLi>Photoshop</PortofolioLi>
        <PortofolioLi>Wordpress</PortofolioLi>
        <PortofolioLi>Mobile</PortofolioLi>
      </PortofolioUl>

      <div className='box'>{mapOnImages}</div>
      {/* <!-- ./box --> */}
    </PortofolioSection>
  )
}

export default Portofolio
