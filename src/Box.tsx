import React, { useState, useEffect, useContext} from 'react';
import { setEnvironmentData } from 'worker_threads';
import { DataContext } from './DataContext';

type BoxProps = {
    pageId: string | undefined
}

type ArrayFromSwitch = {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
}[] | undefined

type ReadyArray = {}[] | undefined


type ButtonPorps = {
    event: React.MouseEvent<HTMLButtonElement>
}


export const Box = (props:BoxProps) =>{

    const data = useContext(DataContext)

    const [boxElements, setBoxElements] = useState<ReadyArray>()
    const [selectItem, setSelectItem] = useState<JSX.Element[] | undefined>()
    const [flag, setFlag] = useState<boolean>(false)

    const newData = data?.dataBase

    let test:ReadyArray; 

    useEffect(() =>{

        if(flag){
            setSelectItem([])
            setFlag(false)
        }


    },[props.pageId])

    
    const selectOne = (event: React.MouseEvent) =>{

        const name = ((event.target as any) .innerText);
        const item = newData?.filter(e => e.name == name)
        
        const printItem = item?.map((e) =>{
           return(
            <div key={e.id} style={{background: `${e.color}`}}>
            <h1>{e.name}</h1>
            <h2>{e.id}</h2>
            <h2>{e.year}</h2>
        </div>
           )
        })

        setSelectItem(printItem)
        setFlag(true)
     
        return(
            <>
            </>
        )
    }

    const printElements = (items:ArrayFromSwitch) =>{

        const selectItems = items?.map((item) => {  
            return(
                <div onClick={selectOne} style={{backgroundColor: `${item.color}`}} key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            )
        })
       test = selectItems
    }

    const firstPrint = () =>{
        const firstPage = newData?.filter(e => e.id < 6)
        printElements(firstPage)
    }
    firstPrint()


   

    switch(props.pageId){
        case '1':
            const firstPage = newData?.filter(e => e.id < 6)
            printElements(firstPage)
            
        break;
        case '2':
            const secoundPage = newData?.filter(e => e.id > 5 && e.id < 11)
            printElements(secoundPage)
        break;
        case '3':
            const thirdPage = newData?.filter(e =>e.id > 10)
            printElements(thirdPage)
        break;
    }

    return(
        <>
       {flag?
       selectItem:
       test}
        </>
    )
}