import React from 'react';

function TodoButtons({ editButtonHandler, deleteButtonHandler }) {
  return (
    <div>
      <button 
        type="button" 
        onClick={editButtonHandler}
        className="btn btn-outline-info btn-sm mx-1"
      >
        Edit
      </button>
      <button 
        type="button" 
        onClick={deleteButtonHandler} 
        className="btn btn-outline-danger btn-sm ms-1"
      >
        Del
      </button>
    </div>
  );
}

export default TodoButtons;