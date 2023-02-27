import React, { useState, useEffect } from 'react';
import '../styles/PokemonCard.css';

const PokemonCard = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error(`Error fetching Pokemon data: ${error}`);
      }
    };
    getPokemonData();
  }, [pokemonName]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const { name, weight, height, types, stats} = pokemonData;
  console.log(pokemonData);
  return (
    <div className="pokemon-card">
      <div className="pokemon-card__header">
        <h2 className="pokemon-card__name">{name}</h2>
        <div className="pokemon-card__types">
          {types.map(type => (
            <span key={type.type.name} className={`pokemon-card__type pokemon-card__type--${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="pokemon-card__image">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt={`${name} sprite`} />
      </div>
      <div className="pokemon-card__body">
        <p className="pokemon-card__stat-nv">Weight: <span className = "fonting" >{weight} kg</span></p>
        <p className="pokemon-card__stat-nv">Height: <span className = "fonting" >{height} m</span></p>
      </div>
      <p className="pokemon-card__stat-nv">Stats:</p>
      <div className="pokemon-card__stats">
          {stats.map((stat) => (
            <div key={stat.stat.name} className="pokemon-card__stat-bar">
              <p className="pokemon-card__stat-bar-name">{stat.stat.name}</p>
              <div className="pokemon-card__stat-bar-value pokemon-card__stat-bar-value--{stat.stat.name.toLowerCase()}">
                <div
                  className="pokemon-card__stat-bar-fill"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
              <p className="pokemon-card__stat-bar-number">{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
  );
          }
export default PokemonCard;