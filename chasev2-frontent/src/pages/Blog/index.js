import React, {useRef} from 'react'
import {Row, Container, Card, Col} from 'react-bootstrap'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {
    BlogContainer
} from './BlogElements'

export default function BlogPage() {

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    }

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
        <div id="bloggyblogblog">
            <div id='blog-header' className='text-center'>
                <h1>Blog</h1>
            </div>
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>                    
                    <div style={{'background': 'green'}} className='inline-block w-[400px] h-full m-2 text-center justify-content-center cursor-pointer hover:scale-105 ease-in-out duration-300'>1</div>
                    <div className='inline-block w-[400px] m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'>2</div>
                    <div className='inline-block w-[400px] m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'>3</div>
                    <div className='inline-block w-[400px] m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'>4</div>
                    <div className='inline-block w-[400px] m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'>5</div>
                    <div className='inline-block w-[400px] m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'>6</div>
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
             </div>
        </div>
        </>
    );
}