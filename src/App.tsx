import React, { useState } from 'react';
import './App.css';

import { GetData } from './GetData';
import { DataContextProvider } from './DataContext';
import { Input } from './Input';
import { SingleElement } from './SingleElement';
import { PaginationComponent } from './PaginationComponent';
import { Box } from './Box';
 


const App = () => {

const [id, setId] = useState(0)
const [flag, setFlag] = useState<boolean>(true)
const [page, setPage] = useState<number>(1)

const getNumber = (event: React.ChangeEvent<HTMLInputElement>) =>{
  let selectedId = parseInt(event.target.value)
  setId(selectedId)
  setFlag(false) 
}

const paginationId = (event: React.ChangeEvent<unknown>, page:number) =>{
  setFlag(true)
  setPage(page)
}

  return (
    <div className="App">
      <DataContextProvider>
        <Input value={id} getNumber={getNumber}/>
        {flag?
         <Box pageId = {page}/>:
         <SingleElement id={id}/>
      }
        <PaginationComponent page={page}  paginationId = {paginationId}  />
        <GetData/>
      </DataContextProvider>
    </div>
  );
}

export default App;
