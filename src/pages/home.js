import React from 'react'
import Carousel from '../components/carousel/carousel'
import SearchBar from '../components/search/SearchBar'
import CartSlider from '../components/CartSlider/CartSlider'
import Gaming from '../components/Gaming/Gaming'
import Navbar from '../components/Navbar/Navbar'
import Arthur from '../components/arthur/arthur'
import "./home.css"
import background from "./img3.webp"
import Footer from '../components/footer/Footer'





const home = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className='home-carousel blackk' style={{ backgroundImage: `url(${background})` }}>
                <Carousel />
            </div>

            <Arthur />

            <div className='home-carousel'>
                <CartSlider />
            </div>
            <Gaming />
            <div className='home-carousel'>
                <SearchBar />
            </div>
            <Footer/>
        </>
    )
}

export default home