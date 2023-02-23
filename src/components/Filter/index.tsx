import React, { useState } from 'react'
import Button from '../Button';
import { Container, FilterIcon, Content, ButtonContainer, CheckboxContainer, CloseIcon } from "./styles";

interface Props {
    children: JSX.Element 
    title: string
}

const Filter: React.FC<Props> = ({children, title}:Props) =>{

    const [isVisible, setIsvisible] = useState(false)

    return (
        <>
            <Container onClick={()=> setIsvisible(!isVisible)}>
                <FilterIcon />
                <span>Filtrar</span>
            </Container>

            <Content isVisible={isVisible}>
                <CloseIcon onClick={()=> setIsvisible(!isVisible)}/>
                
                <h1>Filtro de {title}</h1>

                {children}

                <CheckboxContainer>
                    <input type='checkbox' />
                    <span>Lembrar filtro</span>
                </CheckboxContainer>
                
                <ButtonContainer>
                    <Button title='Filtrar' height={30} width={100} />
                    <Button title='Limpar' height={30} width={100} />
                </ButtonContainer>
            </Content>
        </>
    )
}

export default Filter