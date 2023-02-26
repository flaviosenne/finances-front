import styled, { css } from 'styled-components'

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

const labelsCSS = css`
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    padding: 8px;
    margin: 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    input{
        display: flex;
        padding: 4px;
        align-items: center;
        width: 100%;
    }
`

export const EmailContainer = styled.div`
    ${labelsCSS}
    
`


export const Password = styled.div`
    ${labelsCSS}
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