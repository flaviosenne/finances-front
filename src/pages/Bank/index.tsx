import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Table from '../../components/Table'
import { formatValueDate } from '../../utils/format-value-date'
import { AddIcon, ButtonAdd, ButtonContainer, ButtonFilter, Container, Content, EditIcon, FilterIcon, TrashIcon } from './styles'

export default function Bank() {

    const mockResult = [
        { date: '2022-01-12', status: 'Ativo', description: 'Santander', id: 'aaa' },
        { date: '2022-07-14', status: 'Inativo', description: 'Nubank', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Caixa', id: 'aaa' },
    ]

    return (
        <Container>
            <SideBar />
            <Content>

                <ButtonContainer>
                    <Link to='/banco/novo'>
                        <ButtonAdd>
                            <AddIcon />
                            <span>Novo</span>
                        </ButtonAdd>
                    </Link>

                    <ButtonFilter>
                        <FilterIcon />
                        <span>Filtrar</span>
                    </ButtonFilter>

                </ButtonContainer>
                <Table>
                    <>
                        <thead>
                            <th>Data Criação</th>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </thead>
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

                                        <TrashIcon /></td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                </Table>
            </Content>
        </Container>
    )
} 