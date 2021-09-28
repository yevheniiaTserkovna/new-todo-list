import React from 'react';

function TodoCheckbox({ text, isDone, checkboxHandler }) {
  return (
    <div>
      <input 
        className="form-check-input me-1" 
        type="checkbox" 
        onChange={checkboxHandler} 
        checked={isDone}
      />
      {text}
    </div>
  );
}

export default TodoCheckbox;
