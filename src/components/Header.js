import React from 'react';
import { connect } from 'react-redux';
import {getAllTodo, getComplitedTodo, getIncomplitedTodo} from '../additionalFunctions/getCounts'
import { showAll, showComplited, showIncomplited } from '../redux/action'; 
import { SHOW_ALL, SHOW_COMPLITED, SHOW_INCOMPLITED } from '../redux/types';

function Header({todos, needShow, showAll, showComplited, showIncomplited}) {
  const buttonClassNames = {
    allBtn: needShow === SHOW_ALL ?  'btn-info' : '',
    complitBtn: needShow === SHOW_COMPLITED ?  'btn-info' : '',
    incomplitBtn: needShow === SHOW_INCOMPLITED ?  'btn-info' : ''
  };

  return (
    <div className="text-end">
      <button 
        type="button" 
        onClick={showAll} 
        className={`btn btn-secondary ${buttonClassNames.allBtn} mx-3`}
      >
          All ({ getAllTodo(todos) })
        </button>
      <button 
        type="button" 
        onClick={showComplited} 
        className={`btn btn-secondary ${buttonClassNames.complitBtn} mx-3`}
      >
        Complited ( {getComplitedTodo(todos)} )
      </button>
      <button 
        type="button" 
        onClick={showIncomplited} 
        className={`btn btn-secondary ${buttonClassNames.incomplitBtn} mx-3`}
      >
        Incompleted ( {getIncomplitedTodo(todos) })
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todoList,
    needShow: state.todo.needShow
  };
}

const mapDispatchToProps = {
  showAll,
  showComplited,
  showIncomplited
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

