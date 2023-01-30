import TextField from '@mui/material/TextField';

type InputProps = {
    value: number
    getNumber: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) =>{

    return(
        <>
            <TextField onChange={props.getNumber} type='number' InputProps={{ inputProps:{min: 1, max: 12}}} />
        </>
    )
}