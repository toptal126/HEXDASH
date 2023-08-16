import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { NewProductWrapper } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { newProduct } = tableData;

const productColumns = [
  {
    title: 'Product Name',
    dataIndex: 'pName',
    key: 'pName',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const NewProduct = React.memo(() => {
  const [state, setState] = useState({
    productTab: 'today',
  });

  /* State destructuring */
  const { productTab } = state;

  const newProductData = [];
  if (newProduct !== null) {
    newProduct[productTab].map((value) => {
      const { key, name, img, price } = value;
      return newProductData.push({
        key,
        pName: (
          <div className="ninjadash-info-element align-center-v">
            <div className="ninjadash-info-element__media">
              <img src={require(`../../../../static/img/products/electronics/${img}`)} alt="ninjadash Product" />
            </div>
            <div className="ninjadash-info-element__content">
              <span className="ninjadash-info-element__text">{name}</span>
            </div>
          </div>
        ),
        price: <span className="ninjadash-product-price">{price}</span>,
      });
    });
  }

  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setState({
      ...state,
      productTab: value,
    });
  };

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={productTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={(e) => handleTabActivation('today', e)} to="#">
                    Today
                  </Link>
                </li>
                <li className={productTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={(e) => handleTabActivation('week', e)} to="#">
                    Week
                  </Link>
                </li>
                <li className={productTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={(e) => handleTabActivation('month', e)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="New Product"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <NewProductWrapper>
              <div className="table-responsive">
                <Table columns={productColumns} dataSource={newProductData} pagination={false} />
              </div>
            </NewProductWrapper>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default NewProduct;
