import { useState } from "react"
import { Trash } from "phosphor-react"
import { Container, Text } from "./styles"
import done from "../../assets/images/done.svg"
import toDo from "../../assets/images/todo.svg"

export function Task() {
  const [isDone, setIsDone] = useState(false)

  function handleClick() {
    setIsDone(!isDone)
  }

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        <img src={isDone ? done : toDo} alt="done" />
      </button>
      <Text isDone={isDone}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Text>
      <button type="button">
        <Trash size={18} />
      </button>
    </Container>
  )
}
