/* eslint-disable no-new */
import {
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  SubTitle,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from 'chart.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { customTooltips } from '../utilities/utilities';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
);

function DashboardChart({
  type,
  height,
  width,
  scales,
  labels,
  id,
  datasets,
  tooltip,
  layout,
  legend,
  elements,
  option,
  ...props
}) {
  useEffect(() => {
    let chart = null;
    let unmounted = false;
    if (!unmounted) {
      chart = new Chart(document.getElementById(id).getContext('2d'), {
        type,
        data: {
          labels,
          datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout,
          hover: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend,
            tooltip: {
              yAlign: 'bottom',
              xAlign: 'right',
              mode: 'index',
              intersect: false,
              backgroundColor: '#ffffff',
              boxShadow: '0 8px 5px #ADB5D915',
              position: 'nearest',
              titleColor: '#ADB5D9',
              color: '#ADB5D9',
              titleFontSize: 12,
              titleSpacing: 10,
              bodyColor: '#525768',
              bodyFontSize: 11,
              bodyFontStyle: 'normal',
              bodyFontFamily: "'Jost', sans-serif",
              borderColor: '#F1F2F6',
              usePointStyle: true,
              borderWidth: 1,
              bodySpacing: 10,
              padding: {
                x: 10,
                y: 8,
              },
              z: 999999,
              enabled: false,
              external: customTooltips,
              ...tooltip,
            },
          },
          elements,
          scales,
          ...option,
        },
      });
    }

    return () => {
      chart.destroy();
      unmounted = true;
    };
  }, [type, datasets, labels, id, layout, legend, elements, scales, tooltip, option]);

  return <canvas width={width} height={height} id={id} {...props} />;
}

DashboardChart.defaultProps = {
  height: 479,
  type: 'line',
  width: null,
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
      position: 'center',
    },
  },
  id: 'myChart',
  elements: {
    line: {
      tension: 0.6,
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
      beginAtZero: true,
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
        stepStartValue: 5,
        stepSize: 20,
        padding: 10,
        callback(label) {
          return `${label}k`;
        },
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
        zeroLineWidth: 0,
        color: 'transparent',
        z: 1,
      },
      ticks: {
        beginAtZero: true,
        fontSize: 14,
        fontFamily: 'Jost',
        color: '#8C90A4',
      },
    },
  },
  tooltip: {
    callbacks: {
      label(t) {
        const dstLabel = t.dataset.label;
        const { formattedValue } = t;
        return `  ${formattedValue} ${dstLabel}`;
      },
      labelColor(t) {
        return {
          backgroundColor: t.dataset.backgroundColor,
          borderColor: 'transparent',
        };
      },
    },
  },
  option: {},
};

DashboardChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.object,
  width: PropTypes.number,
  id: PropTypes.string,
  type: PropTypes.string,
  legend: PropTypes.object,
  elements: PropTypes.object,
  scales: PropTypes.object,
  tooltip: PropTypes.object,
  option: PropTypes.object,
};

export default DashboardChart;
