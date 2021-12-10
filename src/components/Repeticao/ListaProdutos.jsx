import React from 'react';
import produtos from '../../data/produtos'
// import './ListaProdutos.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default props => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <StyledTableRow key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>

                    <StyledTableCell>{produto.id}</StyledTableCell>
                    <StyledTableCell>{produto.nome}</StyledTableCell>
                    <StyledTableCell>R$: {produto.preco.toFixed(2).replace('.', ',')}</StyledTableCell>

                </StyledTableRow>
            )
        })
    }

    return (
        <div className="tabelaProdutos">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Preço</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getLinhas()}

                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}