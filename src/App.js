import React from 'react';
import './App.css';
import List from './Coponents/List/list';

import Example from './Coponents/add task/addTask';

function App() {
  return (
    
    <div className="App">
      <header>
      <h1>My TO DO List</h1>
      </header>
     <List />
     <Example/>
    </div>
     
  );
}

export default App;
