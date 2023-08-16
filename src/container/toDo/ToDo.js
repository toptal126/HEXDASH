import React, { useState } from 'react';
import { Row, Col, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { TodoStyle } from './Style';
import { Main, BasicFormWrapper } from '../styled';
import { Modal } from '../../components/modals/antd-modals';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ToDoAddData } from '../../redux/todo/actionCreator';
import ToDos from '../../components/todo/Todo';

function ToDo() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'To Do',
    },
  ];
  const todoData = useSelector((state) => state.Todo.data);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    inputData: '',
    selectedRowKeys: [],
  });
  const { inputData } = state;

  const [form] = Form.useForm();

  const onInputChange = (e) => {
    setState({
      ...state,
      inputData: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    const arrayData = [];
    todoData.map((data) => {
      return arrayData.push(data.key);
    });
    const max = Math.max(...arrayData);
    if (inputData !== '') {
      dispatch(
        ToDoAddData([
          ...todoData,
          {
            key: max + 1,
            item: inputData,
            time: new Date().getTime(),
            favorite: false,
          },
        ]),
      );
      setState({
        ...state,
        inputData: '',
        visible: false,
      });
    } else {
      alert('Please Give a Task Title...');
    }
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="To Do" routes={PageRoutes} />
      <Main>
        <Row gutter={30}>
          <Col xs={24}>
            <TodoStyle>
              <ToDos isApp todoData={todoData} showModal={showModal} />
            </TodoStyle>
          </Col>
        </Row>
        <Modal
          type={state.modalType}
          title="Add New Todo"
          visible={state.visible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="todo-modal">
            <BasicFormWrapper>
              <Form className="adTodo-form" name="todoAdd" form={form} onFinish={onSubmitHandler}>
                <Input value={inputData} onChange={onInputChange} placeholder="Input Item Name......." />
                <br />
                <br />

                <Button onClick={showModal} htmlType="submit" className="btn-adTodo" type="primary" size="large">
                  Add New
                </Button>
              </Form>
            </BasicFormWrapper>
          </div>
        </Modal>
      </Main>
    </>
  );
}

export default ToDo;
