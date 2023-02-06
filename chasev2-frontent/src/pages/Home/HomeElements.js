import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-top: -80px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
         transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;   
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    margin-top: -450px;
    position: absolute;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    opacity: 90%;
`

export const HeroH1 = styled.h1`
    font-weight: bold;
    color: white;
    text-align: left;
    font-size: 300%;
    margin-bottom: 55px;
    margin-left: 125px;
    max-width: 100%;
    padding-left: 10px;
    font-family: 'Smooch', cursive;

    @media screen and (max-width: 480px) {
        font-size: 200%;
        margin-left: 20vw;
    }
`

export const HeroP = styled.p`
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 5px;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 22vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding-left: 20px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`