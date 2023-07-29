import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { CurrencyType, formatValueCurrencyTo } from "../../utils/format-value-currency";
import { formatValueDate } from "../../utils/format-value-date";

import {
    AddIcon,
    EditIcon, TrashIcon
} from '../../styles/icons.styles'
import {
    Container, ButtonContainer, ButtonAdd, Content, ResumeContainer
} from "./styles";

import SideBar from '../../components/SideBar'
import Table from "../../components/Table";
import ExcludeModal from "../../components/ExcludeModal";
import Filter from "../../components/Filter";
import { AutoCompleteContainer, FieldContainer } from "../../styles/form.styles";
import { banksMock, categoriesMock, releasesMock } from "../../utils/db";

export default function FlowCash() {


    const [openModal, setOpenModal] = useState(false)
    const [idToExclude, setIdToExclude] = useState('')

    const [inputCategorySearch, setInputCategorySearch] = useState<string>(null);
    const [inputBankSearch, setInputBankSearch] = useState<string>(null)
    const [filterCategorySearch, setFilterCategorySearch] = useState([])
    const [filterBankSearch, setFilterBankSearch] = useState([])

    const [dateStart, setDateStart] = useState<any>(null)
    const [dateEnd, setDateEnd] = useState<any>(null)
    const [type, setType] = useState<string>(null)
    const [status, setStatus] = useState<string>(null)


    const headerTable = ['Data', 'Status', 'Descrição', 'Valor', 'Prestação', 'Ações']

    function handleExcludeItem(id: string) {
        setOpenModal(true)
        setIdToExclude(id)
    }


    function handleFilterCategory(event: any) {
        setInputCategorySearch(event.target.value)

        const newFilter = categoriesMock.filter(value => {
            return value.description.toLowerCase().includes(event.target.value)
        })

        setFilterCategorySearch(newFilter)
    }

    function fillInputCategory(description: string) {
        setInputCategorySearch(description)
        setFilterCategorySearch([])
    }

    function handleFilterBank(event: any) {
        setInputBankSearch(event.target.value)

        const newFilter = banksMock.filter(value => {
            return value.description.toLowerCase().includes(event.target.value)
        })

        setFilterBankSearch(newFilter)
    }

    function fillInputBank(description: string) {
        setInputBankSearch(description)
        setFilterBankSearch([])
    }


    function handleFilter() {

    }

    const totalRecep = releasesMock.filter(e => e.type == 'Recep')
        .reduce((accumulator, currentValue) => accumulator += Number(currentValue.value), 0)

    const totalExpense = releasesMock.filter(e => e.type == 'Expense')
        .reduce((accumulator, currentValue) => accumulator += Number(currentValue.value), 0)

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
                                        type='search'
                                        value={inputCategorySearch}
                                        onChange={handleFilterCategory}
                                    />
                                </FieldContainer>

                                {filterCategorySearch.length !== 0 && inputCategorySearch && (
                                    <AutoCompleteContainer>

                                        {filterCategorySearch.map(result => (
                                            <p
                                                onClick={_ => fillInputCategory(result.description)}
                                                key={result.description}>
                                                {result.description}
                                            </p>
                                        ))}
                                    </AutoCompleteContainer>
                                )}

                                <FieldContainer>

                                    <input
                                        placeholder='banco'
                                        type='search'
                                        value={inputBankSearch}
                                        onChange={handleFilterBank}
                                    />
                                </FieldContainer>

                                {filterBankSearch.length !== 0 && inputBankSearch && (

                                    <AutoCompleteContainer>

                                        {filterBankSearch.map(result => (
                                            <p
                                                onClick={_ => fillInputBank(result.description)}
                                                key={result.description}>
                                                {result.description}
                                            </p>
                                        ))}
                                    </AutoCompleteContainer>
                                )}

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

                    <ResumeContainer>
                        <p>Total de Receitas: <span style={{ color: 'var(--confirm)' }}>{formatValueCurrencyTo(totalRecep.toString(), CurrencyType.pt)}</span></p>
                        <p>Total de Despesas: <span style={{ color: 'red' }}>{formatValueCurrencyTo(totalExpense.toString(), CurrencyType.pt)}</span></p>
                        <p>Total: <span style={{ color: (totalRecep > totalExpense) ? 'var(--confirm)' : 'red' }}>
                            {formatValueCurrencyTo((totalRecep - totalExpense).toString(), CurrencyType.pt)}
                        </span></p>

                    </ResumeContainer>

                    <Table header={headerTable}>
                        <tbody>
                            {releasesMock.map(result => (
                                <tr>
                                    <td>{formatValueDate(result.date)}</td>
                                    <td>{result.status}</td>
                                    <td><p>{result.description}</p></td>
                                    <td>
                                        <span style={{ color: `${result.type == 'Expense' ? 'red' : 'var(--confirm)'}` }}>
                                            {formatValueCurrencyTo(result.value, CurrencyType.pt)}
                                        </span>
                                    </td>
                                    <td><p>{result.provision}</p></td>
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