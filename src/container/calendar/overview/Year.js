import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import { Calendar, Select } from 'antd';
import moment from 'moment';
import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AddNewEvent from './EventForm';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Modal } from '../../../components/modals/antd-modals';
import { addNewEvents, eventVisible } from '../../../redux/calendar/actionCreator';
import { BlockViewCalendarWrapper } from '../Style';

function YearCalendar() {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector((state) => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    currentYear: new Date().getFullYear(),
    maxYear: 2025,
    minYear: 2018,
    defaultValue: moment().format('YYYY-MM-DD'),
  });
  const { currentYear, maxYear, minYear, defaultValue } = state;

  useLayoutEffect(() => {
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach((element) => {
      element.addEventListener('click', () => {
        dispatch(eventVisible(true));
      });
    });
  }, [defaultValue, dispatch]);

  const onIncrement = () => {
    return (
      currentYear < maxYear &&
      setState({
        ...state,
        currentYear: currentYear + 1,
      })
    );
  };

  const onDecrement = () => {
    return (
      currentYear > minYear &&
      setState({
        ...state,
        currentYear: currentYear - 1,
      })
    );
  };

  const option = [];
  for (let i = minYear; i <= maxYear; i += 1) {
    option.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>,
    );
  }

  const handleCancel = () => {
    dispatch(eventVisible(false));
  };

  const addNew = (event) => {
    const arrayData = [];
    events.map((data) => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(addNewEvents([...events, { ...event, id: max + 1 }]));
    dispatch(eventVisible(false));
  };
  const path = '/admin/app/calendar';
  return (
    <Cards headless>
      <Modal
        className="addEvent-modal"
        footer={null}
        type="primary"
        title="Create Event"
        visible={isVisible}
        onCancel={handleCancel}
      >
        <AddNewEvent onHandleAddEvent={addNew} defaultValue={defaultValue} />
      </Modal>
      <div className="calendar-header">
        <div className="calendar-header__left">
          <Button className="btn-today" type="white" outlined>
            <NavLink to={`${path}/day`}>Today</NavLink>
          </Button>
          <div className="calender-head__navigation">
            <Button onClick={onDecrement} className="btn-navigate" type="white" outlined>
              <UilAngleLeft />
            </Button>
            <Select
              className="year-select"
              onChange={(value) => setState({ ...state, currentYear: value })}
              defaultValue={currentYear}
              value={currentYear}
              style={{ width: '100px' }}
            >
              {option}
            </Select>
            <Button className="btn-navigate" onClick={onIncrement} type="white" outlined>
              <UilAngleRight />
            </Button>
          </div>
        </div>
        <div className="calendar-header__right">
          <ul>
            <li>
              <NavLink to={`${path}/day`}>Day</NavLink>
            </li>
            <li>
              <NavLink to={`${path}/week`}>Week</NavLink>
            </li>
            <li>
              <NavLink to={`${path}/month`}>Month</NavLink>
            </li>
            <li>
              <NavLink to={`${path}/year`}>Year</NavLink>
            </li>
          </ul>
          <NavLink className="schedule-list" to={`${path}/schedule`}>
            <UilListUl />
            Schedule
          </NavLink>
        </div>
      </div>
      <BlockViewCalendarWrapper className="table-responsive">
        <Calendar mode="year" />
      </BlockViewCalendarWrapper>
    </Cards>
  );
}

export default YearCalendar;
