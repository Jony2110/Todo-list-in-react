import React, { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;