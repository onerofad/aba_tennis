import React from 'react'
import Carousel from 'better-react-carousel'
import { useNavigate } from 'react-router-dom'

const MobileCarouselComponent = () => {

    const navigate = useNavigate()
    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")
        }
    }
  return (
    <Carousel mobileBreakpoint={767} cols={3} rows={1} gap={10} loop={true} autoplay={2000}>
      <Carousel.Item>
        <img style={{cursor: 'pointer'}} onClick={() => openregister()} width="100%" src="/images/carousel/mobile1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{cursor: 'pointer'}} onClick={() => openregister()} width="100%" src="/images/carousel/mobile2.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{cursor: 'pointer'}} onClick={() => openregister()} width="100%" src="/images/carousel/mobile3.png" />
      </Carousel.Item>
    </Carousel>
  )
}
export default MobileCarouselComponent