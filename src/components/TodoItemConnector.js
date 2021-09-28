import { useState } from 'react';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import {showAlert, editTodo, changeIsDone, deleteTodo} from '../redux/action'; 

export default function TodoItemConnector ({ todo: { id, text, isDone } }) {
  const [needEdit, setNeedEdit] = useState(false);
  const dispatch = useDispatch();

  const editButtonHandler = () => {
    setNeedEdit(true);
  };

  const deleteButtonHandler = () => {
    dispatch( deleteTodo(id) );
    dispatch( showAlert({text: 'вы удалили элемент ' + text, type: 'success'}) );
  };

  const checkboxHandler = () => {
    dispatch( changeIsDone(id) );
  }

  const editFormHandler = (text) => {
    setNeedEdit(false);
    dispatch( editTodo({id: id, text}) );
    dispatch( showAlert({text: 'вы отредактировали элемент ' + text, type: 'success'}) );
  }

  const handlers = {
    editButtonHandler, deleteButtonHandler, checkboxHandler, editFormHandler,
  };

  const staticData = {
    text,
    isDone,
    id,
    needEdit,
  };

  return (
    <TodoItem {...handlers} {...staticData} />
  )
};

