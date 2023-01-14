import React from 'react'
import { Container } from './styles'

interface Props {
    title: string
    width?: number
    height: number
    color?: string
    icon?: any
}

const Button: React.FC<Props> = (props: Props) => {
    return (
        <Container width={props.width} height={props.height} color={props.color}>
            <span>
                {props.icon}
            </span>
            <p>{props.title}</p>
        </Container>
    )
}

export default Button