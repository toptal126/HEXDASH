import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { customTooltips, chartLinearGradient } from '../../../../components/utilities/utilities';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { SalesRevenueWrapper, ChartContainer } from '../../Style';
import { BorderLessHeading } from '../../../styled';

import chartContent from '../../../../demoData/dashboardChartContent.json';

const { earnings } = chartContent;

const MonthlyEarning = React.memo(({ title }) => {
  const [earningsTab, setEarningsTab] = useState('today');

  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setEarningsTab(value);
  };

  const earningsData = earnings !== null && [
    {
      data: earnings[earningsTab].users,
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('ninjadash-earning-revenue'), 300, {
          start: '#8231D340',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#8231D3',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
    },
  ];

  return (
    <SalesRevenueWrapper>
      {earningsData !== null && (
        <BorderLessHeading>
          <ChartContainer>
            <Cards
              isbutton={
                <div className="ninjadash-card-nav">
                  <ul>
                    <li className={earningsTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                      <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                        Today
                      </Link>
                    </li>
                    <li className={earningsTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                      <Link onClick={(event) => handleTabActivation('week', event)} to="#">
                        Week
                      </Link>
                    </li>
                    <li className={earningsTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                      <Link onClick={(event) => handleTabActivation('month', event)} to="#">
                        Month
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title={title}
              size="large"
            >
              <div className="ninjadash-chart-container ninjadash-sales-revenue-lineChart">
                <DashboardChart
                  id="ninjadash-earning-revenue"
                  labels={earnings[earningsTab].labels}
                  datasets={earningsData}
                  tooltip={{
                    custom: customTooltips,
                    callbacks: {
                      title() {
                        return `Total Revenue`;
                      },
                      label(t) {
                        const { formattedValue, dataset } = t;
                        return `${formattedValue}k ${dataset.label}`;
                      },
                    },
                  }}
                  height={window.innerWidth <= 767 ? 200 : 90}
                />
              </div>
            </Cards>
          </ChartContainer>
        </BorderLessHeading>
      )}
    </SalesRevenueWrapper>
  );
});

MonthlyEarning.defaultProps = {
  title: 'Monthly Earning',
};

MonthlyEarning.propTypes = {
  title: PropTypes.string,
};

export default MonthlyEarning;
