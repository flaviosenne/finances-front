import styled from 'styled-components'

export const FieldContainer = styled.div`
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    padding: 8px;
    margin: 4px;
    display: flex;
    align-items: center;


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
