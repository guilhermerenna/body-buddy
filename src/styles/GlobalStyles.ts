import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --background: #202225;
        --primary: #FF5F21;
        --secondary: #202225;
        --tertiary: #FFF;
        --quarternary: #404040;

        --chat-input: #40444B;
        --notification: #f64c4d
    }
`;