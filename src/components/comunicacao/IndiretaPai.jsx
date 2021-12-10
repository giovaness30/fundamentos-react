import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho'


// Então para usar estado com componentes, precisamos importar o 
//  hook"Gancho" do React chamado useState;
// Criamos constantes recebendo o useState inicial;
// Porem ele retorna um Array com duas posições, 
//  precisamos descontrui-lo  Ex: [nome, setNome] = useState('?') 
// Depois podemos chamar setNome(nome) na função para quando chamarmos as 
//  informações ele alterar o Estado na parte visual da página

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }


    return(
        <div>
            <div>
                <span>Nome: {nome} </span>
                <span>Idade: <strong>{idade} </strong></span>
                <span> é Nerd: {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}