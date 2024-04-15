import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import { setId } from '../game/gamesSlice';
import { Link, useNavigate } from 'react-router-dom';
import './allGames.css'
import Logo from "../components/Navbar/logo2.PNG"

const AllGames = () => {
  const items = useSelector(state => state.games.games);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);
  useEffect(() => {
    const allGenres = items.map(game => game.genre);
    setSelectedGenres(allGenres);
  }, [items]);

  const handleItemClick = (key) => {
    dispatch(setId(key));
    navigate('/gameAbout');
  };

  const handleFilterChange = (genre) => {
    if (genre === 'AllGames') {
      setSelectedGenres(items.map(game => game.genre));
    } else {
      if (selectedGenres.includes(genre)) {
        setSelectedGenres(selectedGenres.filter(item => item !== genre));
      } else {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  };

  const filteredItems = items.filter(game => {
    if (selectedGenres.length === 0) {
      return false;
    } else {
      return selectedGenres.includes(game.genre);
    }
  });

  return (
    <>
      <div className='GameAbout-logo'><Link to="/"><img src={Logo} alt="logo" /></Link></div>
      <div className='allGames'>

        <div className='allGames-Filter'>
          <h1>Filter by Genre:</h1>
          <div className='allGames-Filter-filters'>
          <label>
            <input
              type="checkbox"
              checked={selectedGenres.length === items.length && selectedGenres.length > 0}
              onChange={() => handleFilterChange('AllGames')}
            />
            All Games
          </label>
          {['Action RPG', 'Action-adventure', 'Platformer', 'Fighting', 'Role-playing', 'First-person shooter', 'MMORPG'].map(genre => (
            <label key={genre}>
              <input
                type="checkbox"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleFilterChange(genre)}
              />
              {genre}
            </label>
          ))}
          </div>
        </div>
        <div className='allGames-cards'>
          {filteredItems.map((game) => (
            <div key={game.id}>
              <div key={game.id} className='allGames-onecard' onClick={() => handleItemClick(game.id)}>
                <img src={game.image} alt={game.title} />

                <p className='gameTitle'>
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <Footer />

    </>
  );
};

export default AllGames;

