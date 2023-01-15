import React, { useState } from 'react'
import LogoImage from '../../assets/images/logo.png'
import { Container, Links, Logo, Login, MenuBurger, MenuBurgerOpen, ArrowRightcon } from './styles'

import Button from '../Button'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menuBurger, setMenuBurger] = useState(true)
    return (
        <Container>
            <Logo/>

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
                    <a href='/login'>
                        <Button width={90} height={50} color='trasnparent' title='' icon={<ArrowRightcon />} />
                    </a>
                </div>
            </Login>
            {!menuBurger ?
                <MenuBurgerOpen onClick={e => setMenuBurger(!menuBurger)} /> :
                <MenuBurger onClick={e => setMenuBurger(!menuBurger)} />
            }
        </Container>
    )
}