import React, {useState} from 'react'
import Video from '../../videos/topview_ocean.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HomeElements'

import dater from '../../dater/dater.json'

const HomePage = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    const heroContent = dater['homeHeroContent'];

  return (
    <>
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Welcome!
            </HeroH1>
            <HeroP>
                {heroContent}
            </HeroP>
        </HeroContent>
    </HeroContainer>
    <div id="about" className='d-flex justify-content-center align-items-center' style={{height: "100vh", background: "green"}}>
        hi
    </div>
    </>
  )
}

export default HomePage