import { Field } from './Field'

export const SearchTaskForm = ({ searchQuery, setSearchQuery }) => {
  return (
    <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}