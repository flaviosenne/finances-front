import styled from "styled-components";


export const Container = styled.table`
    width:90%;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 0 2px 8px var(--primary);
    border-spacing: 0;


    @media(max-width: 700px){
        display: block;
        overflow-x: scroll;
        width: 80%;
        position: absolute;
        left: 50px;
        padding: 4px;
        font-size: 8pt;
        margin: 0;
        align-items: center;
        top: 120px;

        th{
            padding: 4px;
        }
        td{
            padding: 4px;
        }
    }

    tr{
        &:hover{
            opacity: 0.6;
        }
    }

    th{
        padding: 12px;
        font-weight: 700;
        background-color: gainsboro;
    }
    
    td{
        border-bottom: 1px solid;
        justify-content: center;
        text-align: center;
        padding: 12px;       
    }

`

