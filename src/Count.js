import React from 'react';
import './App.css';

const Count = ({ count, increment, decrement }) => {
  return (
    <div> 
      <h1>{count} Cookie(s) </h1>
      <button onClick={increment}><img className='image' src="https://myrealdomain.com/images/cartoon-cookies.png" alt=""></img></button>

    </div>
  );
};

export default Count;
