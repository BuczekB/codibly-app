import React, { useState } from 'react';
import './App.css';

import { GetData } from './GetData';
import { DataContextProvider } from './DataContext';
import { Input } from './Input';
import { SingleElement } from './SingleElement';


const App = () => {

const [id, setId] = useState(0)

const getNumber = (event: React.ChangeEvent<HTMLInputElement>) =>{
  const selectedId = parseInt(event.target.value)
  setId(selectedId)
}


  return (
    <div className="App">
      <DataContextProvider>
        <Input value={id} getNumber={getNumber}/>
        <SingleElement id={id}/>
        <GetData/>
      </DataContextProvider>
    </div>
  );
}

export default App;
