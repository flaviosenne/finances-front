import React from "react";
import { Link } from 'react-router-dom'
import { CurrencyType, formatValueCurrencyTo } from "../../utils/format-value-currency";
import { formatValueDate } from "../../utils/format-value-date";
import {
    Container, ButtonContainer, ButtonAdd, AddIcon,
    ButtonFilter, FilterIcon,
    EditIcon, TrashIcon, Content
} from "./styles";

import SideBar from '../../components/SideBar'
import Table from "../../components/Table";

export default function FlowCash() {
    const mockResult = [
        { date: '2022-01-12', status: 'Pendente', description: 'um tipo de despesafe rrgnrehgu kenveri', type: 'Expense', value: '100', id: 'aaa' },
        { date: '2022-07-14', status: 'Pago', description: 'um tipo de r3ceita', type: 'Recep', value: '100', id: 'aaa' },
        { date: '2022-02-12', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '1000.12', id: 'aaa' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', id: 'aaa' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', id: 'aaa' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', id: 'aaa' },
        { date: '2022-03-21', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', id: 'aaa' },
    ]

    return (
        <>
            <Container>
                <SideBar />
                <Content>
                    <ButtonContainer>
                        <Link to='/fluxo-de-caixa/novo'>
                            <ButtonAdd>
                                <AddIcon />
                                <span>Novo</span>
                            </ButtonAdd>
                        </Link>

                        <ButtonFilter>
                            <FilterIcon />
                            <span>Filtrar</span>
                        </ButtonFilter>

                    </ButtonContainer>
                    <Table>
                        <>
                            <thead>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </thead>
                            <tbody>
                                {mockResult.map(result => (
                                    <tr>
                                        <td>{formatValueDate(result.date)}</td>
                                        <td>{result.status}</td>
                                        <td><p>{result.description}</p></td>
                                        <td>
                                            <span style={{ color: `${result.type == 'Expense' ? 'red' : 'var(--confirm)'}` }}>
                                                {formatValueCurrencyTo(result.value, CurrencyType.pt)}
                                            </span>
                                        </td>
                                        <td>
                                            <Link to={`detalhes/${result.id}`}>
                                                <EditIcon />
                                            </Link>

                                            <TrashIcon /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    </Table>
                </Content>
            </Container>
        </>
    )
}