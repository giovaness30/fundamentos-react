import React from 'react';

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default props => {

    const min = 50
    const max = 70
    const gerarIdade = () => Math.floor(Math.random() * (20) + 50)
    const gerarNerd = () => (Math.random() > 0.5)

    return(
        <div>
            <div>
                Filho
            </div>
            <Button onClick={
                function (e){
                    props.quandoClicar('João', gerarIdade(), gerarNerd())
                }
            } variant="contained" endIcon={<SendIcon />}>
                Fornecer Informações</Button>
        </div>
    )
}