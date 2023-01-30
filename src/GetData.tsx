import React, { useEffect } from 'react';

const urls = 
[`https://reqres.in/api/products?page=1`,
`https://reqres.in/api/products?page=2`]

export const GetData = () =>{ 

    useEffect(() =>{
        dataFetch()
    },[])

    const dataFetch = async () =>{
        const resOne = await fetch(`${urls[0]}`)
        const resOneData = await resOne.json()
        const resTwo = await fetch(`${urls[1]}`)
        const resTwoData = await resTwo.json()
        const data = [...resTwoData.data, ...resOneData.data] 
    }

  return (
    <>
    </>
  );
}


