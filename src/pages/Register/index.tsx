import React from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { Container, Form, NameContainer, EmailContanier, Password,
UserIcon, EmailIcon, PasswordIcon, ButtonContainer } from './styles'

export default function Register(){
    return(
        <Container>
            <Modal closeButton={false} height={400} width={400} title='Registrar'>
                <Form>
                    
                    <NameContainer>
                        <UserIcon/>
                        <input placeholder='nome' type='text'/>
                    </NameContainer>
                    
                    <EmailContanier>
                        <EmailIcon/>
                        <input placeholder='exemplo@email.com' type='text'/>
                    </EmailContanier>
                    
                    <Password>
                        <PasswordIcon/>
                        <input placeholder='******' type='password'/>
                    </Password>
                    
                    <Password>
                        <PasswordIcon/>
                        <input placeholder='repetir senha' type='password'/>
                    </Password>

                    <ButtonContainer>
                        <Button title='Cadastrar' color='green' height={30} width={100}/>
                        <Button title='Cancelar' color='red' height={30} width={100}/>
                    </ButtonContainer>
                </Form>
            </Modal>
        </Container>
    )
}