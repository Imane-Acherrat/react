import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todosThunks";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        // Ajouter une tâche
        addTodo: (state, action) => {
            // On peut aussi créer l’objet todo avant le dispatch (dans le composant)
            // et l’envoyer directement dans action.payload au lieu de le construire ici
            const newTodo = {
                userId: 1,
                id: Date.now(),
                title: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
        },

        // Supprimer une tâche
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        // Modifier le statut d'une tâche (toggle completed)
        toggleTodo: (state, action) => {
            const todo = state.todos.find(
                (t) => t.id === action.payload
            );
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
