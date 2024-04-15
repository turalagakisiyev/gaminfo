import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CartSlider.css';
import { Link } from 'react-router-dom';
import { setId } from '../../game/gamesSlice';

const CartSlider = ({ items }) => {

    const dispatch = useDispatch();


    const filterGame = () => {
        return items.filter(item =>
            item.id < 15
        );
    };

    const handleItemClick = (key) => {
        dispatch(setId(key));
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="card-slider">
            <h1>POPULAR GAMES</h1>
            <div>
                <Slider {...settings}>

                    {filterGame().map((game) => (
                        <Link to="gameAbout" key={game.id}>

                            <div key={game.id} className="card-slider-item" onClick={() => handleItemClick(game.id)}>

                                <div className='card-slider-item-img'>
                                    <img src={game.image} alt={game.title} />
                                </div>
                                <div className='card-slider-item-title'>
                                    <h4>{game.title}</h4>
                                    <p>Release Date: {game.release_date}</p>
                                </div>
                            </div>
                        </Link>


                    ))}
                </Slider>
            </div>

        </div>
    );
};

const App = () => {
    const games = useSelector(state => state.games);

    return (
        <div>
            <CartSlider items={games.games} />
        </div>
    );
};

export default App;
