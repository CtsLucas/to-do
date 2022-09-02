import { useState } from "react"
import { Trash } from "phosphor-react"
import { Container, Text } from "./styles"
import done from "../../assets/images/done.svg"
import toDo from "../../assets/images/todo.svg"

interface TaskProps {
  task: {
    id: string
    content: string
    status: boolean
  }
  onDeleteTask: (id: string) => void
  onDoneTask: (id: string) => void
}

export function Task({
  task: { id, content, status },
  onDeleteTask,
  onDoneTask,
}: TaskProps) {
  const [isDone, setIsDone] = useState(status)

  function handleClick() {
    onDoneTask(id)
    setIsDone(!isDone)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        <img src={isDone ? done : toDo} alt="done" />
      </button>
      <Text isDone={isDone}>{content}</Text>
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </Container>
  )
}
