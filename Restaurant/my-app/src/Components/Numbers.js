import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../HomePage/MainHome.css"

export const Numbers = () => {
    return (
    <section className='numbers'>
                <Container  className="text-center">
                    <Row className='mt-2 mb-2' >
                        <Col md="3" lg="3" sm="3" >
                            <h2 >1287+</h2>
                            <h6>SAVING</h6>
                        </Col>
                        <Col md="3" lg="3" sm="3" >
                            <h2 >1354+</h2>
                            <h6>PHOTOS</h6>
                        </Col>
                        <Col md="3" lg="3" sm="3" >
                            <h2  >1249+</h2>
                            <h6>ROCKETS</h6>
                        </Col>
                        <Col md="3" lg="3" sm="3">
                            <h2  >1790+</h2>
                            <h6>GLOBES</h6>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}
