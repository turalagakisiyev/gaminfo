import React from 'react';
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import "./gameAbout.css"
import { Link } from "react-router-dom";
import Logo from "../components/Navbar/logo2.PNG"
import Footer from '../components/footer/Footer'
import SimilarGames from '../components/similarGames/SimilarGames';


const GameAbout = () => {
  const selectedId = useSelector(state => state.games.id);
  const games = useSelector(state => state.games.games);


  const selectedGame = games.find(game => game.id === selectedId);

  if (!selectedGame) {
    return <div>No game found</div>;
  }

  return (

    <>
      <div className='GameAbout-logo'><Link to="/"><img src={Logo} alt="logo" /></Link></div>
      <div className='GameAbout'>

        <div className='GameAbout-top'><h1>
          {selectedGame.title}</h1>

          <Link to="/"><i className="fa-solid fa-arrow-rotate-left"></i></Link>
        </div>

        <div className='GameAbout-container'>

          <div className='GameAbout-container-left'>
            <img src={selectedGame.image} alt={selectedGame.title} />
            <div>
              <p>Genre: <a>{selectedGame.genre}</a></p>
              <p>Release Date: <a>{selectedGame.release_date}</a></p>
              <p>Rating: <a>{selectedGame.rating}</a></p>
              <p>Platform:</p>
              <ul>
                {selectedGame && selectedGame.platform && selectedGame.platform.map((platform, index) => (
                  <li key={index}><span>{platform}</span></li>
                ))}
              </ul>
              <p>Developer: <a>{selectedGame.developer}</a></p>
              <p>Publisher: <a>{selectedGame.publisher}</a></p></div>
          </div>

          <div className='GameAbout-container-right'>

            <ReactPlayer
              width="100%"
              height="100%"
              controls={true} url={selectedGame.trailer} />
            <p>{selectedGame.description}</p>
          </div>

        </div>

      </div>
      <SimilarGames genre={selectedGame.genre} id={selectedGame.id} />
      <Footer />

    </>

  );
};

export default GameAbout;

