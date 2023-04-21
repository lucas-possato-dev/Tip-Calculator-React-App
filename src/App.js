import React from 'react';
import Title from './components/Title';
import Bill from './components/Bill';

function App() {
  return (
    <div className='container flex flex-col items-center w-screen max-w-full justify-center'>
      <Title />
      <div className='container-data'>  
        <Bill />
      </div>
    </div>
  );
}

export default App;
