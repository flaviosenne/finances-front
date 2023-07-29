import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
`

export const Content = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    p{
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
        margin: 0 auto;
    }
    @media(max-width: 700px){
        p{
            width: 120px;
        }
    }
    
`



export const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    
    
    @media(max-width: 700px){
        width: 100%;
        position: absolute;
        top: 40px;
        right: 20px;
    }
    
`

export const ResumeContainer = styled.div`
    position: relative;
    width: 90%;
    background: rgb(250, 250, 250);
    margin: 10px auto;
    border-radius: 6px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    p{
        font-weight: 600;
        max-width: 100%;
        span{
            font-weight: 500;
        }
    }
`

export const ButtonAdd = styled.button`
    color: white;
    padding: 12px;
    width: 100px;
    border: none;
    background: var(--primary);
    border-style: solid;
    border-radius: 10px;
    margin: 0 8px;
    transition: opacity .4 border-color .4;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;

    &:hover{
        opacity: .8;
        border-color: aqua;
    }

`

