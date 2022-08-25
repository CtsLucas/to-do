import { ThemeProvider } from "styled-components";
import defaultTheme from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>To Do</h1>
    </ThemeProvider>
  )
}

