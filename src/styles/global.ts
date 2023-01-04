import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-subtitle']};
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme['base-background']};
    }   

    input, body, select, textarea {
        font: 400 1rem 'Nunito', sans-serif;
        line-height: 160%;
    }
`;