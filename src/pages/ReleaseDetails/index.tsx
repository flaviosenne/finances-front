import React from 'react'
import {
    ButtonContainer, Container, Form,
    DateContainer, FieldContainer, TypeIcon, BankIcon, CategoryIcon, ValueIcon,
    DescriptionIcon,
} from './styles'
import Home from '../../components/Home'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

export default function NewRelease() {
    return (
        <Home>

            <Container>
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
                            <input placeholder='tipo lançamento (Despesa, Receita)' type='text' />
                        </FieldContainer>

                        <FieldContainer>
                            <CategoryIcon />
                            <input placeholder='categoria' type='text' />
                        </FieldContainer>

                        <FieldContainer>
                            <BankIcon />
                            <input placeholder='banco' type='text' />
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
            </Container>
        </Home>
    )
}