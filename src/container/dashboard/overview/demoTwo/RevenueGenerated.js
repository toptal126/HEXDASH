import { Progress, Table } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';
import { RevenueGeneratedWrapper } from '../../Style';

import tableData from '../../../../demoData/table-data.json';

const { revenueGenerated } = tableData;

const locationColumns = [
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: 'Page View',
    dataIndex: 'pageView',
    key: 'pageView',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
  },
];

const RevenueGenerated = React.memo(() => {
  const [state, setState] = useState({
    revenueTab: 'today',
  });

  /* State destructuring */
  const { revenueTab } = state;

  const revenueData = [];

  if (revenueGenerated !== null) {
    revenueGenerated[revenueTab].map((value) => {
      const { key, name, icon, visitors, pageView, revenue, trend, type } = value;
      return revenueData.push({
        key,
        source: (
          <div className="ninjadash-revenue-company align-center-v">
            <div className={`ninjadash-revenue-company__icon ninjadash-revenue-company__icon-${icon}`}>
              <i className={`fa fa-${icon}`} />
            </div>
            <div className="ninjadash-revenue-company__content">
              <span className="ninjadash-revenue-company__text">{name}</span>
            </div>
          </div>
        ),
        visitors,
        pageView,
        revenue: <span className="ninjadash-revenue">{revenue}</span>,
        trend: (
          <div className={`ninjadash-trend-progress align-center-v ninjadash-trend-progress-${icon}`}>
            <span className="ninjadash-trend-percentage">{trend}%</span>
            <Progress
              percent={trend}
              strokeWidth={4}
              status="active"
              showInfo={false}
              className={`ninjadash-trend-progress ninjadash-trend-progress-${type}`}
            />
          </div>
        ),
      });
    });
  }

  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      revenueTab: value,
    });
  };

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={revenueTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={(e) => handleTabActivation('today', e)} to="#">
                    Today
                  </Link>
                </li>
                <li className={revenueTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(e) => handleTabActivation('week', e)} to="#">
                    Week
                  </Link>
                </li>
                <li className={revenueTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(e) => handleTabActivation('month', e)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Source Of Revenue Generated"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <RevenueGeneratedWrapper>
              <div className="table-responsive">
                <Table columns={locationColumns} dataSource={revenueData} pagination={false} />
              </div>
            </RevenueGeneratedWrapper>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default RevenueGenerated;
