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
export const ButtonFilter = styled.button`
     color: white;
    padding: 12px;
    width: 100px;
    border: none;
    background: var(--primary);
    border-style: solid;
    border-radius: 10px;
    margin: 0 8px;
    transition: opacity .4 border-color .4;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    
    &:hover{
        opacity: .8;
        border-color: aqua;
    }

`

export const FilterIcon = styled(FilterRight)`
    width: 20px;
    transition: padding .5s;
    &:hover{
        padding: 1px;
    }
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

export const Table = styled.table`
    max-width:100%;
    display: block;
    max-height: 400px;
    margin: 8px auto;
    border-spacing: 1;
    border-style: solid;
    border-width: 1px;
    overflow-y: scroll;
    
    @media(max-width: 700px){
        display: block;
        overflow-x: scroll;
        width: 100%;
        padding: 4px;
        font-size: 8pt;
        align-items: center;
    }

    
    th{
        padding: 12px;
        font-weight: 700;
        background-color: gainsboro;
    }
    
    td{
        width: 200px;
        justify-content: center;
        text-align: center;
        padding: 8px;       
    }


`
