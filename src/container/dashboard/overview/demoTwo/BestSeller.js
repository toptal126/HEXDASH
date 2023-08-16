import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { bestSeller } = tableData;

const sellerColumns = [
  {
    title: 'Seller Name',
    dataIndex: 'sellerName',
    key: 'sellerName',
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

const BestSeller = React.memo(() => {
  const [state, setState] = useState({
    sellerTab: 'today',
  });

  const { sellerTab } = state;

  const bestSellerData = [];

  if (bestSeller !== null) {
    bestSeller[sellerTab].map((value) => {
      const { key, img, name, company, product, revenue, status } = value;
      return bestSellerData.push({
        key,
        sellerName: (
          <div className="ninjadash-info-element align-center-v">
            <div className="ninjadash-info-element__media">
              <img src={require(`../../../../static/img/sellers/${img}`)} alt="ninjadash Product" />
            </div>
            <div className="ninjadash-info-element__content">
              <span className="ninjadash-info-element__text">{name}</span>
            </div>
          </div>
        ),
        company,
        product,
        revenue,
        status,
      });
    });
  }

  const handleTabChange = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellerTab: value,
    });
  };

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={sellerTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={(e) => handleTabChange('today', e)} to="#">
                    Today
                  </Link>
                </li>
                <li className={sellerTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(e) => handleTabChange('week', e)} to="#">
                    Week
                  </Link>
                </li>
                <li className={sellerTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(e) => handleTabChange('month', e)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Best Seller"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="table-responsive">
              <Table columns={sellerColumns} dataSource={bestSellerData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default BestSeller;
