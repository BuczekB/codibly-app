import React, { useEffect, useContext, useState} from 'react';
import { DataContext } from './DataContext';

const urls = 
[`https://reqres.in/api/paroducts?page=1`,
 `https://reqres.in/api/products?page=2`]

 const urlsTest = 'https://httpstat.us/200';

export const GetData = () =>{ 

    const context = useContext(DataContext)
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        dataFetch()
    },[])

    const dataFetch = async () =>{
        const resOne = await fetch(`${urls[0]}`)
        if(!resOne.ok){
          setIsError(true)
          throw new Error('could not fetch data')
        }
        else{
          setIsError(false)
        }
        const resOneData = await resOne.json()
        
        const resTwo = await fetch(`${urls[1]}`)
        if(!resTwo.ok){
          setIsError(true)
          throw new Error('could not fetch data')
        }
        else{
          setIsError(false)
        }
        const resTwoData = await resTwo.json()
        const data = [...resTwoData.data, ...resOneData.data] 
        context?.setDataBase(data)
    }

  return (
    <>
      {isError?
      'error':
      ''}
    </>
  );
}


