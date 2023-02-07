import React, {useState} from 'react'
import Video from '../../videos/topview_ocean.mp4'
import Img1 from '../../images/CR_beach1.JPG'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight,
    HeroPContainer,
    AboutContainer,
    HeroFg,
    ImgFg
} from './HomeElements'

import dater from '../../dater/dater.json'
import { withTheme } from 'styled-components'

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
            <HeroPContainer>
            <HeroP>
                {heroContent}
            </HeroP>
            </HeroPContainer>

        </HeroContent>
    </HeroContainer>
    <AboutContainer id="about">
        hi
    </AboutContainer>
    <AboutContainer style={{"margin-top": 0, "background": "white"}}>
        <HeroFg>
            <ImgFg src={Img1} type="image/JPG"></ImgFg>
        </HeroFg>
    </AboutContainer>
    </>
  )
}

export default HomePage