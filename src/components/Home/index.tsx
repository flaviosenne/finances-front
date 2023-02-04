import React from 'react'
import {
    Container, SideBar,
    Logo, SideMenu,
    Avatar, CashIcon,
    ReportIcon,
    ConfigIcon, InfoIcon,

    Content,
    BankIcon,
    CategoryIcon
} from "./styles";

interface Props {
    children: JSX.Element
}

const Home: React.FC<Props> = ({ children }: Props) => {
    return (
        <Container>
            <SideBar>
                <Logo />
                <Avatar />

                <SideMenu>
                    <CashIcon />
                    <p>Fluxo de caixa</p>
                </SideMenu>

                <SideMenu>
                    <ReportIcon />
                    <p>Relatório</p>
                </SideMenu>

                <SideMenu>
                    <BankIcon />
                    <p>Banco</p>
                </SideMenu>

                <SideMenu>
                    <CategoryIcon />
                    <p>Categoria</p>
                </SideMenu>

                <SideMenu>
                    <ConfigIcon />
                    <p>Configurações</p>
                </SideMenu>

                <SideMenu>
                    <InfoIcon />
                    <p>Saiba mais</p>
                </SideMenu>

            </SideBar>

            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Home