import React, { useEffect, useContext } from 'react';
import { DataContext } from './DataContext';

const urls = 
[`https://reqres.in/api/products?page=1`,
`https://reqres.in/api/products?page=2`]

export const GetData = () =>{ 

    const context = useContext(DataContext)

    useEffect(() =>{
        dataFetch()
    },[])

    const dataFetch = async () =>{
        const resOne = await fetch(`${urls[0]}`)
        const resOneData = await resOne.json()
        const resTwo = await fetch(`${urls[1]}`)
        const resTwoData = await resTwo.json()
        const data = [...resTwoData.data, ...resOneData.data] 
        console.log(data);
        context?.setDataBase(data)
    }

  return (
    <>
    </>
  );
}


