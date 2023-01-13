import styled from 'styled-components'


export const Container = styled.section`
    min-height: calc(100vh - 160px);
    padding: 40px;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    
    @media(max-width: 540px){
        padding: 0px;
    }
`

export const Slogan = styled.div`
    display: flex;
    width: 100%;
    min-height: 300px;
    padding: 10px;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    
    @media(max-width: 750px){
        flex-direction: column;
        align-items: center;
    }

    
`

export const SloganTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;

    h1 {
        font-size: 18pt;
        width: 100%;
        margin:10px 0;
        text-align: start;
        
        @media(max-width: 540px){
            font-size: 16pt;
            margin: 0 auto;
        }
    }
    
    h2 {
        font-size: 14pt;
        font-weight: 500;
        width: 100%;
        text-align: start;
        
        @media(max-width: 540px){
            font-size: 14pt;
            margin: 0 auto;
        }
    }

    @media(max-width: 750px){
        width: 75%;
        justify-content: center;
        justify-items: center;
    }
`

export const SloganBanner = styled.div`
    width: 45%;
    height: 250px;
    margin: 0 auto;
    background-image: url("images/cifrao.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
`


export const Feature = styled.div`
    display: flex;
    width: 100%;
    min-height: 350px;
    padding: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    flex-direction: row;
    box-shadow: 0 2px 8px var(--primary);
    margin: 10px;
    
    @media(max-width: 750px){
        width: 90%;
        padding: 5px;
        align-items: center;
        flex-direction: column;
    }
    
`


export const FeatureTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 10px 0;
    
    h1 {
        font-size: 18pt;
        width: 100%;
        margin:10px 0;
        text-align: start;
        
        @media(max-width: 540px){
            margin: 0 auto;
            font-size: 16pt;
        }
    }
    
    p {
        text-align: start;
        font-size: 12pt;
        
        @media(max-width: 540px){
            margin: 0 auto;
            justify-content: center;
            text-align: justify;
        }
    }
    
    @media(max-width: 750px){
        width: 75%;
        justify-content: center;
        justify-items: center;
    }
`


export const FlowCashBanner = styled.div`
    width:50%;
    height: 250px;
    margin: 0 auto;
    border-radius: 5%;
    background-image: url('images/fluxo.PNG');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    @media(max-width: 750px){
        width:90%;
        height: 250px;
    }
`

export const ReportBanner = styled.div`
    width:50%;
    height: 250px;
    margin: 0 auto;
    border-radius: 5%;
    background-image: url('images/relatorio.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    @media(max-width: 750px){
        width:90%;
        height: 250px;
    }
`
