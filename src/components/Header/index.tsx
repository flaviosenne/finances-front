import React, { useState } from 'react'
import LogoImage from '../../assets/images/logo.png'
import { Container, Links, Logo, Login, MenuBurger, MenuBurgerOpen } from './styles'

import Button from '../Button'

export default function Header() {
    const [menuBurger, setMenuBurger] = useState(true)
    return (
        <Container>
            <Logo >
                <img src={LogoImage} />
            </Logo>
            
            <Links menu={menuBurger}>
                <ul>
                    <li>Explore</li>
                    <li>Funções</li>
                    <li>Sobre</li>
                </ul>
            </Links>
            
            <Login>
                <span>Vamos Começar!</span>
                <div>
                    <Button color='trasnparent' title='' isHome={true} />
                </div>
            </Login>
            {!menuBurger ? 
                <MenuBurgerOpen onClick={e => setMenuBurger(!menuBurger)} /> :
                <MenuBurger onClick={e => setMenuBurger(!menuBurger)} />
            }
        </Container>
    )
}