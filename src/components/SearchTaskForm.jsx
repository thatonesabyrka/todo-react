import { Field } from './Field'

export const SearchTaskForm = ({ onSearchInput }) => {
  return (
    <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        onInput={(event) => onSearchInput(event.target.value)}
      />
    </form>
  )
}