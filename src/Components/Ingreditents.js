import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../HomePage/MainHome.css"
import ingredients from '../IMG/2.png'
import { Fade } from "react-awesome-reveal";

const Ingreditents = () => {
    return (
        <section className='ingredients'>
                <Container >
                    <Row  >
                        <Col md="6" lg="6"  sm="12" xs="12">
                            <div className=''>
                            <h2>
                            We make everything by hand with the best possible ingredients.

                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio 
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul className='ms-4'>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button className='btn3 ms-5'>Learn More</button>
                            </div>
                        </Col>

                        <Col md="6" lg="6"  sm="12" xs="12">
                            <Fade>
                            <img alt='' src={ingredients} className='' />
                            </Fade>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

export default Ingreditents
