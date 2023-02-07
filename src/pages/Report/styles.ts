import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: white;
`

export const Content = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 8px auto;
    
    `
export const Title = styled.div`
    width: 100%;
    border-radius: 8px;
    margin: 8px;
    padding: 12px;
    background: var(--primary);
    text-align: center;
    font-weight: 600;
`

export const SummaryContainer = styled.div`
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    margin: 8px;
    background: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    @media(max-width: 700px){
        flex-direction: column;
    }
`

export const Summary = styled.div`
    p{
        padding: 4px;
        margin: 4px 0;
        font-weight: 600;
    }
    span{
        font-weight: 300;
    }
`

export const Table = styled.table`
    max-width:100%;
    display: block;
    max-height: 400px;
    margin: 8px auto;
    border-spacing: 1;
    border-style: solid;
    border-width: 1px;
    overflow-y: scroll;
    
    @media(max-width: 700px){
        display: block;
        overflow-x: scroll;
        width: 100%;
        padding: 4px;
        font-size: 8pt;
        align-items: center;
    }

    
    th{
        padding: 12px;
        font-weight: 700;
        background-color: gainsboro;
    }
    
    td{
        width: 200px;
        justify-content: center;
        text-align: center;
        padding: 8px;       
    }


`
