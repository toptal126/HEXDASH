import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { topProduct } = tableData;

const productColumns = [
  {
    title: 'Product Name',
    dataIndex: 'productname',
    key: 'prroductname',
  },
  {
    title: 'Deals',
    dataIndex: 'deals',
    key: 'deals',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const TopProduct = React.memo(() => {
  const [productTab, setProductTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setProductTab(value);
  };

  const productTableData = [];

  topProduct[productTab].map((value) => {
    const { key, img, name, deals, amount } = value;
    return productTableData.push({
      key,
      productname: (
        <div className="ninjadash-info-element align-center-v">
          <img src={require(`../../../../static/img/products/electronics/${img}`)} alt="ninjadash Product" />
          <span className="ninjadash-info-element__text">{name}</span>
        </div>
      ),
      deals,
      amount,
    });
  });

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={productTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
                  <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                    Year
                  </Link>
                </li>
                <li className={productTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(event) => handleTabActivation('week', event)} to="#">
                    Week
                  </Link>
                </li>
                <li className={productTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(event) => handleTabActivation('month', event)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Top Product"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="ninjadash-top-product table-responsive">
              <Table columns={productColumns} dataSource={productTableData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default TopProduct;
