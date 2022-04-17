import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {hideAlert} from '../redux/action'; 

function Alert() {
  
  const dispatch = useDispatch();
  const {alert, isVisible} = useSelector(state => state.alert);

  if (!alert) {
    return null;
  }
  
  return (
    <CSSTransition
      in={isVisible}
      timeout={2000}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible mt-3`}>
        <strong>Внимание &nbsp;</strong> 
        {alert.text}
        <button type="button" className="btn-close" aria-label="Close" onClick={() => dispatch(hideAlert())}></button>
      </div>
    </CSSTransition>
  );
}

export default Alert;



