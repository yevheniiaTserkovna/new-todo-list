import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

//------------------------------
//for test
function logger (state) {
  return function (next) {
    return function (action) {
      console.log('action = ', action.type);
      console.log('state = ', state.getState());
      return next(action);
    }
  }
}
//-----------------------

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));