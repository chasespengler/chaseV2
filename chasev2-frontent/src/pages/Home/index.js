import React, { useState, useEffect } from 'react';
import Video from '../../videos/topview_ocean.mp4';
import Img1 from '../../images/CR_beach1.JPG';
import Img2 from '../../images/db_beach.JPEG';
import CarouselCard from '../../components/CarouselCard';
import {Container, Col, Carousel, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'
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
    const blogs = dater['blogs'];

    const [isHover, setIsHover] = useState(false)

    const arrowStyle = {
        opacity: isHover ? '1' : '0.5',
        color: isHover ? 'gold' : 'black',
        transform: isHover ? 'scale(1.5)' : 'scale(1)',
    }

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
    <ContentContainer id="projects" className="pt-5">
        <Row style={{"position": "absolute", "width": "100%", "marginTop": "2%"}}>
            <Col xs={12} className="text-center">
                <SectionHeading onClick={handleProjectArrow}>Projects <ArrowForward className='mt-2.5' /></SectionHeading>
            </Col>
        </Row>
        <br></br>
        <div className='{relative flex items-center h-full}' style={{'marginTop': '50px'}}>
            <MdChevronLeft className='cursor-pointer' style={arrowStyle} onMouseLeave={() => {setIsHover(false)}} onMouseEnter={() => {setIsHover(true)}} onClick={() => {
                var slider = document.getElementById('projects-slider');
                slider.scrollLeft = slider.scrollLeft - 500;
            }} size={50} />
            <div id='projects-slider' className={'w-full h-screen overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'}>  
                {projects.map((project, index) => (
                                <Col xs={11} sm={8} md={6} lg={5} xl={4} xxl={3} className={'inline-block m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'}>
                                    <CarouselCard key={index} cardInfo = {project} />
                                </Col>
                            ))}
            </div>
            <MdChevronRight className='cursor-pointer' style={arrowStyle} onMouseLeave={() => {setIsHover(false)}} onMouseEnter={() => {setIsHover(true)}} onClick={() => {
                var slider = document.getElementById('projects-slider');
                slider.scrollLeft = slider.scrollLeft + 500;
            }} size={50} />
        </div>
    </ContentContainer>
    <AboutContainer style={{"marginTop": 0, "background": "white"}}>
        <HeroFg>
            <ImgFg src={Img2} type="image/JPG"></ImgFg>
        </HeroFg>
    </AboutContainer>
    <ContentContainer id="blog" className="pt-5">
        <Row style={{"position": "absolute", "width": "100%", "marginTop": "2%"}}>
            <Col xs={12} className="text-center">
                <SectionHeading onClick={handleBlogArrow}>Blog <ArrowForward className='mt-2.5' /></SectionHeading>
            </Col>
        </Row>
        <br></br>
        <div className='{relative flex items-center h-full}' style={{'marginTop': '50px'}}>
            <MdChevronLeft className='cursor-pointer' style={arrowStyle} onMouseLeave={() => {setIsHover(false)}} onMouseEnter={() => {setIsHover(true)}} onClick={() => {
                var slider = document.getElementById('blogs-slider');
                slider.scrollLeft = slider.scrollLeft - 500;
            }} size={50} />
            <div id='blogs-slider' className={'w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'}>  
                {blogs.map((blog, index) => (
                                <Col xs={11} sm={8} md={6} lg={5} xl={4} xxl={3} className={'inline-block m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'}>
                                    <CarouselCard key={index} cardInfo = {blog} />
                                </Col>
                            ))}
            </div>
            <MdChevronRight className='cursor-pointer' style={arrowStyle} onMouseLeave={() => {setIsHover(false)}} onMouseEnter={() => {setIsHover(true)}} onClick={() => {
                var slider = document.getElementById('blogs-slider');
                slider.scrollLeft = slider.scrollLeft + 500;
            }} size={50} />
        </div>
    </ContentContainer>
    </Home>
  )
}