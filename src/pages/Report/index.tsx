import React, { useState } from 'react'
import Chart from '../../components/Chart';
import Filter from '../../components/Filter';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import { FieldContainer } from '../../styles/form.styles';
import { CurrencyType, formatValueCurrencyTo } from '../../utils/format-value-currency';
import { formatValueDate } from '../../utils/format-value-date';
import {
    Container, Content, SummaryContainer, Summary,
    ButtonContainer
} from "./styles";

export default function Report() {


    const [dateStart, setDateStart] = useState<any>()
    const [dateEnd, setDateEnd] = useState<any>()
    const [type, setType] = useState<string>()
    const [status, setStatus] = useState<string>()
    const [category, setCategory] = useState<string>();
    const [bank, setBank] = useState<string>()


    const mockResult = [
        { date: '2022-01-12', status: 'Pendente', description: 'um tipo de despesafe rrgnrehgu kenveri mmmmmmmmmmmmmmmmde  ed ekcew kln ckjlr jclw ljwe cjwjwk', type: 'Expense', value: '100', category: 'categoria', bank: 'Santander' },
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

    const headerTable = ['TIPO', 'DATA', 'STATUS', 'DESCRIÇÃO', 'CATEGORIA', 'BANCO', 'VALOR']


    function handleFilter() {
        console.log(dateStart)
        console.log(dateEnd)
        console.log(type)
        console.log(status)
        console.log(category)
        console.log(bank)
    }

    return (
        <Container>
            <SideBar />

            <Content>

                <ButtonContainer>

                    <Filter title='Relatório' handleFilter={handleFilter}>

                        <>

                            <FieldContainer>
                                <span>de:</span>
                                <input
                                    placeholder='de'
                                    type='date'
                                    value={dateStart}
                                    onChange={(e) => setDateStart(e.target.value)}
                                />

                                <span>até:</span>
                                <input
                                    placeholder='até'
                                    type='date'
                                    value={dateEnd}
                                    onChange={(e) => setDateEnd(e.target.value)}
                                />
                            </FieldContainer>

                            <FieldContainer>

                                <input
                                    placeholder='categoria'
                                    type='text'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </FieldContainer>
                            <FieldContainer>

                                <input
                                    placeholder='banco'
                                    type='text'
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                />
                            </FieldContainer>
                            <FieldContainer>

                                <select name='type' onChange={e => setType(e.target.value)}>
                                    <option key='' selected disabled value=''>Tipo do lançamento</option>
                                    <option key='EXPENSE' value='EXPENSE'>Despesa</option>
                                    <option key='RECEP' value='RECEP'>Receita</option>
                                </select>
                            </FieldContainer>
                            <FieldContainer>
                                <select name='status' onChange={e => setStatus(e.target.value)}>
                                    <option key='' selected disabled value=''>Status do lançamento</option>
                                    <option key='PAID' value='PAID'>Pago</option>
                                    <option key='PENDING' value='PENDING'>Pendente</option>
                                </select>
                            </FieldContainer>


                        </>

                    </Filter>

                </ButtonContainer>

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
                <Table header={headerTable}>
                    <tbody>
                        {mockResult.map(release => (
                            <tr>

                                <td>{release.type == 'Recep' ? 'RECEITA' : 'DESPESA'}</td>
                                <td>{formatValueDate(release.date)}</td>
                                <td>{release.status}</td>
                                <td>{release.description}</td>
                                <td>{release.category}</td>
                                <td>{release.bank}</td>
                                <td>{formatValueCurrencyTo(release.value, CurrencyType.pt)}</td>
                            </tr>

                        ))}
                    </tbody>
                </Table>

            </Content>

        </Container>
    )
}