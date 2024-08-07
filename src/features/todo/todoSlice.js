import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: "abc", task: "demo_task", isDone: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        DeleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        MarkasDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if ( todo.id === action.payload){
                    todo.isDone = true;
                }
                return todo;
            })
        }
    }
})

export const {addTodo, DeleteTodo, MarkasDone} = todoSlice.actions;
export default todoSlice.reducer;