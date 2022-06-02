import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'sunt aut facere repellat provident occaec',
      body: 'quia et suscipit\nsuscipit ',
      checked: false
    },
    {
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      checked: false
    },
    {
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      checked: true
    },
    {
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      checked: true
    },
    {
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      checked: true
    }
  ]);

  const handleCheck = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked, title: 'tét' } : item
    );

    setItems(listItems);
    console.log(listItems);
  };

  return (
    <main>
      <ul>
        {items.map(item => (
          <li className='item' key={item.id}>
            <input
              type='checkbox'
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label htmlFor=''>{item.title}</label>
            <FaTrashAlt role='button' tabIndex='0'></FaTrashAlt>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
