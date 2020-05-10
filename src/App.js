import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';

import './App.css';
import axios from 'axios';
import PokemonList from './components/pokemonlist/PokemonList';
import TypeList from './components/typelist/TypeList';
import PokemonDetail from './components/pokemondetail/PokemonDetail';

const App = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  const [currentId, setCurrentId] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [baseExperience, setBaseExperience] = useState('');

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => setPokemons(res.data.results));
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => setTypes(res.data.results));
  }, []);

  const getDetails = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setCurrentId(res.data.id.toString());
      setName(res.data.name);
      setHeight(res.data.height.toString());
      setWeight(res.data.weight.toString());
      setBaseExperience(res.data.base_experience.toString());
      setPokemonTypes(
        res.data.types.map((item) => {
          return item.type.name;
        })
      );
      setPokemonAbilities(
        res.data.abilities.map((item) => {
          return item.ability.name;
        })
      );
    });
  };

  let content = (
    <Router>
      <div className='App'>
        <Header />
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )}
        />
        <Route
          path='/pokemons'
          render={(props) => (
            <React.Fragment>
              <PokemonList pokemons={pokemons} getDetails={getDetails} />
            </React.Fragment>
          )}
        />
        <Route
          path='/types'
          render={(props) => (
            <React.Fragment>
              <TypeList types={types} />
            </React.Fragment>
          )}
        />
        <Route
          path={'/pokemon/:pokemonId'}
          render={(props) => (
            <React.Fragment>
              <PokemonDetail
                currentId={currentId}
                name={name}
                height={height}
                weight={weight}
                base_experience={baseExperience}
                pokemonTypes={pokemonTypes}
                pokemonAbilities={pokemonAbilities}
              />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );

  return content;
};

export default App;
