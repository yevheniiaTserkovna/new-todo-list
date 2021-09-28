import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import TodoItemConnector from './TodoItemConnector';
import {featchTodo} from '../redux/action'; 
import { SHOW_ALL, SHOW_COMPLITED } from '../redux/types';

function TodoList({ todos, needShow, featchTodo }) {
  useEffect(() => {
    featchTodo();
  }, [featchTodo]);

  let todoList;
  if (needShow === SHOW_ALL) {
    todoList = todos;
  } else if (needShow === SHOW_COMPLITED) {
    todoList = todos.filter(todo => todo.isDone);
  } else {
    todoList = todos.filter(todo => !todo.isDone);
  }

  return (
    <ul className="list-group pt-3">
      {
        todoList.map(todo => <TodoItemConnector todo={todo} key={todo.id} />)
      }
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todoList,
    needShow: state.todo.needShow
  };
}

const mapDispatchToProps = {
  featchTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);