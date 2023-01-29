import React, { useState } from 'react'
import Button from '../../components/Button';
import Modal from "../../components/Modal";
import {
    Container, EmailContainer, EmailIcon,
    Password, PasswordIcon, EyeOpenIcon, EyeCloseIcon,
    GoogleIcon, FacebookIcon, ButtonContainer, Register, ForgotPassword
} from "./styles";

export default function Login() {
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
            <Modal closeButton={false} height={480} width={350} title='Login'>
                <>
                    <EmailContainer>
                        <EmailIcon />
                        <input placeholder='example@email.com' type='text' />
                    </EmailContainer>

                    <Password>
                        <PasswordIcon />
                        <input placeholder='*******' type={passwordType} />
                        {eyeOpen ? <EyeOpenIcon onClick={closeEye} /> :
                            <EyeCloseIcon onClick={openEye} />}
                    </Password>

                    <ButtonContainer>
                        <a href='/home'><Button height={30} title='Entrar' color='var(--primary)' /></a>
                        <a href='/'><Button height={30} title='Cancelar' color='gray' /></a>
                    </ButtonContainer>

                    <Register>
                        <p>Não tem uma conta? <a href='/cadastrar'>Registre-se</a></p>
                    </Register>

                    <ButtonContainer>
                        <Button height={30} title='Google' color='var(--google)' icon={<GoogleIcon />} />
                        <Button height={30} title='Facebook' color='var(--facebook)' icon={<FacebookIcon />} />
                    </ButtonContainer>

                    <ForgotPassword>
                        <p>Esqueci minha senha?</p>
                    </ForgotPassword>

                </>
            </Modal>
        </Container>
    )
}