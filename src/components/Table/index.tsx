import React from 'react'
import { Container } from './styles'

interface Props {
    children: JSX.Element
    header: string[]
}

const Table: React.FC<Props> = ({ children, header }: Props) => {
    return (
        <Container>
            <thead>
                {header.map(title => (
                    <th>{title}</th>
                ))}
            </thead>
            {children}
        </Container>
    )
}

export default Table