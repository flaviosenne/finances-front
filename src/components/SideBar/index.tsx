import React from 'react'
import {
    SideBarContainer,
    Logo, SideMenu,
    Avatar, CashIcon,
    ReportIcon,
    ConfigIcon, InfoIcon,

    Content,
    BankIcon,
    CategoryIcon
} from "./styles";

// interface Props {
//     children: JSX.Element
// }

const SideBar = () => {
    return (
        // <Container>
            <SideBarContainer>
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

            </SideBarContainer>

            // <Content>
            //     {children}
            // </Content>
        // </Container>
    )
}

export default SideBar