import { createBrowserHistory } from '@remix-run/router';
import React from 'react'
import { useState } from "react";
import { Container, Close, Title, Border } from "./styles";

interface Props {
    width: number
    height: number
    title: string
    children: JSX.Element
    closeButton: boolean
}

const Modal: React.FC<Props> = (props: Props) => {
    const [isVisible, setIsVisible] = useState(true)

    const returnHome = () => {
        const history = createBrowserHistory()
        setIsVisible(false)
        history.createHref({ pathname: '/' })
        window.location.reload()
    }

    return (
        <Container isVisible={isVisible} width={props.width} height={props.height}>
            {props.closeButton ? <Close onClick={returnHome} /> : ''}
            <Title>
                {props.title}
            </Title>
            <Border />
            {props.children}
        </Container>
    )
}
export default Modal