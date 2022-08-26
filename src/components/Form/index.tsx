import { PlusCircle } from "phosphor-react"
import { Container } from "./styles"

export function Form() {
  return (
    <Container>
      <form action="">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="button">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </Container>
  )
}
