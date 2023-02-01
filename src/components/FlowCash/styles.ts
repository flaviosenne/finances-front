import styled, { css } from "styled-components";
import { Edit } from '@styled-icons/boxicons-solid/Edit'
import { Trash } from '@styled-icons/boxicons-regular/Trash'

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    
    p{
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
        margin: 0 auto;
    }
    @media(max-width: 700px){
        p{
            width: 120px;
        }
    }
    
`

export const Table = styled.table`
    width:50%;
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

const iconCss = css`
    width: 20px;
    transition: padding .5s;
    &:hover{
        padding: 1px;
    }

`

export const EditIcon = styled(Edit)`
    ${iconCss}
    &:hover{
        color: yellow;
    }
`

export const TrashIcon = styled(Trash)`
    ${iconCss}
    &:hover{
        color: red;
    }
`