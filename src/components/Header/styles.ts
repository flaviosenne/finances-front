import styled from 'styled-components'
import { Menu } from '@styled-icons/material-rounded/Menu'
import { MenuOpen } from '@styled-icons/material/MenuOpen'

export const Container = styled.div`
    min-width: 100vw;
    height: 72px;
    margin-bottom: 10px;
    display: flex;
    font-size: .8rem;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
    border-bottom: 2pt solid var(--primary);
    
    @media(max-width: 540px){
        flex-direction: column;
        margin: 0 0 64px 0;
        border: none;
    }
`


export const Logo = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    max-width: 25%;
    margin-top: -10px;
    img {
        cursor: pointer;
        width:100px;
        @media(max-width: 540px){
            width:128px;
            height: 80px;
            position: absolute;
            top: 0;
        }
    }
`

interface PropsLink {
    menu: boolean
}

export const Links = styled.div<PropsLink>`
    ul {
        position: relative;
        width: 90%;
        display: flex;
        flex-direction: row;
        
        @media(max-width: 540px){
            display: ${props => props.menu ? 'none': 'flex'};
            position: absolute;
            width: 180px;
            height: 200px;
            border-bottom-left-radius: 10%;
            right: 0;
            background: rgba(34, 156, 126, 0.7);
            flex-direction: column;
            justify-content: end;
            justify-items: center;
        }
        li{
            margin: 2pt 4pt;
            padding: 16pt;
            cursor: pointer;
            border-width: 1.2px;
            border-style: solid;
            border-color: transparent;
            
            &:hover{
                border-image: linear-gradient(to right, transparent, var(--primary) 50%, transparent) 0 0 1 0;
            }
        }
    }
`


export const Login = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    justify-items: center;
    cursor: pointer;

    @media(max-width: 540px){
        display: none;
    }

    > span{
        padding: 8pt 4pt;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        margin: 10px -10px 0 0;
    }
    div {
        margin: 6px 0 0 0;
    }
    
    
`

export const MenuBurger = styled(Menu)`
    display: none;
    position: absolute;
    justify-content: end;
    margin: 4pt 0;
    width:48px;
    right: 10px;
    ul {
        display: none;
    }

    @media(max-width: 540px){
        display: block;
        right: 32px;
        cursor: pointer;

        &:focus{
            ul {
                display: block;
                background: gray;
            }
        }
    }
    
`

export const MenuBurgerOpen = styled(MenuOpen)`
    display: none;
    position: absolute;
    justify-content: end;
    margin: 4pt 0;
    width:48px;
    ul {
        display: none;
    }

    @media(max-width: 540px){
        display: block;
        right: 32px;
        cursor: pointer;

        &:focus{
            ul {
                display: block;
                background: gray;
            }
        }
    }
    
`
