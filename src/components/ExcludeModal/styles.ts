import styled from 'styled-components'


interface PropsModal {
    display: boolean
}

export const ContentModal = styled.div<PropsModal>`
    width: 100%;
    height: 100%;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    position: absolute;
    background: rgba(0,0,0,0.7);
    align-items: center;
    align-self: center;
    z-index: 1;
    
`


export const ButtonModal = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    z-index: 1;
    button{
        margin: 10px;
        width: 120px;
    }
`
