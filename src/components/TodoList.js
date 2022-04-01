/* eslint-disable no-unused-vars */
import Todo from "./Todo";
import React from "react";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
        <Todo />
      </ul>
    </div>
  );
};
export default TodoList;
