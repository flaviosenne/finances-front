import React from 'react'
import FlowCash from '../../components/FlowCash';
import Modal from '../../components/Modal';
import {
    Container, SideBar,
    Avatar, CashFlowMenu, CashIcon,
    ReportMenu, ReportIcon, ConfigMenu,
    ConfigIcon, InfoIcon,

    Content
} from "./styles";

export default function Home() {
    return (
        <Container>
            <SideBar>
                <Avatar />

                <CashFlowMenu>
                    <CashIcon />
                    <p>Fluxo de caixa</p>
                </CashFlowMenu>

                <ReportMenu>
                    <ReportIcon />
                    <p>Relatório</p>
                </ReportMenu>

                <ConfigMenu>
                    <ConfigIcon />
                    <p>Configurações</p>
                </ConfigMenu>

                <ConfigMenu>
                    <InfoIcon />
                    <p>Saiba mais</p>
                </ConfigMenu>

            </SideBar>

            <Content>
                <FlowCash />
            </Content>
        </Container>
    )
}