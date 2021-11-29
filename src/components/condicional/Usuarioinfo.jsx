import React from 'react';
import If, { Else } from './If';

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>

            <If test={usuario && usuario.nome}>
                Seja Bem vindo(a) <strong>{usuario.nome}</strong>!

                <Else>
                    Seja Bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
            

        </div>
    )
}