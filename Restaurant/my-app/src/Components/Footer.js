import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube, faInstagram,faLinkedin,faDribbble} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <Container className='text-center'>
                <Row>
                    <Col md="12" xs="12" lg="12" sm="12">
                    <ul className='d-flex justify-content-center'>
                            <li>Register</li>
                            <li>Fourm</li>
                            <li>Affilliate</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                </Row>


                <Row>
                    <Col lg="2" md="2" >
                    
                    </Col>
                    <ul className='d-flex justify-content-center icons'>
                            <li><FontAwesomeIcon icon={faFacebook} className='icon'  /></li>
                            <li><FontAwesomeIcon icon={faTwitter}  /></li>
                            <li><FontAwesomeIcon icon={faYoutube}  /></li>
                            <li><FontAwesomeIcon icon={faDribbble}  /></li>
                            <li><FontAwesomeIcon icon={faLinkedin}  /></li>
                            <li><FontAwesomeIcon icon={faInstagram}  /></li>
                        </ul>
                </Row>

                <Row>
                    <Col lg="12" md="12" sm="12" >
                    <p>© 2023. Foodera. By Khaled Hassan </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
