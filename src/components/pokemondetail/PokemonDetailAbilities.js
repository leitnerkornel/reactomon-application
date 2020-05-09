import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class PokemonDetailAbilities extends Component {
  formatAbilities = (abilities) => {
    console.log(typeof abilities);
  };

  render() {
    return (
      <div>
        <h3>Abilities</h3>
        {this.props.abilities.map((item) => {
          return <li key={uuidv4()}>{item}</li>;
        })}
      </div>
    );
  }
}

PokemonDetailAbilities.propTypes = {
  abilities: PropTypes.array.isRequired,
};

export default PokemonDetailAbilities;
