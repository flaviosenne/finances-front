import styled from 'styled-components'
import { Support } from '@styled-icons/boxicons-regular/Support'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

export const Container = styled.div`
    border-top: 2pt solid var(--primary);
    min-width:  100vw;
    padding: 8px;
    text-align: center;
    background: white;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;

        li {
            flex-wrap: wrap;
            display: flex;
            justify-content: start;
            margin: 4px;
            
            a{
                flex-wrap: wrap;
                &:hover{
                    text-decoration: underline;
                }
            }
        
            > span {
                margin: 0 2px;
            }
        }
    }
    p{
        font-size: 8pt;
    }
`

export const LinkedinIcon = styled(Linkedin)`
    width: 20px;
`

export const GitHubIcon = styled(Github)`
    width: 20px;
`

export const SupportIcon = styled(Support)`
    width: 20px;
`
