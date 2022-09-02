import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react"
import { v4 as uuidv4 } from "uuid"
import { PlusCircle } from "phosphor-react"
import { Task } from "../../components/Task"
import { Content, Form, Header, List, TaskInfo } from "./styles"
import { Empty } from "../../components/Empty"

export function Home() {
  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      status: false,
    },
    {
      id: uuidv4(),
      content:
        "Mandar mensagem para a advogada e questionar sobre o andamento da PPP.",
      status: false,
    },
    {
      id: uuidv4(),
      content: "Ir até o banco desbloquear o cartão.",
      status: false,
    },
  ])

  const [newContentTask, setNewContentTask] = useState("")
  const [numberOfTasksCompleted, setNumberOfTasksCompleted] = useState(0)

  useEffect(() => {
    setNumberOfTasksCompleted(
      taskList.reduce((accumulator, currentValue) => {
        if (currentValue.status === true) {
          return accumulator + 1
        }

        return accumulator
      }, 0)
    )
  }, [taskList])

  function handleCreateTask(event: FormEvent) {
    event?.preventDefault()

    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        content: newContentTask,
        status: false,
      },
    ])
    setNewContentTask("")
  }

  function handleNewContentTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewContentTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function doneTask(id: string) {
    setTaskList(
      taskList.map((task) => {
        const status = task.id === id ? !task.status : task.status
        return {
          ...task,
          status,
        }
      })
    )
  }

  function deleteTask(id: string) {
    const taksListWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== id
    })

    setTaskList(taksListWithoutDeletedOne)
  }

  const isNewTaskEmpty = newContentTask.length === 0
  const isTaskListEmpty = taskList.length === 0

  return (
    <>
      <Form>
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
      </Form>

      <List>
        <Header>
          <TaskInfo type="created">
            Tarefas criadas
            <span>{taskList.length}</span>
          </TaskInfo>
          <TaskInfo type="completed">
            Concluídas
            <span>
              {isTaskListEmpty
                ? 0
                : `${numberOfTasksCompleted} de ${taskList.length}`}
            </span>
          </TaskInfo>
        </Header>
        <Content>
          {isTaskListEmpty ? (
            <Empty />
          ) : (
            taskList.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onDoneTask={doneTask}
                />
              )
            })
          )}
        </Content>
      </List>
    </>
  )
}
