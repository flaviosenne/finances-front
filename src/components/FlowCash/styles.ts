import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    
`

export const Table = styled.table`
    width:80%;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 0 2px 8px var(--primary);
    border-spacing: 0;

    th{
        padding: 10px;
        font-weight: 700;
        background-color: gainsboro;
    }
    
    td{
        border-bottom: 1px solid;
        justify-content: center;
        text-align: center;
        padding: 10px;
    }

`