import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import ListaAlunos from './components/Repeticao/ListaAlunos'
import ListaProdutos from './components/Repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default () => (
    <React.Fragment>
        <CssBaseline />
        <div className="app">
            <h1>Fundamento React</h1>

            <div className="cards">

                <Card titulo="#13 - Desafio Surpresinha ">
                    <Mega qtde={6}></Mega>
                </Card>

                <Card titulo="#12 - Contador ">
                    <Contador numeroInicial={10} passoInicial={20}></Contador>
                </Card>

                <Card titulo="#11 - Conponente controlado (Input)">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#F67280">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#F8B195">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#F67280">
                    <ParOuImpar numero="3" ></ParOuImpar>
                    <Usuarioinfo usuario={{ nome: 'Fernando' }}></Usuarioinfo>
                    {/* <Usuarioinfo usuario={{email: 'Fer@gmail.com'}}></Usuarioinfo> */}
                </Card>

                <Card titulo="#07 - Desafio - Repetição" color="#F67280">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo="#06 - Repetição">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#F8B195">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="pedro" />

                        <FamiliaMembro nome="Maria" />
                        <FamiliaMembro nome="Caio" />

                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aléatorio" color="#F8B195">
                    <Aleatorio min={1} max={25} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#F67280">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Paramentro" color="#C06C84 ">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="pedro"
                        nota={2.4}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>


        </div>
    </React.Fragment>
)
