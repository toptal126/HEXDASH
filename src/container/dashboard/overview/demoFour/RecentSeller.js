import { Table } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RecentSellerStyle } from './Style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { resentSeller } = tableData;

function RecentSeller() {
  const [state, setState] = useState({
    sellerStatus: 'all',
  });

  const handleTabChange = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellerStatus: value,
    });
  };

  /* State destructuring */
  const { sellerStatus } = state;
  const dataSource = [];
  if (sellerStatus === 'all') {
    if (resentSeller !== null) {
      resentSeller[sellerStatus].map((value, key) => {
        const { title, id, price, company, device, userImg, status } = value;
        return (
          key <= 3 &&
          dataSource.push({
            key: id,
            name: (
              <div className="ninjadash-info-element align-center-v">
                <img style={{ width: '40px' }} src={require(`../../../../static/img/sellers/${userImg}`)} alt="" />
                <span className="ninjadash-info-element__text">{title}</span>
              </div>
            ),
            company,
            device,
            price: `$${price}`,
            status,
          })
        );
      });
    }
  } else if (resentSeller !== null) {
    resentSeller[sellerStatus]
      .filter((item) => item.status === sellerStatus)
      .map((value, key) => {
        const { title, id, price, company, device, userImg, status } = value;
        return (
          key <= 3 &&
          dataSource.push({
            key: id,
            name: (
              <div className="ninjadash-info-element align-center-v">
                <img style={{ width: '40px' }} src={require(`../../../../static/img/sellers/${userImg}`)} alt="" />
                <span className="ninjadash-info-element__text">{title}</span>
              </div>
            ),
            company,
            device,
            price: `$${price}`,
            status,
          })
        );
      });
  }

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: '',
      dataIndex: 'device',
      key: 'device',
    },
    {
      title: '',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <BorderLessHeading>
      <Cards
        isbutton={
          <div className="ninjadash-card-nav">
            <ul>
              <li className={state.sellerStatus === 'all' ? 'ninjadash-active' : 'ninjadash-all'}>
                <Link onClick={(e) => handleTabChange('all', e)} to="#">
                  All
                </Link>
              </li>
              <li className={state.sellerStatus === 'done' ? 'ninjadash-active' : 'ninjadash-done'}>
                <Link onClick={(e) => handleTabChange('done', e)} to="#">
                  Done
                </Link>
              </li>
              <li className={state.sellerStatus === 'pending' ? 'ninjadash-active' : 'ninjadash-pending'}>
                <Link onClick={(e) => handleTabChange('pending', e)} to="#">
                  Pending
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Recent Seller"
        size="large"
      >
        <TableDefaultStyle>
          <RecentSellerStyle>
            <div className="table-responsive">
              <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
            </div>
          </RecentSellerStyle>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  );
}

export default RecentSeller;
