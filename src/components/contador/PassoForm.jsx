import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default props => {
    return (
        <div>
            <TextField 
            id="passoInput"
            label="Passos:"
            variant="outlined"
            size="small"
            type="number" 
            value={props.passo} 
            onChange={e => props.setPasso(+e.target.value)} 
             />
        </div>
        
    )
}