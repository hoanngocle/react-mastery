import logo from './logo.svg';
import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const names = ['Thor', 'IronMan', 'Dr Strange'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
      <p>{handleNameChange()}</p>
    </main>
  );
};

export default Content;
