import axios from "axios";
import { CHANGE_DONE, CREATE_TODO, DELETE_TODO, SHOW_ALL, SHOW_COMPLITED, SHOW_INCOMPLITED, EDIT_TODO, SHOW_ALERT, HIDE_ALERT, FEATCH_TODO } from "./types";

const url = 'https://todolist-bc004-default-rtdb.firebaseio.com';

export function featchTodo() {
  return async dispatch => {
    try {
      const res = await axios.get(`${url}/todo.json`);
      const payload = Object.keys(res.data).map(key => {
        return { id: key, ...res.data[key] }
      });
      dispatch({type: FEATCH_TODO, payload});
    } catch {
      dispatch(showAlert({text: 'Список Todo пуст', type: 'danger'}));
    }
  }
}

export function createTodo(todo) {
  return async dispatch => {
    const res = await axios.post(`${url}/todo.json`, todo);
    const payload = {...todo, id: res.data.name }
    dispatch({type: CREATE_TODO, payload});
  }
}

export function deleteTodo(id) {
  return async dispatch => {
    await axios.delete(`${url}/todo/${id}.json`);
    dispatch({type: DELETE_TODO, payload: id});
  }
}

export function editTodo(newTodo) {
  return {
    type: EDIT_TODO,
    payload: newTodo
  }
}

export function changeIsDone(id) {
  return {
    type: CHANGE_DONE,
    payload: id
  }
}

export function showAll() {
  return {
    type: SHOW_ALL
  }
}

export function showComplited() {
  return {
    type: SHOW_COMPLITED
  }
}

export function showIncomplited() {
  return {
    type: SHOW_INCOMPLITED
  }
}

export function showAlert(alert) {
  return {
    type: SHOW_ALERT,
    payload: alert
  };
}

export function showAndHide () {
  return function (dispatch) {
    dispatch(showAlert());

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000); 
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}
