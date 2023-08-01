import React, { useState } from 'react'
import Chart from '../../components/Chart';
import Filter from '../../components/Filter';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import { FieldContainer } from '../../styles/form.styles';
import { CurrencyType, formatValueCurrencyTo } from '../../utils/format-value-currency';
import { formatValueDate } from '../../utils/format-value-date';
import {
    Container, Content, SummaryContainer,
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
        { date: '2022-01-12', status: 'Pendente', description: 'um tipo de despesafe rrgnrehgu kenveri mmmmmmmmmmmmmmmmde  ed ekcew kln ckjlr jclw ljwe cjwjwk', type: 'Expense', prestation: '2/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-07-14', status: 'Pago', description: 'um tipo de r3ceita', type: 'Recep', prestation: '1/1', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-02-12', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/3', value: '1000.12', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '4/12', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '2/3', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '1/2', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '3/5', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '1/2', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '8/10', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '1/5', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '1/1', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '1/2', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', prestation: '1/2', value: '90.00', category: 'categoria', bank: 'Santander' },
        { date: '2022-03-21', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', prestation: '1/2', value: '100', category: 'categoria', bank: 'Santander' },
    ]

    const headerTable = ['TIPO', 'DATA', 'STATUS', 'DESCRIÇÃO', 'CATEGORIA', 'BANCO', 'PRESTAÇÂO', 'VALOR']


    function handleFilter() {
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

                    <table className='summary'>
                        <tr>
                            <td>Data: 01/05/2023 - 31/07/2023</td>
                            <td>Projetado</td>
                            <td>Realizado</td>
                        </tr>
                        <tr>
                            <td>Receitas</td>
                            <td>R$ 1426,00</td>
                            <td>R$ 1400,00</td>
                        </tr>
                        <tr>
                            <td>Despesas</td>
                            <td>R$ 1026,00</td>
                            <td>R$ 1200,00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>R$ 300,00</td>
                            <td>R$ 200,00</td>
                        </tr>
                        <tr>
                            <td>Porcentagem de gastos</td>
                            <td>71%</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td>Diferença projetado X realizado</td>
                            <td colSpan={2}>R$ 200,00</td>
                        </tr>

                    </table>

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
                                <td>{release.prestation}</td>
                                <td>{formatValueCurrencyTo(release.value, CurrencyType.pt)}</td>
                            </tr>

                        ))}
                    </tbody>
                </Table>

            </Content>

        </Container>
    )
}