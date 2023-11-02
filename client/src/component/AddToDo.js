import { useState } from 'react';
import '../index';

export default function AddToDo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input className='input'
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className='btn' onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
