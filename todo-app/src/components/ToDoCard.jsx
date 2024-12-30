export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button className="done-button" onClick={() => {
                    handleCompleteTodo(todoIndex)}}
                    disabled={todo.complete}>
                <i className="fa-solid fa-check"></i> Done
                </button>
                <button className="delete-button" onClick={() => {
                    handleDeleteTodo(todoIndex)}}>
                <i className="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        </div>
    )
}