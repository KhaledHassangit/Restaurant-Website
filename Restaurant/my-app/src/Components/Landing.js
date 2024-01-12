import React from 'react'
import {Container,Col, Row} from 'react-bootstrap'
import "../HomePage/MainHome.css"
import refreshherohome from "../IMG/refreshherohome.webp"
import { JackInTheBox } from "react-awesome-reveal";

export const Landing = () => {

    return (
        <header href="#home" id='home'>
            <Container className='d-flex justify-content-between mt-5'>
                <Row >
                    <Col md="6">
                        <h2>Good Food Choices are good Investments.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, unde?</p>
                        <button  className='btn1'>Order Now</button>
                        <button className='btn2'>Learn More</button>
                    </Col>

                    <Col md="6">
                        <JackInTheBox>
                        <img alt='' src={refreshherohome} className='landing-img'></img>
                        </JackInTheBox>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
