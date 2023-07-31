import styled, { css } from "styled-components";
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { ExchangeDollar } from '@styled-icons/remix-line/ExchangeDollar'
import { Report } from '@styled-icons/boxicons-solid/Report'
import { Gears } from '@styled-icons/fa-solid/Gears'
import { Info } from '@styled-icons/entypo/Info'
import { Bank } from '@styled-icons/boxicons-solid/Bank'
import { Category } from '@styled-icons/boxicons-regular/Category'

import background from '../../assets/images/fundo.jpg'
import logo from '../../assets/images/logo.png'

export const SideBarContainer = styled.aside`
    min-height: 100vh;
    width:200px;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    @media(max-width: 700px){
        max-width:50px;
        p{
            display: none;
        }
    }

`


export const Logo = styled.div`    
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;    
    width: 200px;
    cursor: pointer;
    height: 90px;
    
    @media(max-width: 700px){
        display: none;
    }
`


interface Props {
    selected: boolean
}
export const SideMenu = styled.div<Props>`
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    margin: 8px 0;
    border-radius: 12px;
    transition: background-color 0.4s ;
    cursor: pointer;
    background-color: ${(props) => props.selected ? 'var(--primary)' : ''};
    opacity: ${(props) => props.selected ? '0.7' : ''};
    color: ${(props) => props.selected ? 'white' : ''};
    
    p{
        margin-left: 4px;
    }
    
    &:hover{
        background-color: var(--primary);
        opacity: 0.7;
        color: white;

    }
`

export const Avatar = styled(UserCircle)`
    width: 80px;
    display: flex;
    margin: 10px auto;

    @media(max-width: 700px){
        width: 45px;
    }

`

export const BackgroundImg = styled.div`
    width: 80px;
    display: flex;
    margin: 10px auto;
    position: relative;
    display: flex;
    justify-content: center;

    img{
        width: 90px;
        border-radius: 50%;
    }
    @media(max-width: 700px){
        width: 45px;

        img {
            width: 30px;
        }
    }

`

export const CashIcon = styled(ExchangeDollar)`
    width: 30px;
`

export const ReportIcon = styled(Report)`
    width: 30px;    
`


export const ConfigIcon = styled(Gears)`
    width: 30px;
`

export const InfoIcon = styled(Info)`
    width: 30px;
`

export const BankIcon = styled(Bank)`
    width: 30px;
`

export const CategoryIcon = styled(Category)`
    width: 30px;
`
