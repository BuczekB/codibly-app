import { Pagination } from '@mui/material';


type InputProps = {
    paginationId: (event: React.ChangeEvent<unknown>) => void
}

export const PaginationComponent = (props:InputProps) =>{

   

    
    

   
    
    


    return(
        <div>
        <Pagination count={3} color='primary' onChange={props.paginationId} />
        </div>
    )
}