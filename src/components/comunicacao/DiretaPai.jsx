import React from 'react';
import DiretaFilho from './DiretaFilho'

// Comunicação direta, passando por via de props;
// De pai pra filhos, mais comum em uma aplicação;


export default props => {
    return(
        <div>
            <DiretaFilho nome="Junior" idade={21} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Pedro" idade={15} nerd={false}></DiretaFilho>
        </div>
    )
}