import React from 'react'
import Video from '../../videos/topview_ocean.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
} from './HomeElements'

const HomePage = () => {
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }

  return (
    <>
    <HeroContainer id="home">
        <HeroBg> 
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
    </HeroContainer>
    <div id="about" className='d-flex justify-content-center align-items-center' style={{height: "100vh", background: "green"}}>
        hi
    </div>
    </>
  )
}

export default HomePage