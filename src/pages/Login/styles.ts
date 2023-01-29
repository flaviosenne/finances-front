import styled from 'styled-components'
import { Email } from '@styled-icons/entypo/Email'
import { LockPassword } from '@styled-icons/remix-line/LockPassword'
import { EyeFill } from '@styled-icons/bootstrap/EyeFill'
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill'
import { Google } from '@styled-icons/boxicons-logos/Google'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'

export const Container = styled.div`
    min-height: calc(100vh - 160px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    >div{
        padding: 20px;
        position: relative;
        margin: 40px auto;
    }
    
`

export const EmailContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 10px auto;

    input{
        border-bottom: 0.5px solid;
        width: 80%;
    }
`

export const EmailIcon = styled(Email)`
    width: 20px;
    margin: 5px 5px 0;
`

export const Password = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 10px auto;
    
    input{
        border-bottom: 0.5px solid;
        width: 80%;
    }
    `

export const PasswordIcon = styled(LockPassword)`
    width: 20px;
    margin: 5px 5px 0;

`

export const EyeOpenIcon = styled(EyeFill)`
    position: relative;
    width: 15px;
    right: 10px;
`

export const EyeCloseIcon = styled(EyeSlashFill)`
    position: relative;
    right: 10px;
    width: 15px;
`

export const GoogleIcon = styled(Google)`
    position: absolute;
    left: 20px;
    width: 20px;
`

export const FacebookIcon = styled(Facebook)`
    position: absolute;
    left: 20px;
    width: 20px;

`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 160px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`


export const Register = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    p{
        margin: 0;
        padding: 2px;
        text-align: center;
        font-size: 8pt;
        cursor: pointer;    
    }
    a{
        font-size: 11pt;
        color: blueviolet;
        &:hover{
            text-decoration: underline;
        }
    }
`

export const ForgotPassword = styled.div`
    width: 100%;
    p{
        margin-top: 10px;
        text-align: center;
        font-size: 8pt;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
`