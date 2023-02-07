import React from 'react'

import { 
    CarouselCardBlock, 
    CarouselCardCol, 
    CarouselCardImg, 
    CarouselCardInternal, 
    CarouselCardP, 
    CarouselCardTitle, 
    CarouselCardLink,
} from './CarouselElements'

const CarouselCard = ({ cardInfo }) => {

    return (
        <CarouselCardCol className="col-5 col-md-7 col-sm-11">
            <CarouselCardInternal className="card">
                <CarouselCardImg src={require("../../images/"+cardInfo['img_src'])} className="card-img-top img-fluid" />
                <CarouselCardBlock className="card-block">
                    <CarouselCardTitle>{cardInfo['title']}</CarouselCardTitle>
                    <CarouselCardP>{cardInfo['summary']}</CarouselCardP>
                    <CarouselCardLink src={cardInfo['link']} target="_blank" className="stretched-link" />
                </CarouselCardBlock>
            </CarouselCardInternal>
        </CarouselCardCol>
    )
}

export default CarouselCard