import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <Fade>
        <div className='banner'>
        <Container className='text-center' >
            <Row>
                <Col md="6" lg="6" sm="6" >
                    <h2 className='fs-1'>Baked fresh daily by bakers with passion.</h2>
                </Col>
                <Col md="6" lg="6" sm="6" >
                    <button className='me-5'>Learn More</button>
                </Col>
            </Row>
        </Container>
        </div>
        </Fade>
    )
}

export default Banner
