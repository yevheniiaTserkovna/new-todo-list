import React, { Fragment } from 'react';
import EditForm from './EditForm';
import TodoButtons from './TodoButtons';
import TodoCheckbox from './TodoCheckbox';

function TodoItem({
  text,
  isDone,
  editButtonHandler,
  deleteButtonHandler,
  checkboxHandler,
  editFormHandler,
  needEdit,
}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {needEdit
          ? <EditForm text={text} editFormHandler={editFormHandler}/>
          : <Fragment>
              <TodoCheckbox text={text} isDone={isDone} checkboxHandler={checkboxHandler}/>
              <TodoButtons editButtonHandler={editButtonHandler} deleteButtonHandler={deleteButtonHandler} />
            </Fragment>  
        }
    </li>
  );
}

export default TodoItem;

