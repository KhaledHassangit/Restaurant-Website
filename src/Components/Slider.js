import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Girl from "../IMG/girl.jpg"
import Man from "../IMG/Boy.jpg"
import { Col, Container, Row } from 'react-bootstrap';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        
        <div className='slider text-center'>
            <Container >
                <Row>
                <Col lg="12" md="12" xs="12" sm="12">
                    <h2 className='fs-1 mt-3 mb-5' style={{color:"#fff"}}>Testimonials</h2>
                </Col>
                </Row>
                <Row >
                    <Col lg="12" md="12" xs="12" sm="12" >
                    <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel' >
                <Carousel.Item className='div'>
                    <img alt='' src={Man} />
                    <Carousel.Caption >
                    
                    <p >
                    "Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts. Separated they live."
                    </p>
                    <h3>Simab Dave - Web Designer</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img alt=''  src={Man}/>
                    <Carousel.Caption>
                    <p >
                    "Far far away, behind the word mountains, far from the countries <br/>  Vokalia and Consonantia, there live the blind texts. Separated they live."
                    </p>
                    <h3>Simab Dave - Web Designer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img alt=''  src={Man}/>
                    <Carousel.Caption>
                    <p>
                    "Far far away, behind the word mountains, far from the countries <br/>  Vokalia and Consonantia, there live the blind texts. Separated they live."
                    </p>
                    <h3>Simab Dave - Web Designer</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                    </Col>
                </Row>
                
            </Container>
        </div>
        
    );
}

export default Slider;