import { Field } from './Field'
import { Button } from './Button'

export const AddTaskForm = ({ addTask, newTaskTitle, setNewTaskTitle }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}