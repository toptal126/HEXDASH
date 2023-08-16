import { Table, Progress } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MarketingCampaignStyle } from './Style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

const campaignData = {
  today: [
    {
      id: 1,
      title: 'Microsoft Company',
      amount: '1045,520',
      percent: 90,
      icon: 'static/img/icon/microsoft.svg',
    },
    {
      id: 2,
      title: 'WordPress',
      amount: '2000,520',
      percent: 80,
      icon: 'static/img/icon/wordpress.svg',
    },
    {
      id: 3,
      title: 'Adidas Brand',
      amount: '1520,950',
      percent: 50,
      icon: 'static/img/icon/adidas.svg',
    },
    {
      id: 4,
      title: 'Slack',
      amount: '7045,154',
      percent: 60,
      icon: 'static/img/icon/Slack.svg',
    },
    {
      id: 5,
      title: 'Adobe CC',
      amount: '1252,220',
      percent: 60,
      icon: 'static/img/icon/adobe.svg',
    },
  ],
  week: [
    {
      id: 2,
      title: 'WordPress',
      amount: '2000,520',
      percent: 90,
      icon: 'static/img/icon/wordpress.svg',
    },
    {
      id: 1,
      title: 'Microsoft Company',
      amount: '1045,520',
      percent: 80,
      icon: 'static/img/icon/microsoft.svg',
    },
    {
      id: 4,
      title: 'Slack',
      amount: '7045,154',
      percent: 60,
      icon: 'static/img/icon/Slack.svg',
    },
    {
      id: 3,
      title: 'Adidas Brand',
      amount: '1520,950',
      percent: 50,
      icon: 'static/img/icon/adidas.svg',
    },
    {
      id: 5,
      title: 'Adobe CC',
      amount: '1252,220',
      percent: 60,
      icon: 'static/img/icon/adobe.svg',
    },
  ],
  month: [
    {
      id: 4,
      title: 'Slack',
      amount: '7045,154',
      percent: 80,
      icon: 'static/img/icon/Slack.svg',
    },
    {
      id: 5,
      title: 'Adobe CC',
      amount: '1252,220',
      percent: 70,
      icon: 'static/img/icon/adobe.svg',
    },
    {
      id: 2,
      title: 'WordPress',
      amount: '2000,520',
      percent: 60,
      icon: 'static/img/icon/wordpress.svg',
    },
    {
      id: 1,
      title: 'Microsoft Company',
      amount: '1045,520',
      percent: 80,
      icon: 'static/img/icon/microsoft.svg',
    },
    {
      id: 3,
      title: 'Adidas Brand',
      amount: '1520,950',
      percent: 50,
      icon: 'static/img/icon/adidas.svg',
    },
  ],
};

function MarketingCampaigns() {
  const [marketingCampaigns, setMarketingCampaigns] = useState('today');

  const handleChangeLocation = (value, e) => {
    e.preventDefault();
    setMarketingCampaigns(value);
  };

  const dataSource = [];

  campaignData[marketingCampaigns].map((value) => {
    const { title, amount, percent, icon, id } = value;
    return dataSource.push({
      key: id,
      name: (
        <div className="ninjadash-info-element align-center-v">
          <img src={require(`../../../../${icon}`)} alt="" />
          <span className="ninjadash-info-element__text">{title}</span>
        </div>
      ),
      amount: `$${amount}`,
      percent: `${percent}%`,
      progress: <Progress strokeWidth={10} type="circle" showInfo={false} width={25} percent={percent} />,
    });
  });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '',
      dataIndex: 'percent',
      key: 'percent',
    },
    {
      title: '',
      dataIndex: 'progress',
      key: 'progress',
    },
  ];

  return (
    <BorderLessHeading>
      <Cards
        isbutton={
          <div className="ninjadash-card-nav">
            <ul>
              <li className={marketingCampaigns === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
                <Link onClick={(event) => handleChangeLocation('today', event)} to="#">
                  Today
                </Link>
              </li>
              <li className={marketingCampaigns === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                <Link onClick={(event) => handleChangeLocation('week', event)} to="#">
                  Week
                </Link>
              </li>
              <li className={marketingCampaigns === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                <Link onClick={(event) => handleChangeLocation('month', event)} to="#">
                  Month
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Marketing Campaigns"
        size="large"
      >
        <TableDefaultStyle>
          <MarketingCampaignStyle className="table-responsive">
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
          </MarketingCampaignStyle>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  );
}

export default MarketingCampaigns;
