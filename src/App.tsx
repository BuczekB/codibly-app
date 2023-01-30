import React from 'react';
import './App.css';

import { GetData } from './GetData';
import { DataContextProvider } from './DataContext';
import { Test } from './Test';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <GetData/>
        <Test/>
      </DataContextProvider>
    </div>
  );
}

export default App;
