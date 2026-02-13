import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Details() {
    // Récupérer l'id depuis l'URL
    const { id } = useParams();

    // Accéder au state global et Sélectionner la tâche correspondante
    const todo = useSelector((state) => state.todos.items.find(
        (t) => t.id === parseInt(id)
    ));

    return (
        <div style={{ padding: "20px" }}>
            <h1>Détails de la tâche</h1>

            <p>
                <strong>ID :</strong> {todo.id}
            </p>

            <p>
                <strong>Title :</strong> {todo.title}
            </p>

            <p>
                <strong>Completed :</strong>{" "}
                {todo.completed ? "Yes" : "No"}
            </p>
        </div>
    );
}