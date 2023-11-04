import React from 'react';
import GirlWithAttitude from '../img/girl_with_attitude.png';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={GirlWithAttitude} alt="Girl with Attitude" className="featured-image" />
      <div className="phrase-container">
        <h2 className="left-phrase">
          Descubre nuevas posibilidades entre un mundo de soluciones<br />
          digitales, estrategias efectivas, creatividad y mucho más.</h2>
        <h2 className="right-phrase">
          Navega hacia la innovación: Escoje entre un universo de <br /> diseño, desarrollo, arte, contenidos y mucho más.
        </h2>

      </div>
    </div>
  );
};

export default Home;
