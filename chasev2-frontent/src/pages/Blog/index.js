import React, {useRef} from 'react'
import {Row, Container, Card, Col} from 'react-bootstrap'
import {
    BlogContainer
} from './BlogElements'

export default function BlogPage() {

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    }

    return (
        // <BlogContainer className='container-fluid container-scroll'>
        //     <Row style={{'display': 'flex', 'flex-wrap': 'nowrap'}}>
        //         <div style={{'width': '300px', 'background': 'green'}}>hi</div>
        //         <div style={{'width': '300px', 'background': 'green'}}>hi</div>
        //         <div style={{'width': '300px', 'background': 'green'}}>hi</div>
        //         <div style={{'width': '300px', 'background': 'green'}}>hi</div>
        //         <div style={{'width': '300px', 'background': 'green'}}>hi</div>
        //         <div style={{'width': '300px', 'background': 'green'}}>hi</div>
        //     </Row>
        // </BlogContainer>
        <div>
            <Container>
                <Row>
                    <Col>
                        <button className='btn btn-primary' onClick={() => scroll(-50)}>RIGHT</button>
                    </Col>
                </Row>
            </Container>
            <div style={{'overflox-x': 'scroll', 'display': 'flex'}} ref={ref}>
                <div style={{'min-width': '500px'}}>
                    hi
                </div>
                <div style={{'min-width': '500px'}}>hello</div>
                <div style={{'min-width': '500px'}}>hello</div>
                <div style={{'min-width': '500px'}}>hello</div>
                <div style={{'width': '500px'}}>hello</div>
                <div style={{'width': '500px'}}>hello</div>
            </div>
        </div>
    )
}