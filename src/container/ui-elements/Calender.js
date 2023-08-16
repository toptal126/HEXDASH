import React, { useState } from 'react';
import { Row, Col, Calendar, Badge } from 'antd';
import moment from 'moment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CalendarWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

function Calendars() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Calendar',
    },
  ];
  const [setState] = useState({
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  });

  const onPanelChange = (value) => {
    setState({ value });
  };

  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
    return true;
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Calendar" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={24}>
            <Cards title="Basic">
              <CalendarWrapper>
                <Calendar onPanelChange={onPanelChange} />
              </CalendarWrapper>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards title="Notice Calendar">
              <CalendarWrapper>
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
              </CalendarWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Calendars;
