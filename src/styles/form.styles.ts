import styled from 'styled-components'

export const FieldContainer = styled.div`
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    padding: 8px;
    margin: 4px auto;
    display: flex;
    align-items: center;
    width: 90%;


    input{
        border: none;
        width: 100%;
        padding: 4px;
    }

    select{ 
        width: 100%;
        font-size: 8pt;
        option{
            font-size: 10pt;
        }
    }

`

export const AutoCompleteContainer = styled.div`
    width: 90%;
    margin: -4px auto 0;
    font-size: 10pt;
    max-height: 50px;
    background: whitesmoke;
    overflow: hidden;
    border-radius: 4px;
    padding: 4px;
    overflow-y: auto;
    text-align: start;
    &::-webkit-scrollbar{
        width: 4px;
    }
    p{
        cursor: pointer;
        margin: 4px 0;
        &:hover{
            opacity: 0.7;
        }
    }
`
