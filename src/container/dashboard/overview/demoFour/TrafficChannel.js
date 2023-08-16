import React from 'react';
import { Progress, Table } from 'antd';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { TrafficTableWrapper } from './Style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';

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

const locationColumns = [
  {
    title: '',
    dataIndex: 'channel',
    key: 'channel',
    width: 200,
  },
  {
    title: '',
    dataIndex: 'traffic',
    key: 'traffic',
    width: 40,
  },
  {
    title: '',
    dataIndex: 'percentage',
    key: 'percentage',
  },
];

const trafficData = [
  {
    id: 1,
    channel: 'Facebook',
    traffic: '38,536',
    percent: 90,
    progressType: 'primary',
  },
  {
    id: 2,
    channel: 'Instragram',
    traffic: '28,536',
    percent: 70,
    progressType: 'info',
  },
  {
    id: 3,
    channel: 'WhatsApp',
    traffic: '18,536',
    percent: 60,
    progressType: 'success',
  },
  {
    id: 4,
    channel: 'Twitter',
    traffic: '15,536',
    percent: 55,
    progressType: 'secondary',
  },
  {
    id: 5,
    channel: 'YouTube',
    traffic: '10,536',
    percent: 50,
    progressType: 'warning',
  },
  {
    id: 6,
    channel: 'LinkedIn',
    traffic: '9,536',
    percent: 45,
    progressType: 'dark',
  },
];

function TrafficChannel() {
  const locationData = [];

  trafficData.map(({ id, channel, traffic, percent, progressType }) => {
    return locationData.push({
      key: id,
      channel: <span className="ninjadash-social-channel">{channel}</span>,
      traffic: <span className="ninjadash-traffic">{traffic}</span>,
      percentage: (
        <Progress
          percent={percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className={`progress-dt progress-${progressType}`}
        />
      ),
    });
  });

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards title="Social Media Traffic" more={moreContent}>
          <TrafficTableWrapper>
            <div className="table-bordered table-responsive">
              <Table columns={locationColumns} dataSource={locationData} pagination={false} showHeader={false} />
            </div>
          </TrafficTableWrapper>
        </Cards>
      </BorderLessHeading>
    </div>
  );
}

export default TrafficChannel;
