import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/common/useWindowSize';
import './styles/PokeDetail.scss';

const PokeDetail = ({ pokemon, onClose }) => {
  const { width, height } = useWindowSize();
  return (
    <div className="pokedetail" style={{ width, height }}>
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