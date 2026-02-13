import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deleteTodo, toggleTodo } from "./redux/todos/todosSlice";

const TodoTable = ({ todos }) => {
    const dispatch = useDispatch();
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "Yes" : "No"}</td>
                        <td>
                            <button onClick={() => dispatch(toggleTodo(todo.id))}>
                                {todo.completed ? "Uncomplete" : "Complete"}
                            </button>

                            <button
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                Delete
                            </button>

                            <Link
                                to={`/details/${todo.id}`}
                            >
                                See Details
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoTable;
