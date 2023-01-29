import React from "react";
import { Container, Table } from "./styles";

export default function FlowCash() {
    const mockResult = [
        { date: '2022', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100' },
        { date: '2022', status: 'Pago', description: 'um tipo de r3ceita', type: 'Recep', value: '100' },
        { date: '2022', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100' },
        { date: '2022', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100' },
        { date: '2022', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100' },
        { date: '2022', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90' },
        { date: '2022', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100' },
    ]

    return (
        <Container>
            <Table>
                <tr>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
                {mockResult.map(result => (
                    <tr>
                        <td>{result.date}</td>
                        <td>{result.status}</td>
                        <td>{result.description}</td>
                        <td>
                            <span style={{ color: `${result.type == 'Expense' ? 'rgb(155, 32, 11)' : 'var(--confirm)'}` }}>
                                R$     {result.value}
                            </span>
                        </td>
                    </tr>
                ))}
            </Table>
        </Container>
    )
}