import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../HomePage/MainHome.css"
import { Fade } from "react-awesome-reveal";
const Paralex = () => {
    return (
        <Fade>
        <section className='paralex'>
                <Container className='text-center'>
                    <Row>
                        <Col lg="12" md="12">
                            <h2 className='mt-2'>When a man's stomach is full it makes no difference <br/>  whether he is rich or poor.</h2>
                            <p className='mt-3' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <span className='mt-5'> Watch Our Story</span>
                        </Col>
                    </Row>
                </Container>
            </section>
            </Fade>
    )
}

export default Paralex
