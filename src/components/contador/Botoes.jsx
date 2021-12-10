import React from 'react'

import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

export default props => {
    return (
        <div>
            <Button onClick={props.setInc}><AddCircleRoundedIcon fontSize="large"/></Button>
            <Button onClick={props.setDec}><RemoveCircleRoundedIcon fontSize="large"/></Button>
        </div>
        
    )
}