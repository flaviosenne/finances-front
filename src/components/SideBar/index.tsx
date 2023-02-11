import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useParams, useRoutes } from 'react-router-dom';
import {
    SideBarContainer,
    Logo, SideMenu,
    Avatar, CashIcon,
    ReportIcon,
    ConfigIcon, InfoIcon,
    BankIcon,
    CategoryIcon
} from "./styles";

interface LinksType {
    link: string
    title: string
    selected: boolean
    icon: JSX.Element
}

const SideBar = () => {
    const { pathname } = useLocation()

    const links: LinksType[] = [
        { link: '/fluxo-de-caixa', title: 'Fluxo de Caixa', selected: false, icon: <CashIcon /> },
        { link: '/relatorio', title: 'Relatório', selected: false, icon: <ReportIcon /> },
        { link: '/banco', title: 'Bancos', selected: false, icon: <BankIcon /> },
        { link: '/categoria', title: 'Categorias', selected: false, icon: <CategoryIcon /> },
        { link: '/configuracao', title: 'Configurações', selected: false, icon: <ConfigIcon /> },
        { link: '/sobre', title: 'Saiba mais', selected: false, icon: <InfoIcon /> }
    ]

    const linkWithSelected = links.map((link) =>
        pathname.includes(link.link) ? { ...link, selected: true } : link)

    return (
        <SideBarContainer>

            <Link to='/' style={{ width: '100%' }}>
                <Logo />
            </Link>

            <Avatar />

            {linkWithSelected.map(link => (
                <Link key={link.title} to={link.link} style={{ width: '90%' }}>
                    <SideMenu key={link.title} selected={link.selected}>
                        {link.icon}
                        <p>{link.title}</p>
                    </SideMenu>
                </Link>)
            )}

        </SideBarContainer>
    )
}

export default SideBar