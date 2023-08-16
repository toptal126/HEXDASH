import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskListStyle } from './Style';
import { TaskList } from '../../../../components/tasklist/TaskList';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';

function Tasks() {
  const [state, setState] = useState({
    taskTab: 'all',
  });

  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      taskTab: value,
    });
  };

  return (
    <BorderLessHeading>
      <TaskListStyle>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={state.taskTab === 'all' ? 'ninjadash-active' : 'ninjadash-all'}>
                  <Link onClick={(e) => handleTabActivation('all', e)} to="#">
                    All
                  </Link>
                </li>
                <li className={state.taskTab === 'favourite' ? 'ninjadash-active' : 'ninjadash-favourite'}>
                  <Link onClick={(e) => handleTabActivation('favourite', e)} to="#">
                    Favourite
                  </Link>
                </li>
                <li className={state.taskTab === 'completed' ? 'ninjadash-active' : 'ninjadash-completed'}>
                  <Link onClick={(e) => handleTabActivation('completed', e)} to="#">
                    Completed
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Task List"
          size="large"
        >
          <TaskList header="" description={false} taskStatus={state.taskTab} taskLimit={5} />
        </Cards>
      </TaskListStyle>
    </BorderLessHeading>
  );
}

export default Tasks;
