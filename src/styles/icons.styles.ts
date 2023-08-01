import styled, { css } from 'styled-components'
import { Email } from '@styled-icons/entypo/Email'
import { Fullscreen } from '@styled-icons/bootstrap/Fullscreen'
import { LockPassword } from '@styled-icons/remix-line/LockPassword'
import { User } from '@styled-icons/boxicons-regular/User'
import { EyeFill } from '@styled-icons/bootstrap/EyeFill'
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill'
import { Receipt } from '@styled-icons/fa-solid/Receipt'
import { Bank } from '@styled-icons/boxicons-solid/Bank'
import { Category } from '@styled-icons/boxicons-regular/Category'
import { TextDescription } from '@styled-icons/fluentui-system-regular/TextDescription'
import { MoneyBill1 } from '@styled-icons/fa-regular/MoneyBill1'
import { Status } from '@styled-icons/fluentui-system-filled/Status'
import { Google } from '@styled-icons/boxicons-logos/Google'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Edit } from '@styled-icons/boxicons-solid/Edit'
import { Trash } from '@styled-icons/boxicons-regular/Trash'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { CloudUpload } from '@styled-icons/bootstrap/CloudUpload'

const iconCSS = css`
    width: 20px;
`

export const UserIcon = styled(User)`
    ${iconCSS}
`

export const EmailIcon = styled(Email)`
    ${iconCSS}
`

export const PasswordIcon = styled(LockPassword)`
    ${iconCSS}
`

export const EyeOpenIcon = styled(EyeFill)`
    position: relative;
    width: 15px;
    right: 5px;
`

export const EyeCloseIcon = styled(EyeSlashFill)`
    position: relative;
    right: 5px;
    width: 15px;
`


export const TypeIcon = styled(Receipt)`
    ${iconCSS}  
    
`

export const BankIcon = styled(Bank)`
    ${iconCSS}  
    
`

export const CategoryIcon = styled(Category)`
    ${iconCSS}  
    
    `

export const ValueIcon = styled(MoneyBill1)`
    ${iconCSS}  
    
    `

export const DescriptionIcon = styled(TextDescription)`
    ${iconCSS}  
`

export const StatusIcon = styled(Status)`
    ${iconCSS}  
`


export const GoogleIcon = styled(Google)`
    left: 20px;
    width: 20px;
`

export const FacebookIcon = styled(Facebook)`
    left: 20px;
    width: 20px;

`
export const AddIcon = styled(Plus)`
    ${iconCSS}
    `


export const EditIcon = styled(Edit)`
    cursor: pointer;
    ${iconCSS}
    &:hover{
        color: yellow;
    }
    `

export const TrashIcon = styled(Trash)`
cursor: pointer;
${iconCSS}
&:hover{
    color: red;
    }
`

export const UploadIcon = styled(CloudUpload)`
    ${iconCSS}
`

export const ThemeIcon = styled(Fullscreen)`
    ${iconCSS}
`