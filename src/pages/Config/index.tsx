import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import SideBar from '../../components/SideBar';
import { FieldContainer } from '../../styles/form.styles';
import { EmailIcon, UploadIcon, UserIcon } from '../../styles/icons.styles';
import { ButtonContainer, Container, Content, FieldContainerName, Form, UploadContainer } from "./styles";

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
                                />
                            </FieldContainer>

                            <FieldContainer>
                                <UserIcon />
                                <input
                                    placeholder='ultimo nome'
                                    type='text'
                                />
                            </FieldContainer>

                        </FieldContainerName>

                        <FieldContainer>
                            <EmailIcon />
                            <input
                                placeholder='email'
                                type='email'
                            />
                        </FieldContainer>

                        <FieldContainer>
                            {/* <ValueIcon /> */}
                            <input
                                placeholder='valor'
                                type='number'
                            // onChange={e => setValue(Number(e.target.value))} 
                            />
                        </FieldContainer>

                        <FieldContainer>
                            <UploadContainer>
                                <UploadIcon />
                                <input
                                    placeholder='adicionar foto'
                                    type='file'
                                />
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
        </Container>
    )
}