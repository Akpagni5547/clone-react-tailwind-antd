import React from 'react'
import { Carousel, Image } from 'antd';
import Img1 from '../../../../assets/images/c1.jpg'
import Img2 from '../../../../assets/images/c2.jpg'

const CarousselSection = () => {
  return (
    <div>
        <Carousel  autoplay={true}>
      <div>
        <Image src={Img1} alt='' height={450} preview={false} width='100%' style={{
            objectFit: 'cover'
        }}/>
      </div>
      <div>
      <Image src={Img2} alt='' height={450} preview={false} width='100%' style={{
            objectFit: 'cover'
        }}/>
      </div>

    </Carousel>
    </div>
  )
}

export default CarousselSection