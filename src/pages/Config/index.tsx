import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import SideBar from '../../components/SideBar';
import { FieldContainer } from '../../styles/form.styles';
import { EmailIcon, ThemeIcon, UploadIcon, UserIcon } from '../../styles/icons.styles';
import { ButtonContainer, Container, Content, FieldContainerName, Form, ThemeContainer, ThemeField, UploadContainer } from "./styles";

export default function Config() {
    return (
        <Container>

            <SideBar />

            <Content>

                <Modal closeButton={false} height={400} width={800} title='Preferências da conta'>
                    <Form>

                        <FieldContainerName>

                            <FieldContainer>
                                <UserIcon />
                                <input
                                    placeholder='primeiro nome'
                                    type='text'
                                    value='joao flavio'
                                />
                            </FieldContainer>

                            <FieldContainer>
                                <UserIcon />
                                <input
                                    placeholder='ultimo nome'
                                    type='text'
                                    value='senne'
                                />
                            </FieldContainer>

                        </FieldContainerName>

                        <FieldContainer>
                            <EmailIcon />
                            <input
                                placeholder='email'
                                type='email'
                                value='flaviosenne123@gmail.com'
                            />
                        </FieldContainer>

                        <FieldContainer>
                            <ThemeIcon />
                            <ThemeContainer>
                                <ThemeField>
                                    <input
                                        name='theme'
                                        value='dark'
                                        type='radio'
                                        // onChange={e => setValue(Number(e.target.value))} 
                                        />
                                    <span>Tema escuro</span>
                                </ThemeField>
                                <ThemeField>
                                    <input
                                        name='theme'
                                        value='light'
                                        type='radio'
                                    // onChange={e => setValue(Number(e.target.value))} 
                                    />
                                    <span>Tema claro</span>
                                </ThemeField>
                            </ThemeContainer>

                    </FieldContainer>

                    <FieldContainer>
                        <UploadContainer>
                            <UploadIcon />
                            <input className='file'
                                placeholder='adicionar foto'
                                type='file'
                            />
                            <span>Adicione uma foto</span>
                        </UploadContainer>
                    </FieldContainer>

                    <ButtonContainer>
                        <Button
                            // onClick={(e) => handleSubmitRelease(e)}
                            title='Atualizar'
                            color='var(--confirm)' height={30} width={100}
                        />

                        <Link to='/fluxo-de-caixa'>
                            <Button title='Cancelar' color='var(--cancel)' height={30} width={100} />
                        </Link>
                    </ButtonContainer>
                </Form>
            </Modal>

        </Content>
        </Container >
    )
}