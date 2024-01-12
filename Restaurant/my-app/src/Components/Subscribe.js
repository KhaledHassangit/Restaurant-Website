import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Slide  } from "react-awesome-reveal";

const Subscribe = () => {
    return (
        <div className='subscribe '>
            <Container className='text-center'>
                <Row>
                    <Col md="12" lg="12" sm="12">
                        <h2>Hurry up! Subscribe our newsletterand <br/> get 25% Off</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md="12" lg="12" sm="12">
                        <p>
                        Limited time offer for this month. No credit card required.
                        </p>
                    </Col>
                </Row>
                <Slide>
                <Row>
                    <Col md="12" lg="12" sm="12" xs="12">
                        <input type='text' placeholder='Email Adress here'/>
                        <button>Subscribe </button>
                    </Col>
                </Row>
                </Slide>
            </Container>
        </div>
    )
}

export default Subscribe
