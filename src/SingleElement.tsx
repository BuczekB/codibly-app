import { useContext, useState } from 'react';
import { DataContext } from './DataContext';

type SingleElementProps = {
    id: number
}

export const SingleElement = (props: SingleElementProps) =>{

    const context = useContext(DataContext)

    const data = context?.dataBase
    const selectedItem = data?.filter(e => e.id == props.id)

    const item = selectedItem?.map((e) =>{
        return(
            <div key={e.id} style={{background: `${e.color}`}}>
                <h1>{e.name}</h1>
                <h2>{e.id}</h2>
                <h2>{e.year}</h2>
            </div>
        )
    })

    return(
        <>
        {item}
        </>
    )
}