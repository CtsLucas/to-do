import { PlusCircle } from "phosphor-react"
import { InvalidEvent, useContext } from "react"
import { TasksContext } from "../../../../contexts/TasksContext"

import { FormContainer } from "./styles"

export function Form() {
  const { newContentTask, handleCreateTask, handleNewContentTaskChange } =
    useContext(TasksContext)

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  const isNewTaskEmpty = newContentTask?.length === 0

  return (
    <FormContainer>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          name="inputTask"
          placeholder="Adicione uma nova tarefa"
          value={newContentTask}
          onChange={handleNewContentTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </FormContainer>
  )
}
