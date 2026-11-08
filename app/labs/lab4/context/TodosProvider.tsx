import { useState, type ReactNode } from "react";
import { TodosContext, type ContextTodo } from "./todosContext";
export default function TodosProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<ContextTodo[]>([
        { id: "1", title: "Learn HTML" },
        { id: "2", title: "Learn CSS" },
    ]);
    const addTodo = (title: string) =>
        setTodos([...todos, { id: crypto.randomUUID(), title }]);
    const updateTodo = (todo: ContextTodo) =>
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    const deleteTodo = (id: string) =>
        setTodos(todos.filter((t) => t.id !== id));
    return (
        <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodosContext.Provider>
    );
}