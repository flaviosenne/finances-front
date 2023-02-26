import React, { ButtonHTMLAttributes, useState } from 'react'
import Button from '../Button';
import { Container, FilterIcon, Content, ButtonContainer, CheckboxContainer, CloseIcon, Fields } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element
    title: string
    handleFilter: () => void
}

const Filter: React.FC<Props> = ({ children, title, handleFilter }: Props) => {

    const [isVisible, setIsvisible] = useState(false)

    return (
        <>
            <Container onClick={() => setIsvisible(!isVisible)}>
                <FilterIcon />
                <span>Filtrar</span>
            </Container>

            <Content isVisible={isVisible}>
                <CloseIcon onClick={() => setIsvisible(!isVisible)} />

                <h1>Filtro de {title}</h1>

                <Fields>
                    {children}
                </Fields>

                <CheckboxContainer>
                    <input type='checkbox' />
                    <span>Lembrar filtro</span>
                </CheckboxContainer>

                <ButtonContainer>
                    <Button title='Filtrar' height={30} width={100} onClick={handleFilter} />
                    <Button title='Limpar' height={30} width={100} />
                </ButtonContainer>
            </Content>
        </>
    )
}

export default Filter