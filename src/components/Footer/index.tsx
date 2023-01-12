import React from 'react'
import { Container, LinkedinIcon, GitHubIcon, SupportIcon } from './styles'

export default function Footer() {
    return (
        <Container>
            <ul>
                <li><LinkedinIcon /> <span>lnkedin:</span> <a href='https://www.linkedin.com/in/joao-flavio-senne' target='_blank'>joao_flavio</a></li>
                <li><GitHubIcon /> <span>github</span>: <a href='https://github.com/flaviosenne' target='_blank'>flaviosenne</a></li>
                <li><SupportIcon /> <span>suporte</span>: facildespesa@gmail.com</li>
            </ul>
            <p>Desenvolvido por <b>João Flávio</b></p>
        </Container>
    )
}