import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Spin } from 'antd';
import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { BorderLessHeading } from '../../../styled';
import { CardBarChart, ChartContainer } from '../../Style';

import chartData from '../../../../demoData/dashboardChartContent.json';

const ProfitGrowth = React.memo(() => {
  const profitGrowthData = chartData.profitGrowth;

  const profitGrowthDataset = [
    {
      data: profitGrowthData.orders,
      backgroundColor: '#00AAFF50',
      hoverBackgroundColor: '#00AAFF',
      label: 'Orders',
      average: '50.8',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 49,
    },
    {
      data: profitGrowthData.sales,
      backgroundColor: '#8231D350',
      hoverBackgroundColor: '#8231D3',
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
        title={
          <div className="ninjadash-card-title-wrap">
            <span className="ninjadash-card-title-text">{profitGrowthData.title}</span>
            <span className="ninjadash-card-title-extra-text">
              <span className="ninjadash-total-chart-total">{profitGrowthData.total}</span>
              <span
                className={
                  profitGrowthData.growthStatus === 'down'
                    ? 'ninjadash-total-chart-status ninjadash-total-chart-status-down'
                    : 'ninjadash-total-chart-status ninjadash-total-chart-status-up'
                }
              >
                {profitGrowthData.growthStatus === 'growth' ? <UilUp /> : <UilDown />}
                25.36%
              </span>
            </span>
          </div>
        }
      >
        {!profitGrowthData ? (
          <div className="sd-spin">
            <Spin />
          </div>
        ) : (
          <CardBarChart className="ninjadash-profitGroth-barCHar-wrap">
            <div className="profitGrowth-barChart">
              <div className="card-bar-top">
                <ul className="profitGrowth-list">
                  {profitGrowthDataset &&
                    profitGrowthDataset.map((item, key) => {
                      return (
                        <li key={key + 1} className="custom-label">
                          <span
                            style={{
                              backgroundColor: item.hoverBackgroundColor,
                            }}
                          />
                          {item.label}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <ChartContainer>
              <div className="ninjadash-chart-container">
                <DashboardChart
                  id="ninjadash-profit-growth"
                  labels={profitGrowthData.labels}
                  datasets={profitGrowthDataset}
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
                        max: Math.max(...profitGrowthData.orders),
                        stepSize: Math.max(...profitGrowthData.orders) / 5,
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
                  height={window.innerWidth <= 575 ? 200 : 178}
                />
              </div>
            </ChartContainer>
          </CardBarChart>
        )}
      </Cards>
    </BorderLessHeading>
  );
});

export default ProfitGrowth;
