import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { JsxElement } from 'typescript'
import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    width?: number
    height: number
    color?: string
    icon?: any
}

const Button: React.FC<Props> = ({ width, height, color, icon, title, ...rest }: Props) => {
    return (
        <Container width={width} height={height} color={color} {...rest} >
            <span>
                {icon}
            </span>
            <p>{title}</p>
        </Container>
    )
}

export default Button