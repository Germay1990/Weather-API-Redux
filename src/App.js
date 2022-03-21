import React from 'react';
import './App.css';
import Search from './Components/search';
import Result from './Components/result';

function App() {

  // .fetch()
  return (
    <div className="App">
      <Search/>
      <Result/>
    </div>
  );
}

export default App;
