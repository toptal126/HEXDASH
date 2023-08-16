import React from 'react';
import { TaskList } from '../../../components/tasklist/TaskList';
import { TaskListWrap } from '../style';

function Favourite() {
  return (
    <TaskListWrap className="mb-30">
      <TaskList header="Task List" description taskStatus="favourite" taskLimit={10} />
    </TaskListWrap>
  );
}

export default Favourite;
