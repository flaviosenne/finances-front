import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
    `

export const Content = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin: 8px auto;

    table:not(.summary){
        display: block;
        width:100%;
        max-height: 400px;
        margin: 8px auto;
        border-spacing: 1;
        border-style: dotted;
        border-width: 1px;
        overflow-y: scroll;
        font-size: 14pt;
        
    }
    
    @media(max-width: 700px){
        table:not(.summary){
            font-size: 10pt;
            position: relative;
            max-width: 100%;
            margin-left: -50px;
            margin-top: -70px;
            
        } 
    }
`



export const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    align-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
        
`


export const Title = styled.div`
    width: 100%;
    border-radius: 8px;
    margin: 8px;
    padding: 12px;
    background: var(--primary);
    text-align: center;
    font-weight: 600;
`

export const SummaryContainer = styled.div`
    position: relative;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    margin: 8px auto;
    background: rgba(245, 245, 245, .9);
    display: flex;
    justify-content: flex-start;
    align-items: start;
    
    table.summary{
        overflow: hidden;
        border: none;
        border-spacing: 0;
        display: block;

        td{
            width: fit-content;
            text-align: left;
            border-bottom: solid 1px;
            padding: 4px 10px;
        }
        
    }
    @media(max-width: 700px){
        min-height: fit-content;
        padding: 0;
        table{
            max-width: 95%;
            left:56px;
        }

    }
`
