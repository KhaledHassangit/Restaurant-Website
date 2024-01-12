import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Questions = () => {
    return (
        <div className='questions'>
        <Container className='text-center'>
            <Row>
                <Col lg="12" md="12" xs="12">
                <h2 className='fs-1 mt-3 mb-5' style={{color:"#43121d"}}>Frequently Asked Questions</h2>
                </Col>
            </Row>

            <Row>
                <Col lg="6" md="6" xs="12" >
                    <h5><span>~</span> Is Foodera Bread really baked fresh each day?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br/> and Consonantia, there live the blind texts. Separated they live in <br/>  Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    <h5><span>~</span> Can I order your products online?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br/>  and Consonantia, there live the blind texts. Separated they live in <br/>  Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </Col>

                <Col lg="6" md="6" xs="12">
                <h5><span>~</span> Do you bake breads containing animal fats or products?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br/>  and Consonantia, there live the blind texts. Separated they live in <br/>  Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    <h5><span>~</span> When are you opening a shop near me?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br/>  and Consonantia, there live the blind texts. Separated they live in <br/>  Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Questions
