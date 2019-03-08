import React from 'react';
import styles from './TodoList.css';
import { Input, Button,Table, Popconfirm } from 'antd';

const TodoList = ({inputChange, onAdd, onDelete, todolist, inputText}) => {

  const columns = [{
    title: 'Content',
    dataIndex: 'content',
  }, {
    title: 'Actions',
    width: '100px',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];

  return (
    <div>
      <div className={styles.inputWrapper}>
        <Input placeholder="input here" value={inputText} onChange={inputChange} style={{marginRight: '10px'}}/>
        <Button htmlType="button" type="primary" onClick={() => onAdd(inputText)}>Add</Button>
      </div>
      <Table
        rowKey="id"
        dataSource={todolist}
        columns={columns}
      />
    </div>
  );
};

TodoList.propTypes = {
};

export default TodoList;
