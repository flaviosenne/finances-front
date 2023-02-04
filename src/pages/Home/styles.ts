import styled, { css } from "styled-components";
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { ExchangeDollar } from '@styled-icons/remix-line/ExchangeDollar'
import { Report } from '@styled-icons/boxicons-solid/Report'
import { Gears } from '@styled-icons/fa-solid/Gears'
import { Info } from '@styled-icons/entypo/Info'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
`

export const SideBar = styled.div`
    min-height: 100vh;
    width:200px;
    background-image: url('images/fundo.jpg');
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
    background-image: url('images/logo.png');
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


const linksMenu = css`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
`

export const SideMenu = styled.div`
    ${linksMenu}
`
    
export const Avatar = styled(UserCircle)`
    width: 80px;
    display: flex;
    margin: 10px auto;

    @media(max-width: 700px){
        width: 45px;
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


export const Content = styled.div`
    width:100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`