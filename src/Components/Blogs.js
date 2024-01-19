import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../HomePage/MainHome.css"
import { Data } from '../Data'
import {  Roll  } from "react-awesome-reveal";

const Blogs = () => {
    
    const blogItems= Data.map((item) =>{
        return(
            
            <Col md="4" lg="4" xs="12">
                <div className='box'>
                            <Roll>
                            <img alt='' src={item.img}/>
                            </Roll>
                            <h4 className='mt-2'>{item.title}</h4>
                            <p>{item.time}</p>
                            <p className='price'>{item.price}</p>
                        </div>
                        <button>Order More</button>
            </Col>
            
        )
        
        
    })
    
    return (
        <section className='blogs'>
                <Container className='text-center'>
                    <Row>
                        <Col md="12" xs="12" lg="12">
                            <h2 className='mt-5 '>
                            Explore Our Foods

                            </h2>
                            <p className='mt-4 mb-5'>
                            Lorem ipsum dolor sit amet , consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. <br/> Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                    
                        {blogItems}
                        
                        
                    </Row>
                </Container>
            </section>
    )
}

export default Blogs
