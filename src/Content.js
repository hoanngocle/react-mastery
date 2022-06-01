import React from 'react';
import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Nyx');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Thor', 'IronMan', 'Dr Strange'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClickName = name => {
    console.log(name + ' was clicked the World');
  };

  const handleClickLog = e => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name} !</p>
      <button onClick={handleNameChange}>Change name!</button>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click me!
      </button>
      <button
        onClick={e => {
          handleClickLog(e);
        }}
      >
        Click me!
      </button>
    </main>
  );
};

export default Content;
