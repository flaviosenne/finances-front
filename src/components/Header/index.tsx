import React, { useState } from 'react'
import { Container, Links, Logo, Login, MenuBurger, MenuBurgerOpen, ArrowRightcon } from './styles'

import Button from '../Button'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menuBurger, setMenuBurger] = useState(true)
    return (
        <Container>
            <Logo />

            <Links menu={menuBurger}>
                <ul>
                    <li>Explore</li>
                    <li>Funções</li>
                    <li>Sobre</li>
                </ul>
            </Links>

            <Login>
                <Link to='/login'>
                    <span>Vamos Começar!
                        <Button width={90} height={50} color='transparent' title='' icon={<ArrowRightcon />} />
                    </span>
                </Link>
            </Login>
            {!menuBurger ?
                <MenuBurgerOpen onClick={() => setMenuBurger(!menuBurger)} /> :
                <MenuBurger onClick={() => setMenuBurger(!menuBurger)} />
            }
        </Container>
    )
}