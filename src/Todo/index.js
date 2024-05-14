import React from 'react';

const Todo = ({ todo, onEdit, onDelete }) => {
  return (
    <div className='fix-box'>
      <span>{todo.text}</span>
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;