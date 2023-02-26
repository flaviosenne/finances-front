import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { UserIcon } from '../../styles/icons.styles'
import { EmailIcon, EyeCloseIcon, EyeOpenIcon, PasswordIcon } from '../../styles/icons.styles'
import {
    Container, Form, NameContainer, EmailContanier, Password,
    ButtonContainer
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
            <Modal closeButton={false} height={400} width={400} title='Registrar'>
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
                        <Link to='/'>
                            <Button title='Cadastrar' color='var(--confirm)' height={30} width={150} />

                        </Link>
                        <Link to='/login'>
                            <Button title='Cancelar' color='var(--cancel)' height={30} width={150} />

                        </Link>
                    </ButtonContainer>
                </Form>
            </Modal>
        </Container>
    )
}