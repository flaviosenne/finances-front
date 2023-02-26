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

export default function Category() {

    const [openModal, setOpenModal] = useState(false)
    const [idToExclude, setIdToExclude] = useState('')

    const [dateStart, setDateStart] = useState<any>()
    const [dateEnd, setDateEnd] = useState<any>()
    const [active, setActive] = useState<string>()
    const [description, setDescription] = useState<string>()

    const mockResult = [
        { date: '2022-01-12', acyive: true, description: 'Comida', id: 'aaa' },
        { date: '2022-07-14', acyive: false, description: 'Salario', id: 'aaa' },
        { date: '2022-02-12', acyive: true, description: 'Bobeira', id: 'aaa' },
        { date: '2022-02-12', acyive: false, description: 'Fatura', id: 'aaa' },
        { date: '2022-02-12', acyive: true, description: 'Celular', id: 'aaa' },
        { date: '2022-02-12', acyive: true, description: 'Casa', id: 'aaa' },
        { date: '2022-02-12', acyive: false, description: 'Bem estar', id: 'aaa' },
        { date: '2022-02-12', acyive: true, description: 'Estudos', id: 'aaa' },
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

            <ExcludeModal path={`/category/${idToExclude}`} display={openModal} displayState={setOpenModal} />

            <Content>

                <ButtonContainer>
                    <Link to='/categoria/novo'>
                        <ButtonAdd>
                            <AddIcon />
                            <span>Novo</span>
                        </ButtonAdd>
                    </Link>

                    <Filter title='Categoria' handleFilter={handleFilter}>

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
                                    <option selected disabled key={null} value={null}>Status da categoria</option>
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
                                <td>{result.acyive ? 'Ativo' : 'Inativo'}</td>
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