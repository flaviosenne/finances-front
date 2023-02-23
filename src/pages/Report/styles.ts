import styled from "styled-components";
import { FilterRight } from '@styled-icons/bootstrap/FilterRight'


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

    table{
        display: block;
        width:100%;
        max-height: 400px;
        margin: 8px auto;
        border-spacing: 1;
        border-style: dotted;
        border-width: 1px;
        overflow-y: scroll;
        font-size: 14pt;
        
        @media(max-width: 700px){
            width: 100%;
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
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    margin: 8px;
    background: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    > *{
        &:last-child{
            text-align: end;
        }
    }
    @media(max-width: 700px){
        flex-direction: column;
        > *{
            &:last-child{
                text-align: start;
            }
        }
    }
`

export const Summary = styled.div`
    width: 100%;
    p{
        padding: 4px;
        margin: 4px 0;
        font-weight: 600;
    }
    span{
        font-weight: 300;
    }
`