import { useContext, useEffect, useState } from "react"

import { Empty } from "../../../../components/Empty"
import { Task } from "../../../../components/Task"
import { TaskProps, TasksContext } from "../../../../contexts/TasksContext"

import { Content, Header, ListContainer, TaskInfo } from "./styles"

export function TaskList() {
  const { taskList = [], doneTask, deleteTask } = useContext(TasksContext)

  const isTaskListEmpty = taskList.length === 0

  const [numberOfTasksCompleted, setNumberOfTasksCompleted] = useState(0)

  useEffect(() => {
    setNumberOfTasksCompleted(
      taskList.reduce(
        (accumulator: number, currentValue: { status: boolean }) => {
          if (currentValue.status === true) {
            return accumulator + 1
          }

          return accumulator
        },
        0
      )
    )
  }, [taskList])

  return (
    <ListContainer>
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
          taskList?.map((task: TaskProps) => {
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
    </ListContainer>
  )
}
