import React, { useState } from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import {
    Container, Form, NameContainer, EmailContanier, Password,
    UserIcon, EmailIcon, PasswordIcon, ButtonContainer, EyeOpenIcon, EyeCloseIcon
} from './styles'

export default function Register() {
    const [passwordType, setPasswordType] = useState('password')
    const [eyeOpen, setEyeOpen] = useState(false)

    const openEye = () => {
        setPasswordType('text')
        setEyeOpen(true)
    }

    const closeEye = () => {
        setPasswordType('password')
        setEyeOpen(false)
    }

    return (
        <Container>
            <Modal closeButton={false} height={350} width={400} title='Registrar'>
                <Form>

                    <NameContainer>
                        <UserIcon />
                        <input placeholder='primeiro nome' type='text' />
                    </NameContainer>

                    <NameContainer>
                        <UserIcon />
                        <input placeholder='sobrenome' type='text' />
                    </NameContainer>

                    <EmailContanier>
                        <EmailIcon />
                        <input placeholder='exemplo@email.com' type='text' />
                    </EmailContanier>

                    <Password>
                        <PasswordIcon />
                        <input placeholder='******' type={passwordType} />
                        {eyeOpen ? <EyeOpenIcon onClick={closeEye} /> :
                            <EyeCloseIcon onClick={openEye} />}
                    </Password>

                    <Password>
                        <PasswordIcon />
                        <input placeholder='repetir senha' type='password' />
                    </Password>

                    <ButtonContainer>
                        <Button title='Cadastrar' color='var(--confirm)' height={30} width={100} />
                        <Button title='Cancelar' color='var(--cancel)' height={30} width={100} />
                    </ButtonContainer>
                </Form>
            </Modal>
        </Container>
    )
}