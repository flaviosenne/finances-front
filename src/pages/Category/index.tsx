import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Table from '../../components/Table'
import { formatValueDate } from '../../utils/format-value-date'
import { AddIcon, ButtonAdd, ButtonContainer, ButtonFilter, Container, Content, EditIcon, FilterIcon, TrashIcon } from './styles'

export default function Category() {


    const mockResult = [
        { date: '2022-01-12', status: 'Ativo', description: 'Comida', id: 'aaa' },
        { date: '2022-07-14', status: 'Inativo', description: 'Salario', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Bobeira', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Fatura', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Celular', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Casa', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Bem estar', id: 'aaa' },
        { date: '2022-02-12', status: 'Ativo', description: 'Estudos', id: 'aaa' },
    ]

    const headerTable = ['Data Criação', 'Status', 'Descrições', 'Ações']

    return (
        <Container>
            <SideBar />
            <Content>

                <ButtonContainer>
                    <Link to='/categoria/novo'>
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

                                    <TrashIcon /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Content>
        </Container>
    )
} 