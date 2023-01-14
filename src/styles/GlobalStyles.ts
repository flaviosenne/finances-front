import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100%;
        background: var(--background_home);
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    a{
        color: black;
        text-decoration: none;
    }

    ul{
        list-style-type: none;
    }

    :root{
        --primary: rgb(0, 128, 128);
        --background_home: rgb(246, 251, 255);
    }
`