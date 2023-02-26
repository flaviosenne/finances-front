import styled, { css } from 'styled-components'


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
