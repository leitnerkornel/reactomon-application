import React from 'react';

const Home = () => {
  let content = (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the PokéCyclopedia</h1>
      <img
        style={{ marginTop: '50px', width: '350px', height: 'auto' }}
        src={'./favicon_pikachu256.png'}
        alt={'Pikatchu'}
        draggable='false'
      />
    </div>
  );

  return content;
};

export default Home;
