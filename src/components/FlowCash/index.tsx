import React from "react";
import { CurrencyType, formatValueCurrencyTo } from "../../utils/format-value-currency";
import { formatValueDate } from "../../utils/format-value-date";
import { Container, Table, EditIcon, TrashIcon } from "./styles";

export default function FlowCash() {
    const mockResult = [
        { date: '2022-01-12', status: 'Pendente', description: 'um tipo de despesafe rrgnrehgu kenveri', type: 'Expense', value: '100' },
        { date: '2022-07-14', status: 'Pago', description: 'um tipo de r3ceita', type: 'Recep', value: '100' },
        { date: '2022-02-12', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '1000.12' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00' },
        { date: '2022-03-21', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100' },
    ]

    return (
        <Container>
            <Table>
                <tr>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </tr>
                {mockResult.map(result => (
                    <>
                        <tr>
                            <td>{formatValueDate(result.date)}</td>
                            <td>{result.status}</td>
                            <td><p>{result.description}</p></td>
                            <td>
                                <span style={{ color: `${result.type == 'Expense' ? 'red' : 'var(--confirm)'}` }}>
                                    {formatValueCurrencyTo(result.value, CurrencyType.pt)}
                                </span>
                            </td>
                            <td><EditIcon /> <TrashIcon /></td>
                        </tr>
                    </>
                ))}
            </Table>
        </Container>
    )
}