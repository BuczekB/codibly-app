import React, { useState } from 'react';
import './App.css';

import { GetData } from './GetData';
import { DataContextProvider } from './DataContext';
import { Input } from './Input';
import { SingleElement } from './SingleElement';
import { PaginationComponent } from './Pagination';
import { Box } from './Box';
 


const App = () => {

const [id, setId] = useState(0)
const [flag, setFlag] = useState<boolean>(true)
const [pageId, setPageId] = useState<string | undefined>()
const [changePagination, setChangePagination] = useState<string | null>(null)

const getNumber = (event: React.ChangeEvent<HTMLInputElement>) =>{
  let selectedId = parseInt(event.target.value)
  setId(selectedId)
  setFlag(false) 
}

const paginationId = (event: React.ChangeEvent<unknown> ) =>{
  
  
  const labelPagination = (event.target as HTMLInputElement).ariaLabel
  const page = (event.target as HTMLInputElement).innerText;
  setPageId(page)
  setChangePagination(labelPagination)
  setFlag(true)
 const test = (event.target as HTMLInputElement).classList.value
 console.log(test);
 
  
  
}





  return (
    <div className="App">
      <DataContextProvider>
        <Input value={id} getNumber={getNumber}/>
        {flag?
         <Box pageId = {pageId} />:
         <SingleElement id={id}/>
      }
        <PaginationComponent  paginationId = {paginationId}  />
        <GetData/>
      </DataContextProvider>
    </div>
  );
}

export default App;
