import React, { useState } from 'react';
import "./SearchBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { setId } from '../../game/gamesSlice';
import { Link } from 'react-router-dom';

const SearchBar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const handleItemClick = (key) => {
        dispatch(setId(key));
    };

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filterData = () => {
        return data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.developer.toLowerCase().includes(searchTerm.toLowerCase()) || item.publisher.toLowerCase().includes(searchTerm.toLowerCase())

        );
    };

    const isEmpty = () => {

        if (searchTerm === "") {
            return (false)
        } else {
            return (true)
        }
    }

    return (
        <div>
            <div className='SearchBar-input'>
                <input
                    type="text"
                    placeholder="example: Last Of Us Part II"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div>
                <div>
                    {isEmpty() ? filterData().map(game => (
                        <div className='SearchBar-Item' key={game.id}>

                            <div className='SearchBar-Item-Img'><img src={game.image} alt={game.title} /></div>
                            <div className='SearchBar-Item-Info'>
                                <Link to="gameAbout" onClick={() => handleItemClick(game.id)}><h2>{game.title}</h2></Link>
                                <p>Rating:  {game.rating}</p>
                                <p>Developer:  {game.developer}</p>
                                <p>Publisher:  {game.publisher}</p>
                                <p>Release Date:  {game.release_date}</p>
                            </div>

                        </div>
                    )) : null}


                </div>
            </div>

        </div>
    );
};

const Application = () => {
    const games = useSelector(state => state.games);

    return (
        <div className='SearchBar'>
            <h1>SEARCH GAME</h1>
            <SearchBar data={games.games} />
        </div>

    );
};

export default Application;
