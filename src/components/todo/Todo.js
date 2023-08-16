/* eslint-disable no-param-reassign */
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilSync from '@iconscout/react-unicons/icons/uil-sync';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Popconfirm } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortableElement, sortableHandle } from 'react-sortable-hoc';
import { TodoStyleWrapper } from './style';
import { BorderLessHeading } from '../../container/styled';
import { onStarUpdate, ToDoDeleteData } from '../../redux/todo/actionCreator';
import { Button } from '../buttons/buttons';
import { Cards } from '../cards/frame/cards-frame';
import { TaskListStyle } from '../tasklist/Style';

function ToDos({ todoData, showModal, isApp, title, tab, status }) {
  const dispatch = useDispatch();
  const todoDataMore = useSelector((state) => state.Todo.data);

  const DragHandle = sortableHandle(() => <UilExpandArrows />);

  const onHandleDelete = (key) => {
    const data = todoDataMore.map((item) => {
      if (item.key === key) {
        item.status = 'deleted';
      }
      return item;
    });

    const hardDelete = todoDataMore.filter((item) => item.key !== key);

    dispatch(ToDoDeleteData(status === 'deleted' ? hardDelete : data));
  };

  const onHandleCompleted = (key) => {
    const data = todoDataMore.map((item) => {
      if (item.key === key) {
        item.isFinish = !item.isFinish;
      }
      return item;
    });
    dispatch(ToDoDeleteData(data));
  };

  const onHandleRestore = (key) => {
    const data = todoDataMore.map((item) => {
      if (item.key === key) {
        item.status = 'new';
      }
      return item;
    });
    dispatch(ToDoDeleteData(data));
  };

  const dataSource = [];

  if (todoData !== null) {
    todoData.map((item, index) => {
      return dataSource.push({
        key: index + 1,
        index,
        action: isApp ? (
          <div className="todos-action">
            <DragHandle />
            <Link
              className={item.favorite ? 'star active' : 'star'}
              onClick={() => dispatch(onStarUpdate(todoData, item.key))}
              to="#"
            >
              <UilStar />
            </Link>
            <Link onClick={() => onHandleDelete(item.key)} to="#">
              <UilTrashAlt />
            </Link>
          </div>
        ) : (
          <Link onClick={() => onHandleDelete(item.key)} to="#">
            <UilTimes />
          </Link>
        ),
      });
    });
  }

  const SortableItem = sortableElement((props) => <tr {...props} />);

  function DraggableBodyRow({ className, style, ...restProps }) {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex((x) => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  }

  DraggableBodyRow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  // const DraggableContainer = props => (
  //   <SortableContainer useDragHandle helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
  // );

  const cancel = () => {
    // console.log(e);
  };

  return (
    <>
      <TodoStyleWrapper>
        <BorderLessHeading>
          <Cards title={title} isbutton={tab}>
            <TaskListStyle>
              <div className="ninjadash-tassklist-wrap">
                <div className="ninjadash-tasklist-body">
                  {todoData.length > 0 ? (
                    <ul className="ninjadash-tasklist">
                      {todoData
                        .sort((a, b) => b.id - a.id)
                        .map((item, i) => {
                          return (
                            <li className="ninjadash-tasklist-item" key={i}>
                              <div className="ninjadash-tasklist-item__content">
                                <div className="ninjadash-tasklist-item__title">
                                  <Checkbox checked={item.isFinish} onChange={() => onHandleCompleted(item.key)}>
                                    {item.item}
                                  </Checkbox>
                                </div>
                              </div>
                              <div className="ninjadash-tasklist-item__action">
                                {status === 'deleted' ? (
                                  <Link onClick={() => onHandleRestore(item.key)} className="ninjadash-delete" to="#">
                                    <UilSync />
                                  </Link>
                                ) : null}
                                <Popconfirm
                                  title="Are you sure to delete this task?"
                                  onConfirm={() => onHandleDelete(item.key)}
                                  onCancel={cancel}
                                  okText="Yes"
                                  cancelText="No"
                                >
                                  <Link className="ninjadash-delete" to="#">
                                    <UilTrashAlt />
                                  </Link>
                                </Popconfirm>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  ) : (
                    <div className="ninjadash-tasklist-empty">
                      <span>Sorry !! No Completed Task Found :(</span>
                    </div>
                  )}
                </div>
              </div>
            </TaskListStyle>
            {showModal ? (
              <div className="new-todo-wrap">
                <Button onClick={showModal} className="btn-toDoAdd" transparented type="primary" size="large">
                  + Add New Task
                </Button>
              </div>
            ) : null}
          </Cards>
        </BorderLessHeading>
      </TodoStyleWrapper>
    </>
  );
}

ToDos.defaultProps = {
  todoData: [],
  isApp: false,
  title: 'Todo List',
};

ToDos.propTypes = {
  todoData: PropTypes.array,
  showModal: PropTypes.func,
  isApp: PropTypes.bool,
  title: PropTypes.string,
  tab: PropTypes.node,
  status: PropTypes.string,
};
export default ToDos;
