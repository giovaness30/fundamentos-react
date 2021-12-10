import React, {useState} from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
    
    }

    function gerarNumeros(qtde){
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60 , nums)
            return [...nums, novoNumero]
            
        }, [])
        .sort((n1, n2) => n1 - n2)
        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div>
        <h2>Gerador Numeros Mega Sena</h2>
        <h2>{numeros.join(' ')}</h2>
        <div>
            <TextField 
            label="Qted de Nº" 
            type="number"
            min="6"
            max="17"
            value={qtde}
            onChange={e => {
                setQtde(+e.target.value)
                setNumeros(gerarNumeros(+e.target.value))

            }}
            size="small"
            margin="normal"
            />
        </div>
        <Button variant="contained" onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</Button>
        </div>
    )
    
}