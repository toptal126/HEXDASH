import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { activeUserData } = tableData;

const sellerColumns = [
  {
    title: 'Username Name',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const ActiveUser = React.memo(() => {
  const [userTab, setUserTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setUserTab(value);
  };

  const userTableData = [];

  activeUserData[userTab].map((value) => {
    const { key, img, name, company, product, revenue, status } = value;
    return userTableData.push({
      key,
      username: (
        <div className="ninjadash-info-element align-center-v">
          <img src={require(`../../../../static/img/sellers/${img}`)} alt="ninjadash Img" />
          <span className="ninjadash-info-element__text">{name}</span>
        </div>
      ),
      company,
      product,
      revenue,
      status: <span className={`status ${status.toLowerCase()}`}>{status}</span>,
    });
  });

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={userTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
                  <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                    Year
                  </Link>
                </li>
                <li className={userTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(event) => handleTabActivation('week', event)} to="#">
                    Week
                  </Link>
                </li>
                <li className={userTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(event) => handleTabActivation('month', event)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Active User"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="table-responsive">
              <Table columns={sellerColumns} dataSource={userTableData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default ActiveUser;
