import React from 'react'
import Task from './Task'

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <div className='list'>
      {todos.map(todo => (
          <Task
            key={todo.id}
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
      ))}
    </div>
  );
}

