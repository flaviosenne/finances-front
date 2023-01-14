import styled from 'styled-components'

interface Props {
    color?: string
    width?: number
    height: number
}

export const Container = styled.div<Props>`
    display: flex;
    width: ${props => props.width? props.width+'px': '100%'};
    height: ${props => props.height+'px'};
    background: ${props => props.color ? props.color : 'var(--primary)'};
    cursor: pointer;
    justify-content: center;
    justify-items: center;
    margin: 4px auto;
    padding: 5px;

    &:hover{
        opacity: 0.9;
    }


    
`
