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
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    
    @media(max-width: 750px){
        flex-direction: column;
        align-items: center;
    }

    
`

export const SloganTitle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 55%;

    h1 {
        font-size: 18pt;
        width: 90%;
        margin:10px 0;
        text-align: start;
        
        @media(max-width: 540px){
            width: 100%;
            font-size: 18pt;
            margin: 0 auto;
        }
    }
    
    h2 {
        font-size: 14pt;
        font-weight: 500;
        width: 90%;
        text-align: start;
        
        @media(max-width: 540px){
            width: 100%;
            font-size: 14pt;
            margin: 0 auto;
        }
    }

    @media(max-width: 540px){
        width: 100%;
        justify-content: center;
        justify-items: center;
    }
`

export const SloganBanner = styled.div`
    width: 45%;
    margin-top: 10px;
    height: 300px;
    background-image: url("images/cifrao.png");
    background-size: 250px;
    background-repeat: no-repeat;
    background-attachment: local;
    background-position: center;
    
    @media(max-width: 540px){
        width: 90%;
        height: 200px;
        background-size: 180px;
    }
`


export const Features = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    flex-direction: row;
    
    @media(max-width: 750px){
        align-items: center;
        flex-direction: column;
    }
    
    `

export const FeaturesBanner = styled.div`
    width: 40%;
    height: 200px;
    display: flex;
    border-radius: 5%;
    background-image: url('images/fluxo.PNG');
    background-size: 400px;
    background-repeat: no-repeat;
    background-position: center;
    @media(max-width: 750px){
        width: 80%;
    }
    `

export const FeaturesTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    
    h1 {
        font-size: 18pt;
        width: 100%;
        margin:10px 0;
        text-align: end;
        
        @media(max-width: 540px){
            width: 80%;
            font-size: 16pt;
        }
    }
    
    p {
        text-align: end;
        font-size: 12pt;
        
        @media(max-width: 540px){
            margin: 0 auto;
            width: 80%;
            justify-content: center;
        }
    }
    
    @media(max-width: 540px){
        width: 100%;
        justify-content: center;
        justify-items: center;
    }
`


