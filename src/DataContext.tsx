import { createContext, useState } from 'react';

type DataContextProviderProps = {
    children: React.ReactNode
}

type Data = {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
}[]

type DataContextType = {
    dataBase: Data | null
    setDataBase: React.Dispatch<React.SetStateAction<Data | null>>
}

export const DataContext = createContext<DataContextType | null>(null);



export const DataContextProvider = ({children}: DataContextProviderProps) => {

    const [dataBase, setDataBase] = useState<Data | null>(null)

    

  return (
    <DataContext.Provider value = {{dataBase, setDataBase}}>
        {children}
    </DataContext.Provider>
  );
}


