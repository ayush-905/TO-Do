import React from 'react'
import { useState } from 'react';

export default function Task  ({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const[newTitle,setNewTitle]=useState(todo.title)
  
    let todoContent;
    
    if (isEditing) {
      todoContent = (
        <>
          <input className='new-input'
            value={newTitle}
            onChange={e => {
              setNewTitle(e.target.value)
            }} />
          <button className='btn3' onClick={() => {setIsEditing(false)
          onChange(todo.id,newTitle)}}>
            Save
          </button>
        </>
      );
    } else {
      todoContent = (
        <div className='btn-edit'>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      );
    }
    return (
      <div className='task-container'>
        {todoContent}
        <button className='btn2' onClick={() => onDelete(todo.id)}>
          Delete
        </button>
       
      </div>
    );
}
