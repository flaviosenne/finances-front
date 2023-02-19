import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import SideBar from '../../components/SideBar'
import Table from '../../components/Table'
import { formatValueDate } from '../../utils/format-value-date'
import {
    AddIcon, ButtonModal, ButtonAdd, ButtonContainer, ButtonFilter,
    Container, ContentModal, Content, EditIcon, FilterIcon, TrashIcon
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
    
    function removeItem(id: string){
        setOpenModal(false)
        alert('item exlcuido  '+ id)
        setIdToExclude('')
    }


    return (
        <Container>
            <SideBar />

            <ContentModal display={openModal}>

                <Modal closeButton={true} title='Excluir item' height={150} width={400}>
                    <>
                        <span>Você tem certeza que deseja excluir esse item?</span>
                        <ButtonModal>
                            <Button title='Sim' height={30} onClick={() => removeItem(idToExclude)} />
                            <Button title='Não' height={30} onClick={() => setOpenModal(false)} />
                        </ButtonModal >
                    </>
                </Modal>
            </ContentModal>

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