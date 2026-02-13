import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todos/todosSlice";

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodo(title));
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Ajouter une tâche..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TodoForm;
