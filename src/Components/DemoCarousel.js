import React from 'react'
import Carousel from 'better-react-carousel'
import { useNavigate } from 'react-router-dom'

const CarouselComponent = () => {

    const navigate = useNavigate()
    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")
        }
    }
  return (
    <Carousel cols={1} rows={1} gap={3} loop={true} autoplay={2000}>
      <Carousel.Item>
        <img style={{cursor: 'pointer'}} onClick={() => openregister()} width="100%" src="/images/carousel/desk1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{cursor: 'pointer'}} onClick={() => openregister()} width="100%" src="/images/carousel/desk2.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{cursor: 'pointer'}} onClick={() => openregister()} width="100%" src="/images/carousel/desk3.png" />
      </Carousel.Item>
    </Carousel>
  )
}
export default CarouselComponent