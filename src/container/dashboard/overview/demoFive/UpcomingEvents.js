/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { TableDefaultStyle, BasicFormWrapper, BorderLessHeading } from '../../../styled';
import { UpcomingEventsStyleWrap } from '../../Style';

const events = {
  today: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '19',
      month: 'March',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'secondary',
      title: 'International Web Conference 2021',
      date: '19',
      month: 'March',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'info',
      title: 'Dribble Designer Meetup',
      date: '19',
      month: 'March',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '19',
      month: 'March',
      time: '11:30 AM',
    },
  ],
  week: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '12',
      month: 'September',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'info',
      title: 'International Web Conference 2021',
      date: '16',
      month: 'September',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'secondary',
      title: 'Dribble Designer Meetup',
      date: '15',
      month: 'September',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '13',
      month: 'September',
      time: '11:30 AM',
    },
  ],
  month: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '24',
      month: 'April',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'secondary',
      title: 'International Web Conference 2021',
      date: '24',
      month: 'April',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'info',
      title: 'Dribble Designer Meetup',
      date: '24',
      month: 'April',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '28',
      month: 'April',
      time: '11:30 AM',
    },
  ],
};

function UpcomingEvents() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    tabValue: 'today',
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
    taskEditId: '',
    editableItem: {},
  });
  const { taskEditId, editableItem, visible } = state;
  const [eventState, setEventState] = useState(null);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setEventState(events[state.tabValue]);
    }

    return () => (unmounted = true);
  }, [state.tabValue]);

  const tabChange = (value) => {
    setState({
      ...state,
      tabValue: value,
    });
  };

  const showModal = (id, item) => {
    setState({
      ...state,
      visible: true,
      collapsed: false,
      taskEditId: id,
      editableItem: item,
    });
  };

  const handleTaskDelete = (id) => {
    events[state.tabValue] = events[state.tabValue].filter((item) => item.id !== id);
    setEventState(eventState.filter((item) => item.id !== id));
  };

  const dataSource = [];

  if (eventState)
    eventState.map((value) => {
      const { title, time, date, month, type, id } = value;
      return dataSource.push({
        key: id,
        name: (
          <div className="ninjadash-event-details align-center-v">
            <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
              <span className="ninjadash-event-day">{date}</span>
              <span className="ninjadash-event-month">{month}</span>
            </div>
            <article className="ninjadash-event-details__content">
              <h4 className="ninjadash-event-details__title">{title}</h4>
              <p className="ninjadash-event-details__time">{time}</p>
            </article>
          </div>
        ),
        actions: (
          <div className="ninjadash-event-details-action">
            <Link
              to="#"
              className="ninjadash-event-details-action__edit"
              onClick={() => showModal(id, { title, time, date, id })}
            >
              <UilEdit />
            </Link>
            <Link to="#" className="ninjadash-event-details-action__delete" onClick={() => handleTaskDelete(id)}>
              <UilTimes />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleUpdate = (value) => {
    events[state.tabValue].map((item) => {
      if (item.id === taskEditId) {
        return (item.title = value.title);
      }
      return item;
    });

    eventState.map((item) => {
      if (item.id === taskEditId) {
        return (item.title = value.title);
      }
      return item;
    });
    return setState({
      ...state,
      visible: false,
    });
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(editableItem);
    }
  }, [form, editableItem, visible]);

  return (
    <BorderLessHeading>
      <UpcomingEventsStyleWrap>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={state.tabValue === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={() => tabChange('today')} to="#">
                    Today
                  </Link>
                </li>
                <li className={state.tabValue === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={() => tabChange('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.tabValue === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={() => tabChange('month')} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Upcoming Events"
          size="large"
        >
          <TableDefaultStyle>
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
          </TableDefaultStyle>
        </Cards>
      </UpcomingEventsStyleWrap>
      <Modal
        title="Update Events"
        className="ninjadash_addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="ninjadash_addTask-modal-inner">
          <BasicFormWrapper>
            <Form form={form} name="add-task" onFinish={handleUpdate}>
              <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                <Input placeholder="Title" />
              </Form.Item>
              <div className="ninjadash-modal-actions">
                <Button size="small" type="white" key="cancel" outlined onClick={handleCancel}>
                  Cancel
                </Button>
                <Button htmlType="submit" size="small" type="primary" key="submit">
                  Update Event
                </Button>
              </div>
            </Form>
          </BasicFormWrapper>
        </div>
      </Modal>
    </BorderLessHeading>
  );
}

export default UpcomingEvents;
