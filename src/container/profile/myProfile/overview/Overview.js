import React from 'react';
import { Row, Col, Table } from 'antd';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilArrowDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import { NavLink } from 'react-router-dom';
import { ProductOverviewTable } from './Style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { CardBarChart2, EChartCard, ChartContainer } from '../../../dashboard/Style';
import DashboardChart from '../../../../components/charts/DashboardChart';

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

function Overview() {
  const dataSource = [
    {
      key: '1',
      name: 'Samsung Galaxy S8 256GB',
      price: '$280',
      sold: 126,
      revenue: '$38,536',
    },
    {
      key: '2',
      name: 'Half Sleeve Shirt',
      price: '$25',
      sold: 80,
      revenue: '$38,536',
    },
    {
      key: '3',
      name: 'Marco Shoes',
      price: '$32',
      sold: 58,
      revenue: '$38,536',
    },
    {
      key: '4',
      name: '15" Mackbook Pro        ',
      price: '$950',
      sold: 36,
      revenue: '$38,536',
    },
    {
      key: '5',
      name: 'Apple iPhone X',
      price: '$985',
      sold: 24,
      revenue: '$38,536',
    },
  ];

  const columns = [
    {
      title: 'Products Name',
      dataIndex: 'name',
      key: 'name',
      className: 'p_name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      className: 'p_price',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
  ];

  return (
    <Row gutter={25}>
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        <Cards headless>
          <EChartCard>
            <div className="card-chunk">
              <CardBarChart2>
                <Heading as="h1">7,461</Heading>
                <span>Orders</span>
                <p>
                  <span className="growth-upward">
                    <UilArrowUp /> 25%
                  </span>
                  <span>Since last week</span>
                </p>
              </CardBarChart2>
            </div>
            <div className="card-chunk">
              <ChartContainer>
                <div className="ninjadash-chart-container">
                  <DashboardChart
                    type="bar"
                    height={180}
                    id="bar1"
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#EFEFFE',
                        hoverBackgroundColor: '#5F63F2',
                        label: 'Orders',
                        barPercentage: 1,
                      },
                    ]}
                    scales={{
                      y: {
                        display: false,
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      x: {
                        display: false,
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    }}
                    // options={chartOptions}
                  />
                </div>
              </ChartContainer>
            </div>
          </EChartCard>
        </Cards>
      </Col>
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        <Cards headless>
          <EChartCard>
            <div className="card-chunk">
              <CardBarChart2>
                <Heading as="h1">$28,947</Heading>
                <span>Revenue</span>
                <p>
                  <span className="growth-downward">
                    <UilArrowDown /> 25%
                  </span>
                  <span>Since last week</span>
                </p>
              </CardBarChart2>
            </div>

            <div className="card-chunk">
              <ChartContainer>
                <div className="ninjadash-chart-container">
                  <DashboardChart
                    height={180}
                    type="bar"
                    id="bar2"
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#FFF0F6',
                        hoverBackgroundColor: '#FF69A5',
                        label: 'Revenue',
                        barPercentage: 1,
                      },
                    ]}
                    legends={{
                      display: false,
                    }}
                    scales={{
                      y: {
                        display: false,
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      x: {
                        display: false,
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </ChartContainer>
            </div>
          </EChartCard>
        </Cards>
      </Col>
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        <Cards headless>
          <EChartCard>
            <div className="card-chunk">
              <CardBarChart2>
                <Heading as="h1">$3,241</Heading>
                <span>Avg. order value</span>
                <p>
                  <span className="growth-upward">
                    <UilArrowUp /> 25%
                  </span>
                  <span>Since last week</span>
                </p>
              </CardBarChart2>
            </div>

            <div className="card-chunk">
              <ChartContainer>
                <div className="ninjadash-chart-container">
                  <DashboardChart
                    height={180}
                    type="bar"
                    id="bar3"
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#E8FAF4',
                        hoverBackgroundColor: '#20C997',
                        label: 'Avg Orders',
                        barPercentage: 1,
                      },
                    ]}
                    legends={{
                      display: false,
                    }}
                    scales={{
                      y: {
                        display: false,
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      x: {
                        display: false,
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </ChartContainer>
            </div>
          </EChartCard>
        </Cards>
      </Col>

      <Col xs={24}>
        <ProductOverviewTable>
          <Cards more={moreContent} title="My Products" size="default">
            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
          </Cards>
        </ProductOverviewTable>
      </Col>
    </Row>
  );
}

export default Overview;
