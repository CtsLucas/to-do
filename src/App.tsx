import { ThemeProvider } from "styled-components"
import defaultTheme from "./assets/styles/themes/default"
import GlobalStyles from "./assets/styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { List } from "./components/List"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Form />
      <List />
    </ThemeProvider>
  )
}
