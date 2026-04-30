import { AddTaskForm } from './AddTaskForm'
import { SearchTaskForm } from './SearchTaskForm'
import { TodoInfo } from './TodoInfo'
import { TodoList } from './TodoList'

export const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'Купить молоко', isDone: false },
    { id: 'task-2', title: 'Погладить кота', isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log('Delete all tasks')
  }

  const deleteTask = (taskId) => {
    console.log(`Delete task ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Toggle task ${taskId} complete status to ${isDone}`)
  }

  const filterTasks = (query) => {
    console.log(`Filter tasks by query ${query}`)
  }

  const addTask = () => {
    console.log('Add task')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}