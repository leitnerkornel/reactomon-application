import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TypeCard from './TypeCard';
import { v4 as uuidv4 } from 'uuid';

const TypeList = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_POKEMON_TYPE_BASE_URL}?offset=0&limit=100`).then((res) => {
      setTypes([...res.data.results]);
    })
  }, []);

  const displayTypes = () => {
    const rows = [];
    const numberOfColumns = 5;
    const numberOfRows = Math.floor(types.length / numberOfColumns);

    let counter = 0;

    for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
      let row = [];
      for (
        let columnNumber = 0;
        columnNumber < numberOfColumns;
        columnNumber++
      ) {
        row.push(<TypeCard key={uuidv4()} type={types[counter++]} />);
      }
      rows.push(
        <div key={uuidv4()} className='type-list-row'>
          {row}
        </div>
      );
    }

    return rows;
  };

  return <div className='type-container'>{displayTypes()}</div>;
};

export default TypeList;
