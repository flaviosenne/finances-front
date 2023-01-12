import React from 'react'
import { Container, Slogan, SloganTitle, SloganBanner, Features, FeaturesBanner, FeaturesTitle } from './styles'

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
            
            <Features>
                <FeaturesBanner />
                <FeaturesTitle>
                    <h1>Fluxo de caixa</h1>
                    <p>Com a função de fluxo de caixa,
                        é possível armazenar os lançamentos dentro da plataforma
                        onde-o disponibilizará de forma agil e facil acesso,
                        com isso é possível se organizar com mais facilidade
                        através dos filtros personalizevies</p>
                </FeaturesTitle>
            </Features>
        </Container>
    )
}
