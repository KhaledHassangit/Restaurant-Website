import React, { Fragment } from 'react'
import "./MainHome.css"
import { Landing } from '../Components/Landing'
import { Numbers } from '../Components/Numbers'
import Pride from '../Components/Pride'
import Ingreditents from '../Components/Ingreditents'
import Paralex from '../Components/Paralex'
import Blogs from "../Components/Blogs"
import Slider from '../Components/Slider'
import Questions from '../Components/Questions'
import Banner from '../Components/Banner'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'


export const Home = () => {

    

    return (
        <Fragment>
            <Landing/>
            <Numbers/>
            <Pride/>
            <Ingreditents/>
            <Paralex/>
            <Blogs/>
            <Slider/>
            <Questions/>
            <Banner/>
            <Subscribe/>
            <Footer/>
        </Fragment>
    )
}
