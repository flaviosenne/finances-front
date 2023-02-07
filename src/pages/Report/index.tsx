import React from 'react'
import SideBar from '../../components/SideBar';
import { Container, Content, Title, SummaryContainer, Summary, Table } from "./styles";

export default function Report() {

    const mockResult = [
        { date: '2022-01-12', status: 'Pendente', description: 'um tipo de despesafe rrgnrehgu kenveri', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-07-14', status: 'Pago', description: 'um tipo de r3ceita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-02-12', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '1000.12', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-03-21', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
    ]
    return (
        <Container>
            <SideBar />
            <Content>

                <Title>  Relatório de Lançamentos Financeiro      </Title>
                <SummaryContainer>

                    <Summary>
                        <p>Periodo de Lançamento: <span>3 meses</span></p>
                        <p>Total de Receitas: <span>R$ 1426,00</span> </p>
                        <p>Total de Despesas: <span>R$ 1026,00</span> </p>
                        <p>Total: <span>R$ 400,00</span> </p>
                    </Summary>

                    <Summary>
                        <p>Data: <span>07/02/2023</span></p>
                        <p>Solicitante: <span>João Fávio</span> </p>
                        <p>Situação: <span>Positivo</span> </p>
                        <p>Porcentagem de gastos <span>71%</span> </p>
                    </Summary>

                </SummaryContainer>
                <Table>
                    <thead className='thead-dark'>
                        <th>TIPO</th>
                        <th>DATA</th>
                        <th>STATUS</th>
                        <th>DESCRIÇÃO</th>
                        <th>CATEGORIA</th>
                        <th>BANCO</th>
                        <th>VALOR</th>
                    </thead>
                    {mockResult.map(release => (
                        <tbody>
                            <td>{release.type}</td>
                            <td>{release.date}</td>
                            <td>{release.status}</td>
                            <td>{release.description}</td>
                            <td>{release.category}</td>
                            <td>{release.bank}</td>
                            <td>{release.value}</td>
                        </tbody>

                    ))}

                </Table>

            </Content>

        </Container>
    )
}