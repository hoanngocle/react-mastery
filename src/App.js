import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
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
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem('shopping list', JSON.stringify(listItems));
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopping list', JSON.stringify(listItems));
  };

  return (
    <div className='App'>
      <Header />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
