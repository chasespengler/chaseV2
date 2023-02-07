import React, {useState} from 'react'
import Video from '../../videos/topview_ocean.mp4'
import Img1 from '../../images/CR_beach1.JPG'
import Foot from '../../components/Footer'
import CarouselCard from '../../components/CarouselCard'
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
    ContentContainer,
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
    const aboutContent = dater['aboutContent'];
    const projects = dater['projects'];
    console.log(projects);
    console.log(projects[1]);
    console.log(projects[0]['img_src']);

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
        {aboutContent}
    </AboutContainer>
    <AboutContainer style={{"margin-top": 0, "background": "white"}}>
        <HeroFg>
            <ImgFg src={Img1} type="image/JPG"></ImgFg>
        </HeroFg>
    </AboutContainer>
    <ContentContainer className="container-fluid container-scroll hide-scrollbar">
        <div className="row flex-nowrap">
            {projects.map(project => (
                <CarouselCard cardInfo = {project} />
            )) }
            
            <div className="col-5 col-md-7 col-sm-11" style={{"display": "inline-block", "float": "none"}}>Field 1</div>
            <div className="col-5" style={{"display": "inline-block", "float": "none"}}>Field 1</div>
            <div className="col-5" style={{"display": "inline-block", "float": "none"}}>Field 1</div>
            <div className="col-5" style={{"display": "inline-block", "float": "none"}}>Field 1</div>
            <div className="col-5" style={{"display": "inline-block", "float": "none"}}>Field 1</div>
        </div>
    </ContentContainer>
    <Foot></Foot>
    </>
  )
}

export default HomePage