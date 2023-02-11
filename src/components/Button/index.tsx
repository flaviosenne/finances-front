import React, { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    title: string
    width?: number
    height: number
    color?: string
    icon?: any
    children?: React.ReactNode
}

const Button: React.FC<Props> = ({ width, height, color, icon, title, ...rest }: Props) => {
    return (
        <Container width={width} height={height} color={color} >
            <span>
                {icon}
            </span>
            <p>{title}</p>
        </Container>
    )
}

export default Button