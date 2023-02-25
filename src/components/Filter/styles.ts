import styled from 'styled-components'
import { FilterRight } from '@styled-icons/bootstrap/FilterRight'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const FilterIcon = styled(FilterRight)`
    width: 20px;
    transition: padding .5s;
    &:hover{
        padding: 1px;
    }
`
export const Container = styled.button`
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

interface Props {
    isVisible: boolean
}


export const CloseIcon = styled(CloseOutline)`
    width: 20px;
    padding: 2px;
    position: absolute;
    right: 5px;
    top: 5px;
    transition: width .2s;
    cursor: pointer;

    &:hover {
        width: 20.5px;
    }
`

export const Content = styled.div<Props>`
    position: fixed;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    min-height: 500px;
    width: 340px;
    background: white;
    right: 0px;
    bottom: 24px;
    z-index: 1;
    box-shadow: 1px 1px 10px;
    h1{
        font-size: 12pt;
        margin: 10px auto;
    }
`

export const Fields = styled.div`
    max-height: 400px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 1em;
    }
`

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 90%;
    position: absolute;
    bottom: 64px;
    font-weight: 300;
    input{
        margin: 2px;
    }
`

export const ButtonContainer = styled.div`
    width: 90%;
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button{
        margin: 0 4px;
    }
`
