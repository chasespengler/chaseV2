import React, {useRef} from 'react';
import Video from '../../videos/topview_ocean.mp4';
import Img1 from '../../images/CR_beach1.JPG';
import Img2 from '../../images/db_beach.JPEG';
import CarouselCard from '../../components/CarouselCard';
import {Container, Col, Carousel, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
    Home,
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    HeroPContainer,
    ContentContainer,
    AboutContainer,
    HeroFg,
    ImgFg,
    CarouselRow,
    ArrowRightBig,
    AboutCarouselP,
    SectionHeading,
} from './HomeElements'

import dater from '../../dater/dater.json'

export default function HomePage({ toggleNavButtonsTypeHome }) {

    const navigate = useNavigate();

    const ref = useRef(null);

    const handleProjectArrow = () => {
        toggleNavButtonsTypeHome(false);
        navigate('/projects');
    };

    const handleBlogArrow = () => {
        toggleNavButtonsTypeHome(false);
        navigate('/blog');
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
        <Carousel interval="999999" style={{"width": "100%"}}>
            {aboutContent.map((about, index) => (
                <Carousel.Item style={{"height": "100vh"}}>
                    <Container className="d-flex align-content-center" style={{"height": "100%"}}>
                        <AboutCarouselP>{about}</AboutCarouselP>
                    </Container>
                    {/* <Carousel.Caption><p>{index}</p></Carousel.Caption> */}
                </Carousel.Item>
            ))}

        </Carousel>
    </AboutContainer>
    <AboutContainer style={{"marginTop": 0, "background": "white"}}>
        <HeroFg>
            <ImgFg src={Img1} type="image/JPG"></ImgFg>
        </HeroFg>
    </AboutContainer>
    <ContentContainer ref={ref} id="projects" className="container-fluid container-scroll pt-5">
        <Row style={{"position": "absolute", "width": "100%", "marginTop": "-1.5%"}}>
            <Col xs={12} className="text-center">
                <SectionHeading onClick={handleProjectArrow}>Projects <ArrowForward /></SectionHeading>
            </Col>
        </Row>
        {/* <div style={{"position": "absolute", "margin-top": "40vh", "right": "0", "z-index": "999"}}>
            <ArrowRightBig onClick={() => slide(50)}/>
        </div> */}
        <CarouselRow style={{"paddingLeft": 40}} ref={ref}>
            {projects.map((project, index) => (
                <CarouselCard key={index} cardInfo = {project} />
            )) }
        </CarouselRow>
    </ContentContainer>
    <AboutContainer style={{"marginTop": 0, "background": "white"}}>
        <HeroFg>
            <ImgFg src={Img2} type="image/JPG"></ImgFg>
        </HeroFg>
    </AboutContainer>
    <ContentContainer id="blog" className="pt-5">
        <Row>
            <Col xs={12} className="text-center">
                <SectionHeading onClick={handleBlogArrow}>Blog <ArrowForward /></SectionHeading>
            </Col>
        </Row>
        <h1 className="text-center mt-5 pt-5"><strong>Coming Soon!</strong></h1>
    </ContentContainer>
    </Home>
  )
}