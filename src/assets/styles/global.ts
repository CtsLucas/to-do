import {createGlobalStyle, ThemeType} from 'styled-components';

export default createGlobalStyle<{ theme: ThemeType  }>`
  html {
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.gray[100]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
  }
`;
