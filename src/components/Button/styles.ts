import styled from 'styled-components'
import { ArrowRightCircleFill } from '@styled-icons/bootstrap/ArrowRightCircleFill'

interface Props {
    color?: string
}

export const Container = styled.div<Props>`
    display: flex;
    width: 64px;
    height: 40px;
    border-radius: 8%;
    padding: 8px;
    background: ${props => props.color ? props.color : 'var(--primary)'};
    cursor: pointer;
    transition: padding .4s;
    &:hover {
        padding: 6px;
    }
`

export const ArrowRightcon = styled(ArrowRightCircleFill)`
    width: 70px;
`