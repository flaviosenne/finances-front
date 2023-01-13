import React from 'react'
import { Container, Slogan, SloganTitle, SloganBanner, Feature, FlowCashBanner, FeatureTitle, ReportBanner } from './styles'

export default function Home() {
    return (
        <Container>

            <Slogan>
                <SloganTitle>
                    <h1>Gerencia sua finanças com um clique</h1>
                    <h2>Com despesa facil você consegue gerencias suas finanças de forma rápida e eficaz</h2>
                </SloganTitle>
                <SloganBanner />
            </Slogan>

            <Feature>
                <FeatureTitle>
                    <h1>Fluxo de caixa</h1>
                    <p>Com a função de fluxo de caixa,
                        é possível armazenar os lançamentos dentro da plataforma
                        onde-o disponibilizará de forma agil e facil acesso,
                        com isso é possível se organizar com mais facilidade
                        através dos filtros personalizevies</p>
                </FeatureTitle>
                <FlowCashBanner />
            </Feature>

            <Feature>
                <FeatureTitle>
                    <h1>Relatório</h1>
                    <p>Agora você tem a opção de gerar relatórios de forma prática e rápida,
                        basta filtrar pelo q deseja e logo será enviado ao seu email o relatório em
                        PDF e uma planilha em excel com suas entradas e saidas,
                        além de disponibilizar gráficos com indicativos de gastos por categoria
                    </p>
                </FeatureTitle>
                <ReportBanner />
            </Feature>
        </Container>
    )
}
