import { Task } from "../Task"
import { Container, Content, Header, TaskInfo } from "./styles"

export function List() {
  return (
    <Container>
      <Header>
        <TaskInfo type="created">
          Tarefas criadas
          <span>5</span>
        </TaskInfo>
        <TaskInfo type="completed">
          Concluídas
          <span>2 de 5</span>
        </TaskInfo>
      </Header>
      <Content>
        <Task />
        <Task />
      </Content>
    </Container>
  )
}
