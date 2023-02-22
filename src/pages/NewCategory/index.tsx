import React, { useEffect, useState } from 'react'
import {
    ButtonContainer, Container, Form,
    FieldContainer,
    DescriptionIcon,
    StatusIcon,
    StatusContainer,
    Content,
} from './styles'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { Link, useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { useNavigate } from 'react-router-dom'

export default function NewCategory() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [status, setStatus] = useState<string>()
    const [description, setDescription] = useState<string>()

    function handleSubmitCategory(e: any) {
        e.preventDefault()
        navigate('/categoria')
    }

    useEffect(() => {
        if (id) {
            setStatus('ACTIVE')
            setDescription('Descrição do gasto')
        }
    }, [])

    return (

        <Container>
            <SideBar />
            <Content>
                <Modal closeButton={false} height={400} width={400} title={`${id ? 'Atualizar' : 'Cadastrar'} categoria`}>
                    <Form>

                        <FieldContainer>
                            <StatusIcon />
                            <StatusContainer>
                                <input
                                    checked={status == 'ATIVO'}
                                    name='status'
                                    type='checkbox'
                                    value='pendente'
                                    onChange={e => setStatus(e.target.value)} />
                                <span>Ativo</span>

                                <input
                                    checked={status == 'INATIVO'}
                                    name='status'
                                    type='checkbox'
                                    value='pago'
                                    onChange={e => setStatus(e.target.value)} />
                                <span>Inativo</span>

                            </StatusContainer>
                        </FieldContainer>

                        <FieldContainer>
                            <DescriptionIcon />
                            <input
                                placeholder='descrição'
                                type='text'
                                value={description}
                                onChange={e => setDescription(e.target.value)} />
                        </FieldContainer>

                        <ButtonContainer>
                            <Button
                                onClick={(e) => handleSubmitCategory(e)}
                                title={`${id ? 'Atualizar' : 'Cadastrar'}`}
                                color='var(--confirm)' height={30} width={100}
                            />

                            <Link to='/categoria'>
                                <Button title='Cancelar' color='var(--cancel)' height={30} width={100} />
                            </Link>
                        </ButtonContainer>
                    </Form>
                </Modal>
            </Content>
        </Container>
    )
}