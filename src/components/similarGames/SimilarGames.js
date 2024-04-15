import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./similargames.css"
import { setId } from '../../game/gamesSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll as scroll } from 'react-scroll';


const SimilarGames = ({ genre, id }) => {
    const items = useSelector(state => state.games.games);
    const dispatch = useDispatch();

    const handleItemClick = (key) => {
        dispatch(setId(key));
    };

    const filterGenre = () => {
        return items.filter(item =>
            (item.genre === genre) && (item.id !== id)
        );
    }

    const scrollToTop = () => {
        scroll.scrollToTop(
            {
                duration: 400
            });
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
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

    const filteredGames = filterGenre();

    return (
        <div className='SimilarGames'>


            {filteredGames.length === 0 ? (
                null
            ) : (
                <>
                    <h1>MORE {genre.toUpperCase()} GAMES</h1>
                    <Slider {...settings}>
                        {filteredGames.map((game) => (
                            <div key={game.id} onClick={() => handleItemClick(game.id)}>
                                <div onClick={scrollToTop} className="Similargames-item">
                                    <div className='Similargames-item-image'><img src={game.image} /></div>
                                    <div className='Similargames-item-title'>
                                        <h3>{game.title}</h3>
                                        <p>Rating: <b>{game.rating}</b></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </>

            )}
        </div>
    );
}

export default SimilarGames;
