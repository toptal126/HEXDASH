import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { customTooltips } from '../../../../components/utilities/utilities';
import { BorderLessHeading } from '../../../styled';
import { CardBarChart, ChartContainer, UserOverviewStyle } from '../../Style';

import chartContent from '../../../../demoData/dashboardChartContent.json';

const { userOverviewData } = chartContent;

const UserOverview = React.memo(() => {
  const [overviewTab, setOverviewTab] = useState('today');

  /* Tab Activation */
  const handleTabActivation = (value) => {
    setOverviewTab(value);
  };

  const userOverviewDataset = [
    {
      data: userOverviewData[overviewTab].target,
      backgroundColor: '#8231D380',
      hoverBackgroundColor: '#8231D3',
      label: 'target',
      maxBarThickness: 10,
      barThickness: 16,
    },
    {
      data: userOverviewData[overviewTab].gained,
      backgroundColor: '#00AAFF80',
      hoverBackgroundColor: '#00AAFF',
      label: 'gained',
      maxBarThickness: 10,
      barThickness: 16,
    },
  ];

  return (
    <>
      {userOverviewData[overviewTab] !== null && (
        <BorderLessHeading>
          <UserOverviewStyle>
            <ChartContainer>
              <Cards
                isbutton={
                  <div className="ninjadash-card-nav">
                    <ul>
                      <li className={overviewTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                        <Link onClick={(e) => handleTabActivation('today', e)} to="#">
                          Today
                        </Link>
                      </li>
                      <li className={overviewTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                        <Link onClick={(e) => handleTabActivation('week', e)} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={overviewTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                        <Link onClick={(e) => handleTabActivation('month', e)} to="#">
                          Month
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="User Overview"
                size="large"
              >
                <CardBarChart className="ninjadash-chart-container ninjadash-chart-container-overview">
                  <div className="ninjadash-chart-top">
                    <div className="ninjadash-chart-top__item ninjadash-chart-top__item-target">
                      <span className="ninjadash-chart-top__item--label">
                        <span
                          className="ninjadash-chart-top__item--tika"
                          style={{
                            backgroundColor: userOverviewDataset[0].hoverBackgroundColor,
                          }}
                        />
                        Target
                      </span>
                      <span className="ninjadash-chart-top__item--amount">$8,550</span>
                      <span className="ninjadash-chart-top__item--status status-growth">
                        <UilUp />
                        25%
                      </span>
                    </div>
                    <div className="ninjadash-chart-top__item ninjadash-chart-top__item-gained">
                      <span className="ninjadash-chart-top__item--label">
                        <span
                          className="ninjadash-chart-top__item--tika"
                          style={{
                            backgroundColor: userOverviewDataset[1].hoverBackgroundColor,
                          }}
                        />
                        Gained
                      </span>
                      <span className="ninjadash-chart-top__item--amount">$5,550</span>
                      <span className="ninjadash-chart-top__item--status status-down">
                        <UilDown />
                        15%
                      </span>
                    </div>
                  </div>
                  <DashboardChart
                    labels={userOverviewData[overviewTab].labels}
                    datasets={userOverviewDataset}
                    barpercentage="0.5"
                    height={window.innerWidth <= 575 ? 180 : 128}
                    layout={{
                      padding: {
                        top: 20,
                      },
                    }}
                    type="bar"
                    scales={{
                      y: {
                        grid: {
                          color: '#485e9029',
                          zeroLineColor: '#485e9029',
                          borderDash: [3, 3],
                          zeroLineWidth: 1,
                          zeroLineBorderDash: [3, 3],
                        },

                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          color: '#8C90A4',
                          max: Math.max(...userOverviewData[overviewTab].gained),
                          stepSize: Math.floor(Math.max(...userOverviewData[overviewTab].gained) / 5),
                          callback(label) {
                            return `${label}k`;
                          },
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
                          color: '#8C90A4',
                        },
                      },
                    }}
                    tooltip={{
                      external: customTooltips,
                      callbacks: {
                        label(t) {
                          const dstLabel = t.dataset.label;
                          const { formattedValue } = t;
                          return ` ${dstLabel}:${formattedValue}k`;
                        },
                        labelColor(t) {
                          return {
                            backgroundColor: t.dataset.hoverBackgroundColor,
                            borderColor: 'transparent',
                          };
                        },
                      },
                    }}
                  />
                </CardBarChart>
              </Cards>
            </ChartContainer>
          </UserOverviewStyle>
        </BorderLessHeading>
      )}
    </>
  );
});

export default UserOverview;
