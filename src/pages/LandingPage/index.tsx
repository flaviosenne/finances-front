import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
    Container, Slogan, SloganTitle, SloganBanner, Feature,
    FeatureTitle, FlowCashBanner, ReportBanner, CustomizeThemeBanner
} from './styles'

export default function LandingPage() {
    return (
        <>
            <Header />
            <Container>

                <Link to='login'>
                    <Slogan>
                        <SloganTitle>
                            <h1>Gerencia sua finanças com um clique</h1>
                            <h2>Com despesa facil você consegue gerencias suas finanças de forma rápida e eficaz</h2>
                        </SloganTitle>
                        <SloganBanner />
                    </Slogan>
                </Link>

                <Link to='fluxo-de-caixa'>
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
                </Link>

                <Link to='relatorio'>
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
                </Link>

                <Feature>
                    <FeatureTitle>
                        <h1>Personalização</h1>
                        <p>Tenha uma plataforma onde é possível personalizar seu layout,
                            caso queira um tema mais escuro ou opte por mais claro é simples,
                            basta mudar com apenas um clique.
                        </p>
                    </FeatureTitle>
                    <CustomizeThemeBanner />
                </Feature>

            </Container>
            <Footer />
        </>

    )
}
