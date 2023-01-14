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
    width: 10px;
`

export const EyeCloseIcon = styled(EyeSlashFill)`
    width: 10px;

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


export const ForgotPassword = styled.div`
    width: 100%;
    p{
        text-align: center;
        font-size: 8pt;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
`