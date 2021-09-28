function getAllTodo(todoList) {
  return todoList.length
}

function getComplitedTodo(todoList) {
  return todoList.filter(todo => todo.isDone).length
}

function getIncomplitedTodo(todoList) {
  return todoList.filter(todo => !todo.isDone).length
}

export {getAllTodo, getComplitedTodo, getIncomplitedTodo}