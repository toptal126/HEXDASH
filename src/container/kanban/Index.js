/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-param-reassign */
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Col, Form, Input, Row } from 'antd';
import update from 'immutability-helper';
import propTypes from 'prop-types';
import { useCallback, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import KanbanBoardItem from './overview/KanbanBoardItem';
import UpdateTask from './overview/UpdateTask';
import { BackShadow, KanvanBoardWrap } from './Style';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ToAddBoard, ToAddTask, ToDeleteTask } from '../../redux/kanban/actionCreator';
import { Main } from '../styled';

function BoardTitleUpdate({ boardTitle, boardId, onBlur }) {
  const [value, setValue] = useState(boardTitle);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      name={`title-edit${boardId}`}
      className="title-edit"
      placeholder="Enter Title"
      onChange={onChangeHandler}
      onBlur={() => onBlur(boardId)}
      onPressEnter={() => onBlur(boardId)}
      value={value}
    />
  );
}

BoardTitleUpdate.propTypes = {
  boardTitle: propTypes.string,
  boardId: propTypes.string,
  onBlur: propTypes.func,
};

/* 
  @Todo Remove unnecessary Code and variable
*/

function Kanban() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Kanban Board',
    },
  ];
  const dispatch = useDispatch();
  const { rtl, boardData, tasks } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      boardData: state.KanbanBoard.boardData,
      tasks: state.KanbanBoard.taskData,
    };
  });

  function renderThumb({ style, ...props }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  }

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="" style={thumbStyle} />;
  };

  function renderView({ style, ...props }) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  renderThumb.propTypes = {
    style: propTypes.shape(propTypes.object),
  };

  renderView.propTypes = {
    style: propTypes.shape(propTypes.object),
  };

  const [addColumn, setAddColumn] = useState(false);

  const [state, setState] = useState({
    columnTitle: '',
    boardTitle: '',
    boardId: '',
    titleBoardId: '',
    checklistData: {
      id: 1,
      boardId: 1,
      checklist: [],
    },
    modalVisible: false,
    boardEditable: false,
    backShadow: false,
    taskId: '',
  });

  const [form] = Form.useForm();
  function KanbanColumn({ status, changeTaskStatus, children }) {
    const ref = useRef(null);
    const [, drop] = useDrop({
      accept: 'Card',
      drop(item) {
        changeTaskStatus(item.id, status);
      },
    });
    drop(ref);
    return (
      <div className="ninjadash-kanban-board-item" ref={ref}>
        <Scrollbars
          // autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          renderThumbVertical={renderThumb}
          renderView={renderView}
          renderTrackVertical={renderTrackVertical}
          renderTrackHorizontal={(props) => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
          className="ninjadash-kanban-board-item-scrolable"
        >
          {children}
        </Scrollbars>
      </div>
    );
  }

  KanbanColumn.propTypes = {
    status: propTypes.string,
    children: propTypes.array,
    changeTaskStatus: propTypes.func,
  };

  function KanbanItem({ id, children }) {
    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
      type: 'Card',
      item: () => ({ id }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(ref);
    return (
      <div className="ninjadash-kanvan-task__single" ref={ref} style={{ opacity }}>
        {children}
      </div>
    );
  }

  KanbanItem.propTypes = {
    id: propTypes.string,
    children: propTypes.object,
  };

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find((item) => item.id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, boardId: status };
      const newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });
      dispatch(ToAddTask(newTasks));
    },
    [tasks, dispatch],
  );

  const activeAddOption = (e) => {
    e.preventDefault();
    setAddColumn(true);
  };

  const diActiveAddOption = (e) => {
    e.preventDefault();
    setAddColumn(false);
  };

  const onColumnTitleChange = (e) => {
    setState({
      ...state,
      columnTitle: e.target.value,
    });
  };

  const { columnTitle, taskId, boardId, backShadow, checklistData, modalVisible, titleBoardId } = state;

  const addColumnHandler = () => {
    const arrayData = [];
    boardData.map((data) => {
      return arrayData.push(data.boardId);
    });

    const max = Math.max(...arrayData);

    if (columnTitle !== '') {
      dispatch(
        ToAddBoard([
          ...boardData,
          {
            boardId: max + 1,
            title: columnTitle,
          },
        ]),
      );
      setState({
        ...state,
        columnTitle: '',
      });
      setAddColumn(false);
    } else {
      alert('Please Enter a Column Ttile');
    }
  };

  const deleteColumnHandler = (id) => {
    const afterDeleteData = boardData.filter((board) => board.boardId !== id);
    const confirm = window.confirm('Are You sure to delete this?');
    if (confirm) {
      dispatch(ToAddBoard(afterDeleteData));
    }
    return false;
  };

  const addTaskHandler = (id) => {
    const arrayData = [];
    const taskItem = document.querySelector(`input[name="taskInput-${id}"]`).value;
    tasks.map((data) => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);

    if (taskItem !== '') {
      dispatch(
        ToAddTask([
          ...tasks,
          {
            id: `${max + 1}`,
            boardId,
            title: taskItem,
            checklist: [],
          },
        ]),
      );
      setState({
        ...state,
        boardId: '',
      });
    } else {
      alert('Please Enter a Task Ttile');
    }
  };

  const handleOnAddTask = (e, id) => {
    e.preventDefault();
    setState({
      ...state,
      boardId: id,
    });
  };

  const handleOffAddTask = (e) => {
    e.preventDefault();
    setState({
      ...state,
      boardId: '',
    });
  };

  const showModal = (dataList) => {
    setState({
      ...state,
      modalVisible: !modalVisible,
      checklistData: dataList,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      modalVisible: false,
    });
  };

  const onBoardEditable = (e, id, title) => {
    e.preventDefault();
    setState({
      ...state,
      boardEditable: true,
      boardTitle: title,
      titleBoardId: id,
    });
  };

  const onBoardEditableHide = (id) => {
    boardData.map((board) => {
      if (board.boardId === id) {
        board.title = document.querySelector(`input[name="titile-edit${id}"]`).value;
      }
      return board;
    });
    dispatch(ToAddBoard(boardData));
    setState({
      ...state,
      boardEditable: false,
      titleBoardId: '',
    });
  };

  const onBoardTitleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      boardTitle: event.target.value,
    });
  };

  const onBackShadow = (id) => {
    setState({
      ...state,
      backShadow: true,
      taskId: id,
    });
  };

  const onBackShadowHide = () => {
    setState({
      ...state,
      backShadow: false,
      taskId: '',
    });
  };

  const onTaskTitleUpdate = (value, id) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.title = value;
        setState({
          ...state,
          backShadow: false,
          taskId: '',
        });
      }
      return task;
    });
    dispatch(ToAddTask(tasks));
  };

  const onTaskTitleDelete = (e, id) => {
    e.preventDefault();
    const afterDeleteTask = tasks.filter((task) => task.id !== id);
    setState({
      ...state,
      backShadow: false,
      taskId: '',
    });
    dispatch(ToDeleteTask(afterDeleteTask));
  };
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Kanban Board" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <KanvanBoardWrap>
              <Cards headless title="Product Design">
                <DndProvider backend={HTML5Backend}>
                  <div className="ninjadash-kanban-board-list">
                    {boardData.map((board) => {
                      return (
                        <KanbanColumn key={board.boardId} status={board.boardId} changeTaskStatus={changeTaskStatus}>
                          <div
                            className={
                              board.boardId === titleBoardId
                                ? 'ninjadash-kanban-board-item__header editable'
                                : 'ninjadash-kanban-board-item__header'
                            }
                          >
                            <h4 className="list-header-title">
                              <span>{board.title}</span>
                              <Dropdown
                                content={
                                  <>
                                    <Link onClick={(e) => onBoardEditable(e, board.boardId, board.title)} to="#">
                                      <span>Edit Card Title</span>
                                    </Link>
                                    <Link onClick={() => deleteColumnHandler(board.boardId)} to="#">
                                      <span>Delete Card</span>
                                    </Link>
                                  </>
                                }
                                action={['click']}
                                className="wide-dropdwon kanbanCard-more"
                              >
                                <Link to="#" className="btn-more">
                                  <UilEllipsisH />
                                </Link>
                              </Dropdown>
                            </h4>
                            <BoardTitleUpdate
                              boardId={titleBoardId}
                              boardTitle={state.boardTitle}
                              onBoardTitleChange={onBoardTitleChange}
                              onBlur={onBoardEditableHide}
                            />
                          </div>
                          <div className="ninjadash-kanvan-task">
                            {tasks
                              .filter((item) => item.boardId === board.boardId)
                              .map((item) => {
                                return (
                                  <KanbanItem key={item.id} id={item.id}>
                                    <KanbanBoardItem
                                      taskId={taskId}
                                      onBackShadow={onBackShadow}
                                      onTaskTitleUpdate={onTaskTitleUpdate}
                                      onTaskTitleDelete={onTaskTitleDelete}
                                      showModal={showModal}
                                      data={item}
                                    />
                                  </KanbanItem>
                                );
                              })}
                          </div>

                          <div
                            className={
                              board.boardId === boardId
                                ? 'ninjadash-addTask-control add-task-on'
                                : 'ninjadash-addTask-control'
                            }
                          >
                            <Link to="#" className="btn-addTask" onClick={(e) => handleOnAddTask(e, board.boardId)}>
                              <UilPlus />
                              <span>Add Task</span>
                            </Link>

                            <div className="ninjadash-addTask-from">
                              <Input
                                name={`taskInput-${board.boardId}`}
                                className="ninjadash-addTask-input"
                                placeholder="Enter a Title"
                                onPressEnter={() => addTaskHandler(board.boardId)}
                              />
                              <div className="ninjadash-addTask-action">
                                <Button
                                  onClick={() => addTaskHandler(board.boardId)}
                                  className="add-column"
                                  htmlType="submit"
                                  size="small"
                                  type="primary"
                                >
                                  Add
                                </Button>
                                <Link to="#" onClick={handleOffAddTask}>
                                  <UilTimes />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </KanbanColumn>
                      );
                    })}
                    <div className={addColumn ? 'btn-addColumn add-column-on' : 'btn-addColumn'}>
                      <div className="btn-addColumn-inner">
                        <Link to="#" className="btn-add" onClick={activeAddOption}>
                          <UilPlus />
                          <span>Add Column</span>
                        </Link>
                        <Form className="addColumn-form" name="columnAdd" form={form} onFinish={addColumnHandler}>
                          <div className="btn-addColumn-form">
                            <Input
                              value={columnTitle}
                              className="sDash-add-column-input"
                              onChange={onColumnTitleChange}
                              placeholder="Enter Column Title"
                            />
                            <div className="ninjadash-add-column-action">
                              <Button className="add-column" htmlType="submit" size="small" type="primary">
                                Add
                              </Button>
                              <Link to="#" onClick={diActiveAddOption}>
                                <UilTimes />
                              </Link>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </DndProvider>
              </Cards>
            </KanvanBoardWrap>
          </Col>
        </Row>
      </Main>
      <UpdateTask handleCancel={handleCancel} modalVisible={modalVisible} data={checklistData} />
      {backShadow ? <BackShadow onClick={onBackShadowHide} /> : null}
    </>
  );
}

export default Kanban;
