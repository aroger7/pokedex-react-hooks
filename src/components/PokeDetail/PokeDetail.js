import React from 'react';
import PropTypes from 'prop-types';
import './styles/PokeDetail.scss';

const PokeDetail = ({ pokemon, onClose }) => {
  return (
    <div className="pokedetail">
      <button
        className="pokedetail__button"
        onClick={onClose}
      >
          Close
      </button>
      <p>{pokemon.nameCapitalized}</p>
      <img
        style={{ width: '200px' }}
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} Sprite`}
      />
      {pokemon.types.map(type => <p>{type.type.name}</p>)}
    </div>
  )
}

PokeDetail.propTypes = {
  pokemon: PropTypes.object,
  onClose: PropTypes.func
}

export default PokeDetail;