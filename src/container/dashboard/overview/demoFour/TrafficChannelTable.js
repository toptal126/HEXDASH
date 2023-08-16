import { Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { TrafficChannelTableStyle } from './Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';

import tableData from '../../../../demoData/table-data.json';

const { trafficChannel } = tableData;

function TrafficChannelTable() {
  const moreContent = (
    <>
      <NavLink to="#">
        <UilPrint />
        <span>Printer</span>
      </NavLink>
      <NavLink to="#">
        <UilBookOpen />
        <span>PDF</span>
      </NavLink>
      <NavLink to="#">
        <UilFileAlt />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink to="#">
        <UilTimes />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink to="#">
        <UilFile />
        <span>CSV</span>
      </NavLink>
    </>
  );

  const dataSource = [];
  if (trafficChannel !== null) {
    trafficChannel.map((value, key) => {
      const { icon, user, session, bounce, duration } = value;
      return dataSource.push({
        key,
        social: (
          <div className="ninjadash-social-company align-center-v">
            <div className={`ninjadash-social-company__icon ninjadash-social-company__icon-${icon}`}>
              <i className={`fa fa-${icon}`} />
            </div>
            <div className="ninjadash-social-company__content">
              <span className="ninjadash-social-company__text">{user}</span>
            </div>
          </div>
        ),
        user,
        session,
        bounce,
        duration,
      });
    });
  }

  const trafficColumns = [
    {
      title: 'Social',
      dataIndex: 'social',
      key: 'social',
    },
    {
      title: 'Users',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Sessions',
      dataIndex: 'session',
      key: 'session',
    },
    {
      title: 'Bounce',
      dataIndex: 'bounce',
      key: 'bounce',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
  ];

  return (
    <BorderLessHeading>
      <Cards title="Social Media Traffic" size="large" more={moreContent}>
        <TableDefaultStyle>
          <TrafficChannelTableStyle>
            <div className="table-responsive">
              <Table dataSource={dataSource} columns={trafficColumns} pagination={false} />
            </div>
          </TrafficChannelTableStyle>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  );
}

export default TrafficChannelTable;
