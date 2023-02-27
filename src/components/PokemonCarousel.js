import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import '../styles/PokemonCarousel.css'

const PokemonCarousel = ({ pokemonNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pokemonNames.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex === pokemonNames.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="pokemon-carousel">
      <button className="carousel-button" onClick={handleLeftClick}>Previous</button>
      <PokemonCard pokemonName={pokemonNames[currentIndex]} />
      <button className="carousel-button" onClick={handleRightClick}>Next</button>
    </div>
  );
};

export default PokemonCarousel;