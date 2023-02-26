import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExcludeModal from '../../components/ExcludeModal'
import Filter from '../../components/Filter'
import SideBar from '../../components/SideBar'
import Table from '../../components/Table'
import { FieldContainer } from '../../styles/form.styles'
import { formatValueDate } from '../../utils/format-value-date'

import { AddIcon, EditIcon, TrashIcon } from '../../styles/icons.styles'
import {
    ButtonAdd, ButtonContainer,
    Container, Content
} from './styles'

export default function Bank() {

    const [openModal, setOpenModal] = useState(false)
    const [idToExclude, setIdToExclude] = useState('')


    const [dateStart, setDateStart] = useState<any>()
    const [dateEnd, setDateEnd] = useState<any>()
    const [active, setActive] = useState<string>()
    const [description, setDescription] = useState<string>()

    const mockResult = [
        { date: '2022-01-12', active: true, description: 'Santander', id: 'aaa' },
        { date: '2022-07-14', active: false, description: 'Nubank', id: 'bbb' },
        { date: '2022-02-12', active: true, description: 'Caixa', id: 'ccc' },
    ]

    const headerTable = ['Data Criação', 'Status', 'Descrições', 'Ações']

    function handleExcludeItem(id: string) {
        setOpenModal(true)
        setIdToExclude(id)
    }


    function handleFilter() {
        console.log(dateStart)
        console.log(dateEnd)
        console.log(active)
        console.log(description)
    }


    return (
        <Container>
            <SideBar />

            <ExcludeModal path={`/bank/${idToExclude}`} display={openModal} displayState={setOpenModal} />

            <Content>
                <ButtonContainer>
                    <Link to='/banco/novo'>
                        <ButtonAdd>
                            <AddIcon />
                            <span>Novo</span>
                        </ButtonAdd>
                    </Link>

                    <Filter title='Banco' handleFilter={handleFilter}>
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

                                <select name='active' onChange={e => setActive(e.target.value)}>
                                    <option selected disabled key={null} value={null}>Status do banco</option>
                                    <option key={1} value={1}>Ativo</option>
                                    <option key={0} value={0}>Inativo</option>
                                </select>
                            </FieldContainer>

                            <FieldContainer>
                                <input
                                    placeholder='descrição'
                                    type='text'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </FieldContainer>
                        </>

                    </Filter>

                </ButtonContainer>
                <Table header={headerTable}>
                    <tbody>
                        {mockResult.map(result => (
                            <tr>
                                <td>{formatValueDate(result.date)}</td>
                                <td>{result.active ? 'Ativo' : 'Inativo'}</td>
                                <td><p>{result.description}</p></td>
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
    )
} 