import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 2. createAsyncThunk pour récupérer les todos depuis l'API
export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1/todos"
        );
        return response.data.todos;
    }
);