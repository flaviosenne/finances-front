import React from 'react'
import SideBar from '../../components/SideBar'
import { Container, Content } from './styles'

export default function About() {
    return (
        <Container>
            <SideBar />

            <Content>

                <h1>Por que do projeto?</h1>
                <p>&nbsp;&nbsp;Despesa facil surgiu de uma nessecidade pessoal em poder gerenciar os gastos próprios.
                    A plataforma visa em atender a demanda em organizar as finanças
                    através de uma ferramenta chamada fluxo de caixa.
                </p>
                <h1>O que é fluxo de caixa?</h1>
                <p>
                    &nbsp;&nbsp;Fluxo de caixa é uma ferramenta estratégica que auxilía a tomada de decisão em como
                    usar (investir/gastar) seu recurso (dinheiro), tendo em vista o histórico  e as projeções (lançamentos futuros)
                    para tomar uma determinada ação. Um exemplo prático é se devo ou não comprar algum item? Tenho mais dinheiro a receber
                    ou estou tendo mais dividas?
                </p>
                <h1>Como o fluxo de caixa pode me ajudar?</h1>
                <p>
                    &nbsp;&nbsp;Com os dados já incluso na ferramenta de gestão de finanças, (papel, planilha de excel...) deixa mais claro
                    a visibilidade de uma possível divida a ser paga em um periodo determinado, que talvez sem ela é bem provavel
                    que não seria levada em consideração, atrapalhando assim toda administração saudável do seu dinheiro, no entanto
                    arquivar tudo que ganha e gasta, lhe-oferece uma percepção mais
                    arrojada em como prosseguir em determinados cenários( se vai dar para comprar ou não).

                </p>
            </Content>

        </Container>
    )
}