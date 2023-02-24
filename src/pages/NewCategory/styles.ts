import styled, { css } from 'styled-components'
import { TextDescription } from '@styled-icons/fluentui-system-regular/TextDescription'
import { Status } from '@styled-icons/fluentui-system-filled/Status'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    div{
        position: relative;
        height: auto;
    }
    @media(max-width: 700px){
        max-width: 90%;
    }
`

export const Form = styled.form`
    padding: 8px;
    display: flex;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    margin: 8px auto;
    flex-wrap: wrap;
    justify-content: center;

    button{
        margin: 4px 8px;
    }
`

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px;
    span{
        font-size: 8pt;
        margin: 0 4px;
    }
    input{
        cursor: pointer;
    }
`

const iconCss = css`
    width: 16px;
    margin-right: 4px;
`



export const DescriptionIcon = styled(TextDescription)`
    ${iconCss}  
`

export const StatusIcon = styled(Status)`
    ${iconCss}  
`
