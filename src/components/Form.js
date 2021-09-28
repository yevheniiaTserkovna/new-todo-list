import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo, showAlert } from '../redux/action';

function Form({createTodo, showAlert}) {
  const [state, setState] = useState('');

  const  inputHandler = (event) => {
    setState(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!state.trim()) {
      showAlert({text: 'Поле не должно быть пустым', type: 'danger'});
      return;
    }

    const newTodo = {text: state, isDone: false};
    createTodo(newTodo);

    showAlert({text: 'Вы добавили запись ' + state, type: 'success'});
    setState('');
  }

  return (
    <form onSubmit={submitHandler}> 
      <div className="form-group pt-3 pb-3">
        <input 
          type="text" 
          className="form-control" 
          name="text" 
          value={state} 
          onChange={inputHandler} 
          placeholder="введите заметку"
        /> 
      </div>
    </form>
  );
}

const mapDispatchToProps = {
  createTodo,
  showAlert
};

export default connect(null, mapDispatchToProps)(Form);