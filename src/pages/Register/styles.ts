import styled, { css } from 'styled-components'

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


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    >div{
        border: 2px solid;
    }
`


