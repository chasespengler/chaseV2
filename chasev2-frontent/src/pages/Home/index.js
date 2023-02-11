import React, {useState} from 'react';
import Video from '../../videos/topview_ocean.mp4';
import Img1 from '../../images/CR_beach1.JPG';
import Foot from '../../components/Footer';
import CarouselCard from '../../components/CarouselCard';
import {Container, Card, Col, Carousel, Row} from 'react-bootstrap';
import {
    Home,
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
    ImgFg,
    CarouselRow,
    ArrowRightBig
} from './HomeElements'

import dater from '../../dater/dater.json'

export default function HomePage() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    const heroContent = dater['homeHeroContent'];
    const aboutContent = dater['aboutContent'];
    const projects = dater['projects'];

  return (
    <Home>
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
        <Carousel interval="100000" style={{"width": "100%"}}>
            {aboutContent.map((about, index) => (
                <Carousel.Item style={{"height": "100vh"}}>
                    <p>{about}</p>
                    <Carousel.Caption><p>{about}</p></Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>
    </AboutContainer>
    <AboutContainer style={{"marginTop": 0, "background": "white"}}>
        <HeroFg>
            <ImgFg src={Img1} type="image/JPG"></ImgFg>
        </HeroFg>
    </AboutContainer>
    <ContentContainer id="projects" className="container-fluid container-scroll hide-scrollbar pt-5">
        <Row style={{"position": "absolute", "width": "100%", "margin-top": "-1.5%"}}>
            <Col xs={12} className="text-center"><h3>Projects</h3></Col>
        </Row>
        <div style={{"position": "absolute", "margin-top": "40vh", "right": "0", "z-index": "999"}}>
            <ArrowRightBig />
        </div>
        <CarouselRow>
            {projects.map((project, index) => (
                <CarouselCard key={index} cardInfo = {project} />
            )) }
        </CarouselRow>
    </ContentContainer>
    <Foot />
    </Home>
  )
}