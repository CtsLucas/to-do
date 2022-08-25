import { ThemeProvider } from "styled-components";
import defaultTheme from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global';
import { Header } from "./components/Header";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  )
}

