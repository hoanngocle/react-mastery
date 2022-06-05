import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('cart')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItem = newItems => {
    setItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, title: item, checked: false };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  };

  const handleCheck = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItem(listItems);
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setAndSaveItem(listItems);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className='App'>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <Content
        items={items.filter(item =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
