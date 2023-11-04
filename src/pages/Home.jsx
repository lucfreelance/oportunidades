import React from 'react';
import GirlWithAttitude from '../img/girl_with_attitude.png';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={GirlWithAttitude} alt="Girl with Attitude" className="featured-image" />
      <div className="phrase-container">
        <h2 className="left-phrase">Ignite Your imagination: Dive into a Wonderland of word soups, puzzles, coloring books, and more!</h2>
        <h2 className="right-phrase">Embark on a creative adventure: Explore a world of designs, patterns, digital art and relatives.</h2>
      </div>
    </div>
  );
};

export default Home;
