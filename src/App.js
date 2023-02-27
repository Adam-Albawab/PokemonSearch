import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/Searchbar';
import './styles/App.css';

const App = () => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSearch = (pokemonName) => {
    setPokemonName(pokemonName);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {pokemonName && <PokemonCard pokemonName={pokemonName} />}
    </div>
  );
};

export default App;