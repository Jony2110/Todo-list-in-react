import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import Modal from './Modal';
import './style.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: todos.length + 1 }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodoID = (todo) => {
    setEditTodo(todo);
    setIsModalOpen(true);
  };

  const updateTodo = (todo) => {
    const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    setTodos(updatedTodos);
    setEditTodo(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <span className='jony'>by JONNY</span>
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onEdit={editTodoID}
          onDelete={deleteTodo}
        />
      ))}
      {isModalOpen && (
        <Modal>
          <TodoForm
            onSubmit={updateTodo}
            initialText={editTodo.text}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;