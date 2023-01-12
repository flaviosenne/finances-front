import React from 'react'
import { Container, ArrowRightcon } from './styles'

interface Props {
    title: string
    isHome?: boolean
    color: string
}

const Button: React.FunctionComponent<Props> = (props: Props) =>{
    return (
        <Container color={props.color}>
            {props.isHome && <ArrowRightcon />}
            <span>{props.title}</span>
        </Container>
    )
}

export default Button