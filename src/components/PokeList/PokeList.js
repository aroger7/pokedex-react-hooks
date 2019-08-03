import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PokeDetail from 'components/PokeDetail';
import './styles/PokeList.scss';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon', { params: { limit: 100 } })
      .then((response) => setPokemon(response.data.results.map(p => (
        {
          ...p,
          nameCapitalized: p.name[0].toUpperCase() + p.name.slice(1)
        }
      ))))
      .catch((err) => console.log(err));
  }, []);

  const handleSelectedClose = useCallback(() => {
    setSelectedPokemon(null);
  }, []);

  const handleSelect = (pokemon) => {
    const { nameCapitalized } = pokemon;
    axios.get(pokemon.url)
      .then((response) => setSelectedPokemon({ ...response.data, nameCapitalized }))
      .catch((err) => console.log(err));
  }

  return (
    <ul className="pokelist">
      {!selectedPokemon 
        ? pokemon.map(p => (
          <li className="pokelist__item">
            <button 
              className="pokelist__button"
              key={p.name} 
              onClick={() => handleSelect(p)}
            >
                {p.nameCapitalized}
            </button>
          </li>
        ))
        : <PokeDetail pokemon={selectedPokemon} onClose={handleSelectedClose} /> }
    </ul>
  );
};

export default PokeList;
