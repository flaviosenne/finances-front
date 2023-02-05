import React from 'react'
import {
    ButtonContainer, Container, Form,
    DateContainer, FieldContainer, TypeIcon, BankIcon, CategoryIcon, ValueIcon,
    DescriptionIcon,
    StatusIcon,
    StatusContainer,
    Content,
} from './styles'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import SideBar from '../../components/SideBar'

export default function NewRelease() {
    return (

        <Container>
            <SideBar />
            <Content>
                <Modal closeButton={false} height={400} width={400} title='Cadastrar lançamento'>
                    <Form>

                        <DateContainer>

                            <FieldContainer>
                                <input type='date' />
                            </FieldContainer>

                            <FieldContainer>
                                <input type='date' />
                            </FieldContainer>

                        </DateContainer>

                        <FieldContainer>
                            <TypeIcon />
                            <select>
                                <option >Despesa</option>
                                <option>Receita</option>
                            </select>
                        </FieldContainer>

                        <FieldContainer>
                            <StatusIcon />
                            <StatusContainer>
                                <input type='checkbox' />
                                <span>Pendente</span>
                                <input type='checkbox' />
                                <span>Pago</span>
                            </StatusContainer>
                        </FieldContainer>

                        <FieldContainer>
                            <CategoryIcon />
                            <input placeholder='categoria' type='search' />
                        </FieldContainer>

                        <FieldContainer>
                            <BankIcon />
                            <input placeholder='banco' type='search' />
                        </FieldContainer>

                        <FieldContainer>
                            <ValueIcon />
                            <input placeholder='valor' type='number' />
                        </FieldContainer>

                        <FieldContainer>
                            <DescriptionIcon />
                            <input placeholder='descrição' type='text' />
                        </FieldContainer>

                        <ButtonContainer>
                            <Link to='/fluxo-de-caixa'>
                                <Button title='Cadastrar' color='var(--confirm)' height={30} width={100} />

                            </Link>
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