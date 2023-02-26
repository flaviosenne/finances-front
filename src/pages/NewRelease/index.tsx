import React, { useEffect, useState } from 'react'
import {
    TypeIcon, BankIcon, CategoryIcon, ValueIcon,
    DescriptionIcon,
    StatusIcon
} from '../../styles/icons.styles'
import {
    ButtonContainer, Container, Form,
    StatusContainer,
    Content,
} from './styles'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { Link, useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { useNavigate } from 'react-router-dom'
import { FieldContainer } from '../../styles/form.styles'

export default function NewRelease() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [date, setDate] = useState<any>()
    const [type, setType] = useState<string>()
    const [status, setStatus] = useState<string>()
    const [category, setCategory] = useState<string>();
    const [bank, setBank] = useState<string>()
    const [value, setValue] = useState<number>()
    const [description, setDescription] = useState<string>()

    function handleSubmitRelease(e: any) {
        e.preventDefault()
        navigate('/fluxo-de-caixa')
    }

    useEffect(() => {
        if (id) {
            setDate(new Date().toISOString().split('T')[0])
            setType('RECEP')
            setStatus('PENDING')
            setCategory('Comida')
            setBank(null)
            setValue(123.43)
            setDescription('Descrição do gasto')
        }
    }, [])

    return (

        <Container>
            <SideBar />
            <Content>
                <Modal closeButton={false} height={400} width={400} title={`${id ? 'Atualizar' : 'Cadastrar'} lançamento`}>
                    <Form>

                        <FieldContainer>
                            <input
                                autoFocus
                                required
                                type='date'
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </FieldContainer>

                        <FieldContainer>
                            <TypeIcon />
                            <select name='type' onChange={e => setType(e.target.value)} defaultValue='EXPENSE'>
                                <option key='EXPENSE' selected={type == 'EXPENSE'} value='EXPENSE'>Despesa</option>
                                <option key='RECEP' selected={type == 'RECEP'} value='RECEP'>Receita</option>
                            </select>
                        </FieldContainer>

                        <FieldContainer>
                            <StatusIcon />
                            <StatusContainer>
                                <input
                                    checked={status == 'PENDING'}
                                    name='status'
                                    type='checkbox'
                                    value='pendente'
                                    onChange={e => setStatus(e.target.value)} />
                                <span>Pendente</span>

                                <input
                                    checked={status == 'PAID'}
                                    name='status'
                                    type='checkbox'
                                    value='pago'
                                    onChange={e => setStatus(e.target.value)} />
                                <span>Pago</span>

                            </StatusContainer>
                        </FieldContainer>

                        <FieldContainer>
                            <CategoryIcon />
                            <input placeholder='categoria' type='search' value={category} />
                        </FieldContainer>

                        <FieldContainer>
                            <BankIcon />
                            <input placeholder='banco' type='search' value={bank} />
                        </FieldContainer>

                        <FieldContainer>
                            <ValueIcon />
                            <input
                                placeholder='valor'
                                type='number'
                                value={value}
                                onChange={e => setValue(Number(e.target.value))} />
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
                                onClick={(e) => handleSubmitRelease(e)}
                                title={`${id ? 'Atualizar' : 'Cadastrar'}`}
                                color='var(--confirm)' height={30} width={100}
                            />

                            <Link to='/fluxo-de-caixa'>
                                <Button title='Cancelar' color='var(--cancel)' height={30} width={100} />
                            </Link>
                        </ButtonContainer>
                    </Form>
                </Modal>
            </Content>
        </Container>
    )
}