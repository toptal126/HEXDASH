/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React from 'react';
import DashboardChart from './DashboardChart';

function DoughnutChart({ datasets, tooltip, ...props }) {
  return (
    <div className="doughnutchart-inner">
      <div className="doughnutchart-inner-text">
        {datasets[0].centerText === '' ? (
          <span className="doughnutchart-inner-content">
            {Math.round((datasets[0].data[2] / datasets[0].data[1]) * 100)}%
          </span>
        ) : (
          <span className="doughnutchart-inner-content">{datasets[0].centerText}</span>
        )}
        <span className="doughnutchart-inner-label">{datasets[0].centerTextLabel}</span>
      </div>

      <DashboardChart tooltip={tooltip} type="doughnut" datasets={datasets} {...props} />
    </div>
  );
}

DoughnutChart.defaultProps = {
  height: 479,
  width: 250,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: false,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: false,
    },
  ],
  layout: {},
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  id: 'myChart',
  elements: {
    line: {
      tension: 0.5,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      capBezierPoints: true,
    },
    point: {
      radius: 0,
      z: 5,
    },
  },

  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },

  tooltip: {},
  option: {
    borderColor: ({ theme }) => theme[theme.mainContent]['white-background'],
  },
};

DoughnutChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  legend: PropTypes.object,
  layout: PropTypes.object,
  elements: PropTypes.object,
  scales: PropTypes.object,
  tooltip: PropTypes.object,
  option: PropTypes.object,
};

export default DoughnutChart;
