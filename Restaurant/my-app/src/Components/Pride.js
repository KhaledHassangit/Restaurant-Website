import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../HomePage/MainHome.css"
import prideimg from '../IMG/img1.png'
import { Fade } from "react-awesome-reveal";

const Pride = () => {
    return (
        <section className='pride'>
                <Container>
                    <Row  >
                        <Col md="12" lg="6"  sm="12" xs="12">
                            <Fade>
                            <img alt='' src={prideimg} className='' />
                            </Fade>
                        </Col>
                        <Col md="12" lg="6"  sm="12" xs="12">
                            <h2>
                            We pride ourselves on making real food from the best ingredients.

                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.

                            </p>
                            <button className='btn3'>Learn More</button>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

export default Pride
