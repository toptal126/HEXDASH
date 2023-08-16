import React from 'react';
import { Link } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { PerfomanceOverviewStyle } from '../../Style';
import { BorderLessHeading, ChartPointHorizontal } from '../../../styled';

const PerformanceOverview = React.memo(() => {
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
  const labels = ['In Progress', 'Target', 'Completed'];

  const options = {
    cutout: 70,
    maintainAspectRatio: false,
    responsive: false,
    borderWidth: 2,
    borderColor: 'transparent',
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {},
  };

  const datasets = [
    {
      data: [10, 60, 30],
      backgroundColor: ['#FA8B0C', '#8231D3', '#00E4EC'],
      centerText: '',
      centerTextLabel: 'Completed',
    },
  ];

  return (
    <BorderLessHeading>
      <Cards more={moreContent} title="Performance Overview" size="large">
        <PerfomanceOverviewStyle>
          <DoughnutChart labels={labels} datasets={datasets} width={180} height={180} option={options} />
          <ChartPointHorizontal>
            <div className="ninjadash-chartpoint">
              {datasets[0].data.map((value, index) => {
                return (
                  <div className="ninjadash-chartpoint__item" key={index}>
                    <span
                      className="ninjadash-chartpoint__tika"
                      style={{
                        backgroundColor: datasets[0].backgroundColor[index],
                      }}
                    />
                    <span className="ninjadash-chartpoint__label">{labels[index]}</span>
                  </div>
                );
              })}
            </div>
          </ChartPointHorizontal>
        </PerfomanceOverviewStyle>
      </Cards>
    </BorderLessHeading>
  );
});

export default PerformanceOverview;
