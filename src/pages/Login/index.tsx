import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from "../../components/Modal";
import {
    EmailIcon,
    PasswordIcon, EyeOpenIcon, EyeCloseIcon,
    GoogleIcon, FacebookIcon
} from '../../styles/icons.styles'
import {
    Container, EmailContainer, Password,
    ButtonContainer, Register, ForgotPassword
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
                        <Link to='/fluxo-de-caixa'><Button height={30} title='Entrar' color='var(--primary)' /></Link>
                        <Link to='/'><Button height={30} title='Cancelar' color='gray' /></Link>
                    </ButtonContainer>

                    <Register>
                        <p>Não tem uma conta? <Link to='/cadastrar'>Registre-se</Link></p>
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