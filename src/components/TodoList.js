import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import TodoItemConnector from './TodoItemConnector';
import {featchTodo} from '../redux/action'; 
import { SHOW_ALL, SHOW_COMPLITED } from '../redux/types';

function TodoList({ todos, needShow, featchTodo }) {
  useEffect(() => {
    featchTodo();
  }, [featchTodo]);

  return (
    <ul className="list-group pt-3">
      {
        todos.map(todo => <TodoItemConnector todo={todo} key={todo.id} />)
      }
    </ul>
  );
}

const mapStateToProps = state => {
  const todos = state.todo.todoList;
  let todoList;
  if (state.todo.needShow === SHOW_ALL) {
    todoList = todos;
  } else if (state.todo.needShow === SHOW_COMPLITED) {
    todoList = todos.filter(todo => todo.isDone);
  } else {
    todoList = todos.filter(todo => !todo.isDone);
  }

  return {
    todos: todoList,
    needShow: state.todo.needShow
  };
}

const mapDispatchToProps = {
  featchTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);