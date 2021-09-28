import { CHANGE_DONE, CREATE_TODO, DELETE_TODO, SHOW_ALL, SHOW_COMPLITED, SHOW_INCOMPLITED, EDIT_TODO, FEATCH_TODO } from "./types";

const initialState = {
  todoList: [],
  needShow: SHOW_ALL
};

const handlers = {
  [FEATCH_TODO]: (state, action) => ({...state, todoList: action.payload}),
  [CREATE_TODO]: (state, action) => ({...state, todoList: [...state.todoList, action.payload]}),
  [CHANGE_DONE]: (state, action) => {
    const newTodoList = state.todoList.map((item) => {
        if (item.id === action.payload) item.isDone = !item.isDone;
          return item;
      });
    return {...state, todoList: newTodoList};
  },
  [DELETE_TODO]: (state, action) => {
    const newTodoList = state.todoList.filter(todo => todo.id !== action.payload);
    return  {...state, todoList: newTodoList};
  },
  [SHOW_ALL]: (state, action) => ({...state, needShow: SHOW_ALL}),
  [SHOW_COMPLITED]: (state, action) => ({...state, needShow: SHOW_COMPLITED}),
  [SHOW_INCOMPLITED]: (state, action) => ({...state, needShow: SHOW_INCOMPLITED}),
  [EDIT_TODO]: (state, action) => {
    const newTodoList = state.todoList.map((item) => {
      if (item.id === action.payload.id) item.text = action.payload.text;
          return item;
      });
    return {...state, todoList: newTodoList};
  },
  DEFAULT: state => state
}

export const todoReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}