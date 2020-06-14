import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TypeCard from './TypeCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { API_POKEMON_TYPE_URL } from '../../Constants';

const TypeList = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get(API_POKEMON_TYPE_URL).then((res) => setTypes(res.data.results));
  }, []);

  return (
    <div className='type-container'>
      {types.map((item) => (
        <TypeCard key={uuidv4()} type={item} />
      ))}
    </div>
  );
};

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
