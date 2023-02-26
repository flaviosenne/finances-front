import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { CurrencyType, formatValueCurrencyTo } from "../../utils/format-value-currency";
import { formatValueDate } from "../../utils/format-value-date";
import {
    Container, ButtonContainer, ButtonAdd, AddIcon,
    EditIcon, TrashIcon, Content
} from "./styles";

import SideBar from '../../components/SideBar'
import Table from "../../components/Table";
import ExcludeModal from "../../components/ExcludeModal";
import Filter from "../../components/Filter";
import { FieldContainer } from "../../styles/form.styles";

export default function FlowCash() {

    const [openModal, setOpenModal] = useState(false)
    const [idToExclude, setIdToExclude] = useState('')

    const [dateStart, setDateStart] = useState<any>(null)
    const [dateEnd, setDateEnd] = useState<any>(null)
    const [type, setType] = useState<string>(null)
    const [status, setStatus] = useState<string>(null)
    const [category, setCategory] = useState<string>(null);
    const [bank, setBank] = useState<string>(null)


    const mockResult = [
        { date: '2022-01-12', status: 'Pendente', description: 'um tipo de despesafe rrgnrehgu kenveri', type: 'Expense', value: '100', id: 'u64h,wp´c,wp ' },
        { date: '2022-07-14', status: 'Pago', description: 'um tipo de r3ceita', type: 'Recep', value: '100', id: 'aaa' },
        { date: '2022-02-12', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '1000.12', id: 'erbsfbsf' },
        { date: '2022-04-12', status: 'Pago', description: 'um tipo de receita', type: 'Recep', value: '100', id: '6543' },
        { date: '2022-10-02', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', id: '43' },
        { date: '2022-10-09', status: 'Pendente', description: 'um tipo de receits', type: 'Recep', value: '90.00', id: 'bb' },
        { date: '2022-03-21', status: 'Pendente', description: 'um tipo de despesa', type: 'Expense', value: '100', id: '12' },
    ]

    const headerTable = ['Data', 'Status', 'Descrição', 'Valor', 'Ações']

    function handleExcludeItem(id: string) {
        setOpenModal(true)
        setIdToExclude(id)
    }

    function handleFilter() {
        console.log(dateStart)
        console.log(dateEnd)
        console.log(type)
        console.log(status)
        console.log(category)
        console.log(bank)
    }


    return (
        <>
            <Container>
                <SideBar />

                <ExcludeModal
                    path={`/release/${idToExclude}`}
                    display={openModal}
                    displayState={setOpenModal}
                />

                <Content>
                    <ButtonContainer>
                        <Link to='/fluxo-de-caixa/novo'>
                            <ButtonAdd>
                                <AddIcon />
                                <span>Novo</span>
                            </ButtonAdd>
                        </Link>

                        <Filter title='Lançamentos' handleFilter={handleFilter}>

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
                                        <option key='' selected disabled value=''>Tipo de lançamento</option>
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
                    <Table header={headerTable}>
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

                                        <TrashIcon onClick={() => handleExcludeItem(result.id)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Content>
            </Container>
        </>
    )
}