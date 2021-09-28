import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));