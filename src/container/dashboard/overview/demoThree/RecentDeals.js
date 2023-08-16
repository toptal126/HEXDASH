import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { recentDeal } = tableData;

const dealColumns = [
  {
    title: 'Product Name',
    dataIndex: 'productname',
    key: 'prroductname',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const RecentDeal = React.memo(() => {
  const [dealTab, setDealTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setDealTab(value);
  };

  const dealTableData = [];

  recentDeal[dealTab].map((value) => {
    const { key, img, name, price } = value;
    return dealTableData.push({
      key,
      productname: (
        <div className="ninjadash-info-element align-center-v">
          <img src={require(`../../../../static/img/products/electronics/${img}`)} alt="ninjadash Product" />
          <span className="ninjadash-info-element__text">{name}</span>
        </div>
      ),
      price: <span className="medium-text">{price}</span>,
    });
  });

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={dealTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
                  <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                    Year
                  </Link>
                </li>
                <li className={dealTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(event) => handleTabActivation('week', event)} to="#">
                    Week
                  </Link>
                </li>
                <li className={dealTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(event) => handleTabActivation('month', event)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Recent Deals"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="ninjadash-recent-deals table-responsive">
              <Table columns={dealColumns} dataSource={dealTableData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default RecentDeal;
