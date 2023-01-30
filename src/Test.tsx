
import React, { useEffect, useContext } from 'react';
import { DataContext } from './DataContext';

export const Test = () =>{

    const context = useContext(DataContext)

    const data = context?.dataBase

    const list = data?.map((e) =>{
        return(
            <h1 key={e.id}>{e.name}</h1>
        )
    })

   
    
    return(
        <>
        <h1>
            {list}
        </h1>
        </>
    )  
    
}