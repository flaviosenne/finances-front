import styled, { css } from 'styled-components'
import { Edit } from '@styled-icons/boxicons-solid/Edit'
import { Trash } from '@styled-icons/boxicons-regular/Trash'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { FilterRight } from '@styled-icons/bootstrap/FilterRight'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
` 


export const Content = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
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

interface PropsModal {
    display: boolean
}

export const ContentModal = styled.div<PropsModal>`
    width: 100%;
    height: 100%;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    position: absolute;
    background: rgba(0,0,0,0.7);
    align-items: center;
    align-self: center;
    z-index: 1;
    
`


export const ButtonModal = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    z-index: 1;
    button{
        margin: 10px;
        width: 120px;
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



export const ButtonAdd = styled.button`
    ${buttonCss}
`

export const ButtonFilter = styled.button`
    ${buttonCss}
`

const iconCss = css`
    width: 20px;
    transition: padding .5s;
    &:hover{
        padding: 1px;
    }

`

export const AddIcon = styled(Plus)`
    ${iconCss}
`


export const FilterIcon = styled(FilterRight)`
    ${iconCss}
`


export const EditIcon = styled(Edit)`
    cursor: pointer;
    ${iconCss}
    &:hover{
        color: yellow;
    }
    `

export const TrashIcon = styled(Trash)`
cursor: pointer;
    ${iconCss}
    &:hover{
        color: red;
    }
`
