import React from 'react'
import { Container } from './styles'

interface Props {
    children: JSX.Element
}

const Table: React.FC<Props> = ({ children }: Props) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Table