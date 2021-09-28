import React, { useState } from 'react';

function EditForm({ text, editFormHandler }) {
  const [inputText, setinputText] = useState(text);

  const  inputHandler = (event) => {
    setinputText(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    editFormHandler(inputText);
  }

  return (
    <div className="editForm">
      <form onSubmit={submitHandler}> 
        <div className="form-group pt-3 pb-3">
          <input 
            type="text" 
            autoFocus
            className="form-control" 
            name="edit" 
            value={inputText} 
            onChange={inputHandler} 
            placeholder="введите заметку"
          /> 
        </div>
      </form>
    </div>
  );
}

export default EditForm;