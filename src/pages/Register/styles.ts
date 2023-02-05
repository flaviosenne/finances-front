import styled, { css } from 'styled-components'
import { Email } from '@styled-icons/entypo/Email'
import { LockPassword } from '@styled-icons/remix-line/LockPassword'
import { User} from '@styled-icons/boxicons-regular/User'
import { EyeFill } from '@styled-icons/bootstrap/EyeFill'
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill'

export const Container = styled.div`
    min-height: calc(100vh - 90px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    >div{
        padding: 20px;
    }

`

export const Form = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
`

const lablesCSS = css`
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    padding: 8px;
    margin: 4px 0;
    display: flex;
    align-items: center;

    
    input{
        align-items: center;
        width: 100%;
        padding: 4px;
    }

`

export const NameContainer = styled.div`
    ${lablesCSS}
`

export const EmailContanier = styled.div`
    ${lablesCSS}
`

export const Password = styled.div`
    ${lablesCSS}
`

const iconCSS = css`
    width: 20px;
`


export const UserIcon = styled(User)`
    ${iconCSS}
`

export const EmailIcon = styled(Email)`
    ${iconCSS}
`

export const PasswordIcon = styled(LockPassword)`
    ${iconCSS}
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    >div{
        border: 2px solid;
    }
`


export const EyeOpenIcon = styled(EyeFill)`
    position: relative;
    width: 15px;
    right: 5px;
`

export const EyeCloseIcon = styled(EyeSlashFill)`
    position: relative;
    right: 5px;
    width: 15px;
`
