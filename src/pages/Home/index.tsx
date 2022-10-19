import { Form } from "./components/Form"
import { TaskList } from "./components/TaskList"

import { Container } from "./styles"

export function Home() {
  return (
    <Container>
      <Form />
      <TaskList />
    </Container>
  )
}
