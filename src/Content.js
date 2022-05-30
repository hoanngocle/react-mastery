import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const names = ['Thor', 'IronMan', 'Dr Strange'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log('You click the World');
  };

  const handleClickName = name => {
    console.log(name + ' was clicked the World');
  };

  const handleClickLog = e => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()} !</p>
      <button onClick={handleClick}>Click me!</button>
      <button
        onClick={() => {
          handleClickName('Thor');
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
