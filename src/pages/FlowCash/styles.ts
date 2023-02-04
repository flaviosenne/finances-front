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

export const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    
    
    @media(max-width: 700px){
        width: 100%;
        position: absolute;
        top: 40px;
        right: 20px;
    }
    
`
const buttonCss = css`
    button{
        color: white;
        padding: 12px;
        width: 100px;
        border: none;
        background: var(--primary);
        border-style: solid;
        border-radius: 10px;
        margin: 0 8px;
        transition: opacity .4 border-color .4;

        &:hover{
            opacity: .8;
            border-color: green;
        }
    }

`

export const ButtonAdd = styled.div`
    ${buttonCss}
`

export const AddIcon = styled.div``

export const ButtonFilter = styled.div`
    ${buttonCss}
`

export const FilterIcon = styled.div``



export const Table = styled.table`
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