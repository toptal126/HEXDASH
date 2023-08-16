import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import config from '../../config/config';
import { Main } from '../styled';

import DashboardChart from '../../components/charts/DashboardChart';
import DoughnutChart from '../../components/charts/DoughnutChart';

function ChartJs() {
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const { themeColor } = config;
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Chart',
    },
  ];
  const barChart = {
    height: 200,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    datasets: [
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        backgroundColor: '#001737',
        barPercentage: 0.6,
        label: 'Runs',
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        backgroundColor: '#1ce1ac',
        barPercentage: 0.6,
        label: 'Dots',
      },
    ],
    legend: {
      display: true,
      labels: {
        display: true,
      },
    },
    scales: {
      y: {
        grid: {
          color: '#485e9029',
          borderDash: [3, 3],
          zeroLineColor: '#485e9029',
          zeroLineWidth: 1,
        },
        ticks: {
          beginAtZero: true,
          fontSize: 14,
          fontFamily: 'Jost',
          color: '#8C90A4',
          max: 80,
          stepSize: 20,
          padding: 10,
          callback(label) {
            return `${label}`;
          },
        },
      },

      x: {
        grid: {
          display: false,
          zeroLineWidth: 0,
          color: 'transparent',
          z: 1,
        },
        ticks: {
          fontSize: 14,
          fontFamily: 'Jost',
          fontColor: '#8C90A4',
        },
      },
    },
  };

  const chartjsAreaChart = {
    height: 250,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        borderColor: '#001737',
        borderWidth: 1,
        fill: true,
        backgroundColor: '#00173750',
        pointHoverBorderColor: 'transparent',
        label: 'Runs',
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        borderColor: '#1ce1ac',
        borderWidth: 1,
        fill: true,
        backgroundColor: '#1ce1ac50',
        pointHoverBorderColor: 'transparent',
        label: 'Dots',
      },
    ],

    elements: {
      point: {
        radius: 0,
      },
    },
    options: {
      maintainAspectRatio: true,
      hover: {
        mode: 'nearest',
        intersect: false,
      },

      plugins: {
        legend: {
          display: false,
          labels: {
            display: false,
          },
        },
      },
    },
    scales: {
      y: {
        stacked: true,
        display: false,
      },

      x: {
        stacked: true,
        display: false,
      },
    },
  };

  const chartjsDonutChart = {
    height: 150,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [20, 20, 30, 5, 25],
        backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
      },
    ],

    option: {
      cutoutPercentage: 70,
      borderColor: themeColor[mainContent]['white-background'],
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    },
  };

  const chartjsLineChart = {
    height: 210,
    width: null,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        borderColor: '#001737',
        borderWidth: 1,
        fill: false,
        label: 'Increment',
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        borderColor: '#1ce1ac',
        borderWidth: 1,
        fill: false,
        label: 'Decrement',
      },
    ],
    tooltip: {
      callbacks: {
        label(t) {
          const dstLabel = t.dataset.label;
          const { formattedValue } = t;
          return `  ${formattedValue} ${dstLabel}`;
        },
        labelColor(t) {
          return {
            backgroundColor: t.dataset.borderColor,
            borderColor: 'transparent',
          };
        },
      },
    },
  };

  const chartjsBarChartTransparent = {
    height: 176,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        backgroundColor: 'rgba(0,23,55, .5)',
        label: 'Profit',
        barPercentage: 0.6,
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        backgroundColor: 'rgba(28,225,172, .5)',
        label: 'Lose',
        barPercentage: 0.6,
      },
    ],
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        boxWidth: 6,
        display: true,
        usePointStyle: true,
      },
    },
  };

  const chartjsPieChart = {
    height: 300,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [20, 20, 30, 5, 25],
        backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
      },
    ],
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },

    option: {
      borderColor: themeColor[mainContent]['white-background'],
      maintainAspectRatio: true,
      responsive: false,
    },
    tooltip: {
      mode: 'index',
      callbacks: {
        label(t) {
          const { dataset, label, dataIndex } = t;
          return `  ${label} ${dataset.data[dataIndex]}`;
        },
        labelColor({ dataIndex, dataset }) {
          return {
            backgroundColor: dataset.backgroundColor[dataIndex],
            borderColor: 'transparent',
          };
        },
      },
    },
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Chart" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Bar Chart" size="large">
              <DashboardChart {...barChart} type="bar" id="barChart" className="foo" style={{ marginBottom: '20px' }} />
            </Cards>

            <Cards title="Stacked Chart" size="large">
              <DashboardChart
                {...barChart}
                type="bar"
                id="Stacked"
                scales={{
                  y: {
                    stacked: true,
                    grid: {
                      color: '#485e9029',
                      borderDash: [3, 3],
                      zeroLineColor: '#485e9029',
                      zeroLineWidth: 1,
                    },
                    ticks: {
                      beginAtZero: true,
                      fontSize: 14,
                      fontFamily: 'Jost',
                      color: '#8C90A4',
                      max: 80,
                      stepSize: 20,
                      padding: 10,
                      callback(label) {
                        return `${label}k`;
                      },
                    },
                  },

                  x: {
                    stacked: true,
                    grid: {
                      display: false,
                      zeroLineWidth: 0,
                      color: 'transparent',
                      z: 1,
                    },
                    ticks: {
                      fontSize: 14,
                      fontFamily: 'Jost',
                      fontColor: '#8C90A4',
                    },
                  },
                }}
              />
            </Cards>

            <Cards title="Area Chart" size="large">
              <DashboardChart {...chartjsAreaChart} type="line" id="area" />
            </Cards>

            <Cards title="Donut Chart" size="large">
              <DoughnutChart {...chartjsDonutChart} />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Horizontal Chart" size="large">
              <DashboardChart
                {...barChart}
                type="bar"
                id="hChart"
                option={{
                  indexAxis: 'y',
                }}
              />
            </Cards>

            <Cards title="Line Chart" size="large">
              <DashboardChart {...chartjsLineChart} id="lineChart" />
            </Cards>

            <Cards title="Transparent Chart" size="large">
              <DashboardChart
                {...chartjsBarChartTransparent}
                type="bar"
                id="transparentChart"
                className="foo"
                style={{ marginBottom: '20px' }}
              />
            </Cards>

            <Cards title="Pie Chart" size="large">
              <DashboardChart {...chartjsPieChart} type="pie" id="pieChart" />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ChartJs;
