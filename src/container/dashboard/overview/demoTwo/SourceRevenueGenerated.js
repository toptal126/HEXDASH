import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import GoogleIcon from '../../../../static/img/icon/google-customIcon.svg';
import config from '../../../../config/config';
import { BorderLessHeading } from '../../../styled';
import { ChartContainer, RevenueGeneratedWrapper } from '../../Style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';

const SourceRevenueGenerated = React.memo(() => {
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const { themeColor } = config;
  const chartHeight = window.innerWidth <= 1699 ? (window.innerWidth <= 991 ? 300 : 200) : 300;
  const chartWidth = window.innerWidth <= 1699 ? (window.innerWidth <= 991 ? 300 : 200) : 300;
  const chartjsPieChart = {
    height: chartHeight,
    width: chartWidth,
    labels: ['Twitter', 'Google', 'Facebook'],
    datasets: [
      {
        data: [1540, 1540, 5346],
        backgroundColor: ['#00AAFF', '#8231D3', '#5840FF'],
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

  return (
    <BorderLessHeading>
      <RevenueGeneratedWrapper>
        <Cards title="Source Of Revenue Generated" size="large" more={moreContent}>
          <div className="ninjadsh-revenue-wrap">
            <div className="ninjadsh-revenue-chart">
              <ChartContainer className="ninjadash-chart-pie">
                <div className="ninjadash-chart-container">
                  <DashboardChart {...chartjsPieChart} type="pie" id="pieChart" />
                </div>
              </ChartContainer>
            </div>
            <div className="ninjadsh-revenue-chart-source">
              <div className="ninjadsh-revenue-chart-source__single">
                <div className="ninjadsh-revenue-chart-source__icon ninjadash-twitter">
                  <UilTwitter />
                </div>
                <div className="ninjadsh-revenue-chart-source__text">
                  <span className="ninjadsh-revenue-chart-source__title">{chartjsPieChart.labels[0]}</span>
                  <span className="ninjadsh-revenue-chart-source__count">${chartjsPieChart.datasets[0].data[0]}</span>
                </div>
              </div>
              <div className="ninjadsh-revenue-chart-source__single">
                <div className="ninjadsh-revenue-chart-source__icon ninjadash-google">
                  <ReactSVG src={GoogleIcon} />
                </div>
                <div className="ninjadsh-revenue-chart-source__text">
                  <span className="ninjadsh-revenue-chart-source__title">{chartjsPieChart.labels[1]}</span>
                  <span className="ninjadsh-revenue-chart-source__count">${chartjsPieChart.datasets[0].data[1]}</span>
                </div>
              </div>
              <div className="ninjadsh-revenue-chart-source__single">
                <div className="ninjadsh-revenue-chart-source__icon ninjadash-facebook">
                  <UilFacebook />
                </div>
                <div className="ninjadsh-revenue-chart-source__text">
                  <span className="ninjadsh-revenue-chart-source__title">{chartjsPieChart.labels[2]}</span>
                  <span className="ninjadsh-revenue-chart-source__count">${chartjsPieChart.datasets[0].data[2]}</span>
                </div>
              </div>
            </div>
          </div>
        </Cards>
      </RevenueGeneratedWrapper>
    </BorderLessHeading>
  );
});

export default SourceRevenueGenerated;
