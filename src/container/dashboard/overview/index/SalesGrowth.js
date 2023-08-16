import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Spin } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { BorderLessHeading } from '../../../styled';
import { CardBarChart, ChartContainer } from '../../Style';

import chartData from '../../../../demoData/dashboardChartContent.json';

const SalesGrowth = React.memo(() => {
  const salesGrowthData = chartData.salesGrowth;

  const [state, setState] = useState({
    sellingTab: 'today',
  });

  /* State destructuring */
  const { sellingTab } = state;

  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      sellingTab: value,
    });
  };

  const salesGrowthDataset = [
    {
      data: salesGrowthData[sellingTab].orders,
      backgroundColor: '#C097E9',
      hoverBackgroundColor: '#8231D3',
      label: 'Orders',
      average: '50.8',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 49,
    },
    {
      data: salesGrowthData[sellingTab].sales,
      backgroundColor: '#7FD4FF',
      hoverBackgroundColor: '#00AAFF',
      label: 'Sales',
      average: '$28k',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 60,
    },
  ];
  return (
    <BorderLessHeading>
      <Cards
        isbutton={
          <div className="ninjadash-card-nav">
            <ul>
              <li className={sellingTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                <Link onClick={(e) => handleChangePeriod('today', e)} to="#">
                  Today
                </Link>
              </li>
              <li className={sellingTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                <Link onClick={(e) => handleChangePeriod('week', e)} to="#">
                  Week
                </Link>
              </li>
              <li className={sellingTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                <Link onClick={(e) => handleChangePeriod('month', e)} to="#">
                  Month
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Sales Growth"
      >
        {!salesGrowthData[sellingTab] ? (
          <div className="sd-spin">
            <Spin />
          </div>
        ) : (
          <CardBarChart className="ninjadash-profitGroth-barCHar-wrap">
            <div className="ninjadash-chart-top">
              <div className="ninjadash-chart-top__item ninjadash-chart-top__item-order">
                <span className="ninjadash-chart-top__item--amount">$8,550</span>
                <span className="ninjadash-chart-top__item--status status-growth">
                  <UilUp />
                  25%
                </span>
              </div>
              <div className="ninjadash-chart-top__item ninjadash-chart-top__item-sale">
                <span className="ninjadash-chart-top__item--amount">$5,550</span>
                <span className="ninjadash-chart-top__item--status status-down">
                  <UilDown />
                  15%
                </span>
              </div>
            </div>
            <ChartContainer>
              <div className="ninjadash-chart-container">
                <DashboardChart
                  id="ninjadash-profit-growth"
                  labels={salesGrowthData[sellingTab].labels}
                  datasets={salesGrowthDataset}
                  type="bar"
                  layout={{
                    padding: {
                      top: 20,
                    },
                  }}
                  tooltip={{
                    callbacks: {
                      label(t) {
                        const dstLabel = t.dataset.label;
                        const { formattedValue } = t;
                        return `  ${formattedValue} ${dstLabel}`;
                      },
                      labelColor(t) {
                        return {
                          backgroundColor: t.dataset.hoverBackgroundColor,
                          borderColor: 'transparent',
                        };
                      },
                    },
                  }}
                  scales={{
                    y: {
                      grid: {
                        color: '#485e9029',
                        borderDash: [3, 3],
                        zeroLineColor: '#485e9029',
                        zeroLineWidth: 1,
                        zeroLineBorderDash: [3, 3],
                      },
                      ticks: {
                        beginAtZero: true,
                        fontSize: 12,
                        fontColor: '#182b49',
                        max: Math.max(...salesGrowthData[sellingTab].orders),
                        stepSize: Math.max(...salesGrowthData[sellingTab].orders) / 5,
                        display: true,
                        min: 0,
                        padding: 10,
                      },
                    },

                    x: {
                      grid: {
                        display: true,
                        zeroLineWidth: 2,
                        zeroLineColor: '#fff',
                        color: 'transparent',
                        z: 1,
                      },
                      ticks: {
                        beginAtZero: true,
                        fontSize: 12,
                        fontColor: '#182b49',
                        min: 0,
                      },
                    },
                  }}
                  height={window.innerWidth <= 575 ? 200 : 195}
                />
              </div>
            </ChartContainer>
          </CardBarChart>
        )}
      </Cards>
    </BorderLessHeading>
  );
});

export default SalesGrowth;
