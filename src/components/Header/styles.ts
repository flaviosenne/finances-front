import styled from 'styled-components'
import { Menu } from '@styled-icons/material-rounded/Menu'
import { MenuOpen } from '@styled-icons/material/MenuOpen'
import { ArrowRightCircleFill } from '@styled-icons/bootstrap/ArrowRightCircleFill'


export const Container = styled.div`
    min-width: 100vw;
    height: 72px;
    margin-bottom: 10px;
    display: flex;
    font-size: .8rem;
    justify-content: space-around;
    flex-wrap: wrap;
    background: white;
    /* border-bottom: 2pt solid var(--primary); */
    
    @media(max-width: 540px){
        flex-direction: column;
        margin: 0 0 64px 0;
        border: none;
    }
`


export const Logo = styled.div`

    background-image: url('images/logo.png');
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    position: relative;    
    width: 12%;
    cursor: pointer;
    
    @media(max-width: 540px){
        width:146px;
        height: 80px;
    }
`

interface PropsLink {
    menu: boolean
}

export const Links = styled.div<PropsLink>`
    width: 50%;
    display: flex;
    margin: 0 auto;
    display: flex;
    align-items: center;
    ul {
        position: relative;
        width: 75%;
        display: flex;
        height: 60px;
        margin: 0 auto;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        
        @media(max-width: 540px){
            display: ${props => props.menu ? 'none' : 'flex'};
            position: absolute;
            width: 180px;
            height: 200px;
            border-bottom-left-radius: 10%;
            right: 0;
            top: 72px;
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
            height: 20px;
            
            &:hover{
                border-image: linear-gradient(to right, transparent, var(--primary) 50%, transparent) 0 0 1 0;
            }
        }
    }
`


export const Login = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin: 0 auto;
    @media(max-width: 540px){
        display: none;
    }

    button{
        &:hover{
            color: black;
        }
    }

    span{
        margin: 0 auto;
        padding: 8pt 4pt;
        font-size: 10pt;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &:hover{
            text-decoration: underline;
            border-image: linear-gradient(to right, transparent, var(--primary) 80%, transparent) 0 0 1 0;
        }
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

export const ArrowRightcon = styled(ArrowRightCircleFill)`
    width: 36px;
    padding: 4px;
    bottom: 40px;
    right: 60px;
    
    @media(max-width: 720px){
        right: 40px;
        width: 42px;

    }

`