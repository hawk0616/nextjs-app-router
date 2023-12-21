'use client'

import { addTodo } from '@/api'
import React, { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const AddTask = () => {
  const [taskTitile, setTaskTitle] = useState('')
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await addTodo({ id: uuidv4(), text: taskTitile })
  }
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input 
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="New task..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
        value={taskTitile}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add task
      </button>
    </form>
  )
}

export default AddTask
