import { Task } from "./types"

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3003/todos`, { cache: 'no-store' })

  const todos = res.json()
  return todos
}

export const addTodo = async (todo: Task): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3003/todos`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })

  const newTodo = res.json()
  return newTodo
}

export const editTodo = async (id: string, newText: string): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3003/todos/${id}`, { 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({test: newText}),
  })

  const updatedTodo = res.json()
  return updatedTodo
}

export const deleteTodo = async (id: string): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3003/todos/${id}`, { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const deleteTodo = res.json()
  return deleteTodo
}