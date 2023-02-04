import React from 'react'
import FlowCash from '../FlowCash';
import Modal from '../../components/Modal';
import {
    Container, SideBar,
    Logo,SideMenu,
    Avatar, CashIcon,
    ReportIcon, 
    ConfigIcon, InfoIcon,

    Content
} from "./styles";

export default function Home() {
    return (
        <Container>
            <SideBar>
                <Logo/>
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
                    <ConfigIcon />
                    <p>Configurações</p>
                </SideMenu>

                <SideMenu>
                    <InfoIcon />
                    <p>Saiba mais</p>
                </SideMenu>

            </SideBar>

            <Content>
                <FlowCash />
            </Content>
        </Container>
    )
}