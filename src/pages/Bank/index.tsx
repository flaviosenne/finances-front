import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExcludeModal from '../../components/ExcludeModal'
import Filter from '../../components/Filter'
import SideBar from '../../components/SideBar'
import Table from '../../components/Table'
import { FieldContainer } from '../../styles/form.styles'
import { formatValueDate } from '../../utils/format-value-date'
import {
    AddIcon, ButtonAdd, ButtonContainer,
    Container, Content, EditIcon, TrashIcon
} from './styles'

export default function Bank() {

    const [openModal, setOpenModal] = useState(false)
    const [idToExclude, setIdToExclude] = useState('')
    const mockResult = [
        { date: '2022-01-12', status: 'Ativo', description: 'Santander', id: 'aaa' },
        { date: '2022-07-14', status: 'Inativo', description: 'Nubank', id: 'bbb' },
        { date: '2022-02-12', status: 'Ativo', description: 'Caixa', id: 'ccc' },
    ]

    const headerTable = ['Data Criação', 'Status', 'Descrições', 'Ações']

    function handleExcludeItem(id: string) {
        setOpenModal(true)
        setIdToExclude(id)
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
                    <Filter title='Banco'>
                        <>
                            <FieldContainer>
                                <input
                                    placeholder='descrição'
                                    type='text' />

                            </FieldContainer>

                            <FieldContainer>

                                <input
                                    placeholder='descrição'
                                    type='text' />
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