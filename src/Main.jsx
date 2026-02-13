import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/todos/todosThunks";
import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";
import TodoTable from "./TodosTable";

const Main = () => {
    const dispatch = useDispatch();

    // À utiliser si on n’a pas de recherche dynamique (on récupère simplement la liste complète)
    const items = useSelector((state) => state.todos.items);
    const status = useSelector((state) => state.todos.status);
    const [search, setSearch] = useState("");

    // Filtrage en temps réel (sans modifier le state global)
    // On peut aussi définir des sélecteurs (selectors) dans le store Redux
    // et les utiliser directement ici au lieu de faire le filtrage dans useSelector
    const filteredTodos = useSelector((state) =>
        search.trim() == "" ?
            state.todos.items :
            state.todos.items.filter((todo) =>
                todo.title.toLowerCase().includes(search.toLowerCase())
            ));

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo App</h1>

            {/* Formulaire */}
            <TodoForm />

            {/* Champ de recherche */}
            <input
                type="text"
                placeholder="Rechercher une tâche..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Tableau */}
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Erreur de chargement</p>}
            {status === "succeeded" && (
                <TodoTable todos={filteredTodos} />
            )}

        </div>
    );
};

export default Main;
