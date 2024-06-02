import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, editTodo, editIndex, currentTodo }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setInput(currentTodo);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (editIndex !== null) {
      editTodo(input, editIndex);
    } else {
      addTodo(input);
    }

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TodoForm;
