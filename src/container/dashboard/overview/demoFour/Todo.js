import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ToDos from '../../../../components/todo/Todo';

function ToDo() {
  const [taskTab, setTaskTab] = useState('new');
  const todoData = useSelector((state) => state.Todo.data);
  const todoData2 = todoData;
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    const todoFilter = todoData2
      .filter((todo) => todo.status === taskTab || (taskTab === 'completed' && todo.isFinish))
      .slice(0, 6);
    setTodoState(todoFilter);
  }, [taskTab, todoData2]);

  const handleTabActivation = (state, e) => {
    e.preventDefault();
    setTaskTab(state);
  };

  return (
    <>
      <ToDos
        todoData={todoState}
        status={taskTab}
        tab={
          <div className="ninjadash-card-nav">
            <ul>
              <li className={taskTab === 'new' ? 'ninjadash-active' : 'ninjadash-all'}>
                <Link onClick={(e) => handleTabActivation('new', e)} to="#">
                  New
                </Link>
              </li>
              <li className={taskTab === 'deleted' ? 'ninjadash-active' : 'ninjadash-favourite'}>
                <Link onClick={(e) => handleTabActivation('deleted', e)} to="#">
                  Deleted
                </Link>
              </li>
              <li className={taskTab === 'completed' ? 'ninjadash-active' : 'ninjadash-completed'}>
                <Link onClick={(e) => handleTabActivation('completed', e)} to="#">
                  Completed
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Todo List"
      />
    </>
  );
}

export default ToDo;
