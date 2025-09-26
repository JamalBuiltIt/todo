import React, { useState } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && value.trim()) {
      editTodo(todo.id, value);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="content">
        {isEditing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        ) : (
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
        )}
        <small className="category">{todo.category}</small>
      </div>

      <div className="actions">
        <button onClick={handleEdit}>{isEditing ? "💾" : "✏️"}</button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </div>
    </li>
  );
}
