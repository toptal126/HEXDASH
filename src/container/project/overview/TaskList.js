import React, { useState } from 'react';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { TasklistAction } from '../style';

function TaskList() {
  const [state, setState] = useState({
    selectedRowKeys: [],
    selectedRows: [],
  });
  const dataSource = [
    {
      key: '1',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <UilExpandArrows />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '2',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <UilExpandArrows />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '3',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <UilExpandArrows />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '4',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <UilExpandArrows />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '5',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <UilExpandArrows />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '6',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <UilExpandArrows />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <UilEye />
                    View
                  </Link>
                  <Link to="#">
                    <UilEdit />
                    Edit
                  </Link>
                  <Link to="#">
                    <UilTrashAlt />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
  ];

  const columns = [
    {
      dataIndex: 'title',
      key: 'title',
    },
    {
      dataIndex: 'component',
      key: 'component',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ ...state, selectedRowKeys, selectedRows });
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="task-list-inner table-responsive">
      <Table pagination={false} rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
      <div className="tasklist-action">
        <Button type="primary" size="large" transparented>
          <UilPlus /> Add New Task
        </Button>
      </div>
    </div>
  );
}

export default TaskList;
