import React, { useState } from 'react'
import Button from '../../components/Button';
import Modal from "../../components/Modal";
import {
    Container, EmailContainer, EmailIcon,
    Password, PasswordIcon, EyeOpenIcon, EyeCloseIcon,
    GoogleIcon, FacebookIcon, ButtonContainer, ForgotPassword
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
            <Modal closeButton={true} isVisible={true} height={400} width={300} title='Login'>
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
                        <Button height={30} title='Entrar' color='var(--primary)' />
                        <Button height={30} title='Google' color='rgb(181, 37, 36)' icon={<GoogleIcon />} />
                        <Button height={30} title='Facebook' color='rgb(0, 120, 246)' icon={<FacebookIcon />} />
                    </ButtonContainer>

                    <ForgotPassword>
                        <p>Esqueci minha senha?</p>
                    </ForgotPassword>
                </>
            </Modal>
        </Container>
    )
}