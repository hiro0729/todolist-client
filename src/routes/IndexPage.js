import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TodoList from '../components/TodoList'

const IndexPage = ({ dispatch, list, input }) => {

  function handleInputChange(e) {
    dispatch({
      type: 'todolist/inputChange',
      value: e.target.value,
    })
  }

  function handleAdd(content) {
    dispatch({
      type: 'todolist/add',
      content: content,
    });
  }

  function handelDelete(id) {
    dispatch({
      type:'todolist/del',
      id,
    })
  }

  return (
    <div className={styles.normal}>
      <h2>My Todo List</h2>
      <TodoList inputChange={handleInputChange} onAdd={handleAdd} onDelete={handelDelete} todolist={list} inputText={input} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ todolist }) => ({
  list: todolist.list,
  input: todolist.input
}))(IndexPage);
