import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Checkbox, Form, Input, Modal, Popconfirm } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TaskListStyle } from './Style';
import { BasicFormWrapper } from '../../container/styled';
import { onCompleteUpdate, onStarUpdate, ontaskDelete, ontaskEdit } from '../../redux/task/actionCreator';
import { Button } from '../buttons/buttons';

function TaskList({ taskStatus, header, description, taskLimit }) {
  /* Get Data From Redux Store */
  const { task } = useSelector((state) => {
    return {
      task: state.Task.data,
    };
  });

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  /* Defaine Initial Local state */
  const [state, setState] = useState({
    visible: false,
    taskEditId: '',
    taskDeleteId: '',
    editableItem: {},
  });

  /* Handle Modals */
  const showModal = (id, item) => {
    setState({
      ...state,
      taskEditId: id,
      visible: true,
      editableItem: item,
    });
  };

  const handleTaskDelete = (id) => {
    const value = task.filter((item) => item.id !== id);
    dispatch(ontaskDelete(value));
  };

  /* Handle Modal Cancel */
  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const { taskEditId, editableItem, visible } = state;

  /* Handle Task Edit */
  const onEditHandle = (editableData, id) => {
    const updatedData = task.map((item) => {
      if (item.id === id) {
        // eslint-disable-next-line no-param-reassign
        item = editableData;
        return item;
      }
      return item;
    });

    dispatch(ontaskEdit(updatedData));
    setState({
      ...state,
      visible: false,
    });
  };

  /* Handle Task Favourite */
  const onFavouriteHandle = (ts, id) => {
    dispatch(onStarUpdate(ts, id));
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(editableItem);
    }
  }, [form, editableItem, visible]);

  return (
    <TaskListStyle>
      <div className="ninjadash-tassklist-wrap">
        {header === '' ? (
          ''
        ) : (
          <div className="ninjadash-tasklist-head">
            <h2 className="ninjadash-tasklist-head__title">{header}</h2>
          </div>
        )}

        <div className="ninjadash-tasklist-body">
          {/* Favourite Task */}
          {taskStatus === 'favourite' ? (
            task.filter((item) => item.favourite).length > 0 ? (
              <ul className="ninjadash-tasklist">
                {task
                  .slice(0, taskLimit || task.length)
                  .sort((a, b) => b.id - a.id)
                  .filter((item) => item.favourite)
                  .map((item, i) => {
                    return (
                      <li className="ninjadash-tasklist-item" key={i}>
                        <div className="ninjadash-tasklist-item__content">
                          <div className="ninjadash-tasklist-item__title">
                            <Checkbox
                              checked={!!item.completed}
                              onChange={() => dispatch(onCompleteUpdate(task, item.id))}
                            >
                              {item.title}
                            </Checkbox>
                          </div>
                          {description ? (
                            <div className="ninjadash-tasklist-item__text">
                              <p>{item.description}</p>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="ninjadash-tasklist-item__action">
                          <Link className="ninjadash-edit" to="#" onClick={() => showModal(item.id, item)}>
                            <UilEdit />
                          </Link>
                          <Link
                            to="#"
                            className={`${item.favourite ? 'task-favourite active' : 'task-favourite'}`}
                            onClick={() => onFavouriteHandle(task, item.id)}
                          >
                            <UilStar />
                          </Link>
                          <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => handleTaskDelete(item.id)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Link className="ninjadash-delete" to="#">
                              <UilTimes />
                            </Link>
                          </Popconfirm>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <div className="ninjadash-tasklist-empty">
                <span>Sorry !! No Favourite Task Found :(</span>
              </div>
            )
          ) : /* Completed Task */
          taskStatus === 'completed' ? (
            task.filter((item) => item.completed).length > 0 ? (
              <ul className="ninjadash-tasklist">
                {task
                  .slice(0, taskLimit || task.length)
                  .sort((a, b) => b.id - a.id)
                  .filter((item) => item.completed)
                  .map((item, i) => {
                    return (
                      <li className="ninjadash-tasklist-item" key={i}>
                        <div className="ninjadash-tasklist-item__content">
                          <div className="ninjadash-tasklist-item__title">
                            <Checkbox
                              checked={!!item.completed}
                              onChange={() => dispatch(onCompleteUpdate(task, item.id))}
                            >
                              {item.title}
                            </Checkbox>
                          </div>
                          {description ? (
                            <div className="ninjadash-tasklist-item__text">
                              <p>{item.description}</p>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="ninjadash-tasklist-item__action">
                          <Link className="ninjadash-edit" to="#" onClick={() => showModal(item.id, item)}>
                            <UilEdit />
                          </Link>
                          <Link
                            to="#"
                            className={`${item.favourite ? 'task-favourite active' : 'task-favourite'}`}
                            onClick={() => onFavouriteHandle(task, item.id)}
                          >
                            <UilStar />
                          </Link>
                          <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => handleTaskDelete(item.id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Link className="ninjadash-delete" to="#">
                              <UilTimes />
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
            ) /* All Task */
          ) : task.length > 0 ? (
            <ul className="ninjadash-tasklist">
              {task
                .slice(0, taskLimit || task.length)
                .sort((a, b) => b.id - a.id)
                .map((item, i) => {
                  return (
                    <li className="ninjadash-tasklist-item" key={i}>
                      <div className="ninjadash-tasklist-item__content">
                        <div className="ninjadash-tasklist-item__title">
                          <Checkbox
                            checked={!!item.completed}
                            onChange={() => dispatch(onCompleteUpdate(task, item.id))}
                          >
                            {item.title}
                          </Checkbox>
                        </div>
                        {description ? (
                          <div className="ninjadash-tasklist-item__text">
                            <p>{item.description}</p>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="ninjadash-tasklist-item__action">
                        <Link className="ninjadash-edit" to="#" onClick={() => showModal(item.id, item)}>
                          <UilEdit />
                        </Link>
                        <Link
                          to="#"
                          className={`${item.favourite ? 'task-favourite active' : 'task-favourite'}`}
                          onClick={() => onFavouriteHandle(task, item.id)}
                        >
                          <UilStar />
                        </Link>
                        <Popconfirm
                          title="Are you sure to delete this task?"
                          onConfirm={() => handleTaskDelete(item.id)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Link className="ninjadash-delete" to="#">
                            <UilTimes />
                          </Link>
                        </Popconfirm>
                      </div>
                    </li>
                  );
                })}
            </ul>
          ) : (
            <div className="ninjadash-tasklist-empty">
              <span>Sorry !! No Task Found :(</span>
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Edit Task"
        className="ninjadash-addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
        forceRender
      >
        <div className="ninjadash-addTask-modal-inner">
          {task
            .sort((a, b) => b.id - a.id)
            .filter((item) => item.id === taskEditId)
            .map((value, i) => {
              return (
                <BasicFormWrapper key={i}>
                  <Form form={form} name="add-task" onFinish={(eData) => onEditHandle(eData, value.id)}>
                    <Form.Item
                      rules={[{ required: true, message: 'Please add a Title' }]}
                      name="title"
                      initialValue={value.title}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="description" initialValue={value.description}>
                      <Input.TextArea rows={4} placeholder="Add Description" />
                    </Form.Item>
                    <Form.Item hidden="true" name="favourite" initialValue={value.favourite}>
                      <Input />
                    </Form.Item>
                    <Form.Item hidden="true" name="completed" initialValue={value.completed}>
                      <Input />
                    </Form.Item>
                    <div className="ninjadash-modal-actions">
                      <Button size="small" type="white" key="cancel" outlined onClick={handleCancel}>
                        Cancel
                      </Button>
                      <Button htmlType="submit" size="small" type="primary" key="submit">
                        Edit
                      </Button>
                    </div>
                  </Form>
                </BasicFormWrapper>
              );
            })}
        </div>
      </Modal>
    </TaskListStyle>
  );
}

TaskList.propTypes = {
  header: propTypes.string,
  description: propTypes.bool,
  taskStatus: propTypes.string,
  taskLimit: propTypes.number,
};
export { TaskList };
