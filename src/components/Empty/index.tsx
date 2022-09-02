import clipboard from "../../assets/images/clipboard.svg"
import { Container } from "./styles"

export function Empty() {
  return (
    <Container>
      <img src={clipboard} alt="clipboard" />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e
        organize seus itens a fazer
      </p>
    </Container>
  )
}
