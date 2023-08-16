import React from 'react';
import { Link } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import Chart from 'react-apexcharts';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { PerfomanceOverviewStyle } from '../../Style';
import { BorderLessHeading } from '../../../styled';
// Sample data
const labels = ['Target', 'Completed', 'In Progress'];
const dataSets = {
  series: [90, 80, 70],
  options: {
    chart: {
      width: '100%',
      height: '100%',
      type: 'radialBar',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '28%',
        },
        track: {
          show: true,
          margin: 11,
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 20,
          },
          value: {
            fontSize: '24px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 600,
            offsetY: -21,
          },
          total: {
            show: true,
            label: 'Completed',
            fontSize: '16px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            color: '#404040',
            formatter() {
              return '60%';
            },
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    grid: {
      padding: {
        to: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    labels,
  },
};
const PerformanceOverviewRadial = React.memo(() => {
  const moreContent = (
    <>
      <Link to="#">
        <UilPrint />
        <span>Printer</span>
      </Link>
      <Link to="#">
        <UilBookOpen />
        <span>PDF</span>
      </Link>
      <Link to="#">
        <UilFileAlt />
        <span>Google Sheets</span>
      </Link>
      <Link to="#">
        <UilTimes />
        <span>Excel (XLSX)</span>
      </Link>
      <Link to="#">
        <UilFile />
        <span>CSV</span>
      </Link>
    </>
  );

  return (
    <BorderLessHeading>
      <Cards more={moreContent} title="Performance Overview" size="large">
        <PerfomanceOverviewStyle className="ninjadash-chartpoint-vertical">
          <Chart options={dataSets.options} series={dataSets.series} type="radialBar" width={320} />
          <div className="ninjadash-chartpoint">
            {dataSets.series.map((value, index) => {
              return (
                <div className="ninjadash-chartpoint__item" key={index}>
                  <span
                    className="ninjadash-chartpoint__tika"
                    style={{
                      backgroundColor: dataSets.options.colors[index],
                    }}
                  />
                  <span className="ninjadash-chartpoint__label">{labels[index]}</span>
                </div>
              );
            })}
          </div>
        </PerfomanceOverviewStyle>
      </Cards>
    </BorderLessHeading>
  );
});

export default PerformanceOverviewRadial;
