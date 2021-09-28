import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import {showAlert, editTodo, changeIsDone, deleteTodo} from '../redux/action'; 
import EditForm from './EditForm';
import TodoButtons from './TodoButtons';
import TodoCheckbox from './TodoCheckbox';

function TodoItem({ todo }) {
  const [needEdit, setNeedEdit] = useState(false);
  const dispatch = useDispatch();

  const editButtonHandler = () => {
    setNeedEdit(true);
  };

  const deleteButtonHandler = () => {
    dispatch( deleteTodo(todo.id) );
    dispatch( showAlert({text: 'вы удалили элемент ' + todo.text, type: 'success'}) );
  };

  const checkboxHandler = () => {
    dispatch( changeIsDone(todo.id) );
  }

  const editFormHandler = (text) => {
    setNeedEdit(false);
    dispatch( editTodo({id: todo.id, text}) );
    dispatch( showAlert({text: 'вы отредактировали элемент ' + todo.text, type: 'success'}) );
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {needEdit
          ? <EditForm text={todo.text} editFormHandler={editFormHandler}/>
          : <Fragment>
              <TodoCheckbox text={todo.text} isDone={todo.isDone} checkboxHandler={checkboxHandler}/>
              <TodoButtons editButtonHandler={editButtonHandler} deleteButtonHandler={deleteButtonHandler} />
            </Fragment>  
        }
      
    </li>
  );
}

export default TodoItem;

