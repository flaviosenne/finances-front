import styled, { css } from 'styled-components'
import { Receipt } from '@styled-icons/fa-solid/Receipt'
import { Bank } from '@styled-icons/boxicons-solid/Bank'
import { Category } from '@styled-icons/boxicons-regular/Category'
import { TextDescription } from '@styled-icons/fluentui-system-regular/TextDescription'
import { MoneyBill1 } from '@styled-icons/fa-regular/MoneyBill1'
import { Status } from '@styled-icons/fluentui-system-filled/Status'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    div{
        position: relative;
        height: auto;
    }
`

export const Form = styled.form`
    padding: 8px;
    display: flex;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    margin: 8px auto;
    flex-wrap: wrap;
    justify-content: center;

    button{
        margin: 4px 8px;
    }
`

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px;
    span{
        font-size: 8pt;
        margin: 0 4px;
    }
    input{
        cursor: pointer;
    }
`

export const FieldContainer = styled.div`
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    padding: 8px;
    margin: 4px;
    display: flex;
    align-items: center;


    input{
        border: none;
        width: 100%;
        padding: 4px;
    }

    select{ 
        width: 100%;
        font-size: 8pt;
        option{
            font-size: 10pt;
        }
    }

`

const iconCss = css`
    width: 16px;
    margin-right: 4px;
`



export const TypeIcon = styled(Receipt)`
    ${iconCss}  
    
`

export const BankIcon = styled(Bank)`
    ${iconCss}  
    
`

export const CategoryIcon = styled(Category)`
    ${iconCss}  
    
    `

export const ValueIcon = styled(MoneyBill1)`
    ${iconCss}  
    
    `

export const DescriptionIcon = styled(TextDescription)`
    ${iconCss}  
`

export const StatusIcon = styled(Status)`
    ${iconCss}  
`
