import React from 'react';

function TodoList({ todos, toggleComplete, removeTodo, setEditIndex, setCurrentTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <div
            className={todo.isComplete ? 'todo-text complete' : 'todo-text'}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </div>
          <button onClick={() => removeTodo(index)}>Remove</button>
          <button
            onClick={() => {
              setEditIndex(index);
              setCurrentTodo(todo.text);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
