import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentTodo, setCurrentTodo] = useState('');

  const addTodo = (text) => {
    setTodos([...todos, { text, isComplete: false }]);
  };

  const editTodo = (text, index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, text } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setCurrentTodo('');
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm
        addTodo={addTodo}
        editTodo={editTodo}
        editIndex={editIndex}
        currentTodo={currentTodo}
      />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        setEditIndex={setEditIndex}
        setCurrentTodo={setCurrentTodo}
      />
    </div>
  );
}

export default App;
