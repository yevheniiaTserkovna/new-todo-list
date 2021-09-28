import React, { Fragment } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Alert from '../components/Alert';


export const Home = () => {
  return (
    <Fragment >
      <Alert />
      <Form />
      <hr />
      <Header />
      <TodoList />
    </Fragment>
  )
}