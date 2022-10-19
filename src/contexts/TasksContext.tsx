import {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { v4 as uuidv4 } from "uuid"

export interface TaskProps {
  id: string
  content: string
  status: boolean
}

interface TasksContextType {
  taskList: TaskProps[] | undefined
  newContentTask: string
  doneTask: (id: string) => void
  deleteTask: (id: string) => void
  handleCreateTask: (event: FormEvent) => void
  handleNewContentTaskChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksContextProviderProps {
  children: ReactNode
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [taskList, setTaskList] = useState<TaskProps[]>([])
  const [newContentTask, setNewContentTask] = useState("")

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

  function doneTask(id: string) {
    setTaskList(
      taskList.map((task: TaskProps) => {
        const status = task.id === id ? !task.status : task.status
        return {
          ...task,
          status,
        }
      })
    )
  }

  function deleteTask(id: string) {
    const taksListWithoutDeletedOne = taskList.filter((task: TaskProps) => {
      return task.id !== id
    })

    setTaskList(taksListWithoutDeletedOne)

    if (taskList.length === 1) {
      localStorage.removeItem("@to-do:task-list-1.0.0")
    }
  }

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("@to-do:task-list-1.0.0", JSON.stringify(taskList))
    }
  }, [taskList])

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("@to-do:task-list-1.0.0") || "[]"
    )
    if (data) {
      setTaskList(data)
    }
  }, [])

  return (
    <TasksContext.Provider
      value={{
        taskList,
        newContentTask,
        doneTask,
        deleteTask,
        handleCreateTask,
        handleNewContentTaskChange,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
