import styled from "styled-components";

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
    width: 100%;
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


export const FieldContainerName = styled.div`
    position: relative;
    width: 91.3%;
    display: flex;
    margin: 0 auto;

    div{
        margin: 0 4px;
    }

    
    @media(max-width: 700px){
        flex-direction: column;
        width: 100%;
        div{
            margin: 4px auto;
        }
    }

`

export const UploadContainer = styled.div`
    padding: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    cursor: pointer;

    .file{
        display: none;
    }

    span{
        align-self: center;
        margin-left: 10px;
        text-align: center;
        opacity: 0.7;
    }
`


export const ThemeContainer = styled.div`
    display: flex;
    width: 100%;
    
`

export const ThemeField = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;

    input{
        width: 20px;
        margin-right: 6px;
    }

`