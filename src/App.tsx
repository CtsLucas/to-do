import { ThemeProvider } from "styled-components"
import defaultTheme from "./assets/styles/themes/default"
import GlobalStyles from "./assets/styles/global"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { TasksContextProvider } from "./contexts/TasksContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <TasksContextProvider>
        <Home />
      </TasksContextProvider>
      <Footer />
    </ThemeProvider>
  )
}
