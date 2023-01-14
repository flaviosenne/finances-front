import styled from 'styled-components'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'

interface Props {
    isVisible: boolean
    width?: number
    height: number
}

export const Container = styled.div<Props>`
    max-width: 100%;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    width: ${props => props.width+'px'};
    height: ${props => props.height+'px'};
    background: white;
    position: absolute;
    margin: 0 auto;
    padding: 10px;
    flex-direction: column;
    box-shadow: 0 1px 4px black;
`

export const Close = styled(CloseOutline)`
    width: 15px;
    padding: 2px;
    position: absolute;
    right: 5px;
    top: 5px;
    transition: width .2s;
    cursor: pointer;
    
    &:hover {
        right: 4px;
        width: 16px;
    }
`

export const Title = styled.h1`
    width: 100%;
    font-size: 14pt;
    text-align: center;
    font-weight: 500;
    margin: 0 auto;
`

export const Border = styled.div`
    margin: 10px auto;
    width: 50%;
    border-width: 1.2px;
    border-style: solid;
    border-color: transparent;
    border-image: linear-gradient(to right, transparent, black 50%, transparent) 0 0 1 0;
`