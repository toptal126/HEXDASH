import PropTypes from 'prop-types';
import React from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { NavLink } from 'react-router-dom';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { chartLinearGradient, customTooltips } from '../../../../components/utilities/utilities';
import { BorderLessHeading } from '../../../styled';
import { ChartContainer, SalesRevenueWrapper } from '../../Style';

const salesRevenue = {
  users: ['72.6K', [0, 25, 20, 5, 60, 18, 20, 45, 35, 50, 48, 45], [20, 40, 55, 26, 40, 55, 38, 35, 25, 70, 20, 80]],
  totalOrder: '8550',
  orderGrowth: '25',
  totalSales: '5550',
  salesDown: '15',
  labels: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const SalesReport = React.memo(({ title }) => {
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

  const salesRevenueDatasets = [
    {
      data: salesRevenue.users[1],
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('ninjadash-sales-revenue'), 300, {
          start: 'transparent',
          end: 'transparent',
        }),
      label: 'Total Orders',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#8231D3',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
      lineTension: 0.45,
    },
    {
      data: salesRevenue.users[2],
      borderColor: '#00AAFF',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('ninjadash-sales-revenue'), 300, {
          start: 'transparent',
          end: 'transparent',
        }),
      label: 'Total Sales',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#00AAFF',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
      lineTension: 0.45,
    },
  ];

  return (
    <SalesRevenueWrapper>
      {salesRevenue && (
        <BorderLessHeading>
          <ChartContainer>
            <Cards title={title} more={moreContent} size="large">
              <div className="ninjadash-chart-container ninjadash-sales-revenue-lineChart">
                <div className="ninjadash-chart-top">
                  <div className="ninjadash-chart-top__item ninjadash-chart-top__item-order">
                    <span className="ninjadash-chart-top__item--text">Orders</span>
                    <span className="ninjadash-chart-top__item--amount">$8,550</span>
                    <span className="ninjadash-chart-top__item--status status-growth">
                      <UilUp />
                      25%
                    </span>
                  </div>
                  <div className="ninjadash-chart-top__item ninjadash-chart-top__item-sale">
                    <span className="ninjadash-chart-top__item--text">Sales</span>
                    <span className="ninjadash-chart-top__item--amount">$5,550</span>
                    <span className="ninjadash-chart-top__item--status status-down">
                      <UilDown />
                      15%
                    </span>
                  </div>
                </div>
                <DashboardChart
                  type="line"
                  id="ninjadash-sales-revenue"
                  labels={salesRevenue.labels}
                  datasets={salesRevenueDatasets}
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
                        fontSize: 13,
                        color: '#8C90A4',
                        suggestedMin: 50,
                        suggestedMax: 80,
                        stepSize: 20,
                        callback(label) {
                          return `${label}k`;
                        },
                      },
                    },

                    x: {
                      grid: {
                        display: true,
                        zeroLineWidth: 1,
                        zeroLineColor: 'transparent',
                        color: 'transparent',
                        z: 1,
                        tickMarkLength: 0,
                      },
                      ticks: {
                        color: '#8C90A4',
                        padding: 10,
                      },
                    },
                  }}
                  tooltip={{
                    custom: customTooltips,
                    callbacks: {
                      title() {
                        return `Total Revenue`;
                      },
                      label(t) {
                        const { formattedValue, dataset } = t;
                        return `${dataset.label}: ${formattedValue}k`;
                      },
                    },
                  }}
                  height={window.innerWidth <= 575 ? 175 : 100}
                />
              </div>
            </Cards>
          </ChartContainer>
        </BorderLessHeading>
      )}
    </SalesRevenueWrapper>
  );
});

SalesReport.defaultProps = {
  title: 'Sales Report',
};

SalesReport.propTypes = {
  title: PropTypes.string,
};

export default SalesReport;
