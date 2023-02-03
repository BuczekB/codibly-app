import { Pagination } from '@mui/material';


type InputProps = {
    paginationId: (event: React.ChangeEvent<unknown>, page:number) => void 
    page: number | undefined
}

export const PaginationComponent = (props:InputProps) =>{

    return(
        <div>
        <Pagination page={props.page} count={3} color='primary' onChange={props.paginationId} />
        </div>
    )
}