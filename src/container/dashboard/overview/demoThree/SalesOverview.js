import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../Style';

import config from '../../../../config/config';
import chartContent from '../../../../demoData/dashboardChartContent.json';

const { SalesOverviewData } = chartContent;

const SalesOverview = React.memo(() => {
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const { themeColor } = config;

  const [state, setState] = useState({
    overviewTab: 'today',
  });
  const [salesOverviewData, setSalesOverViewData] = useState(null);

  /* State destructuring */
  const { overviewTab } = state;

  const labels = ['Shirt', 'Pant', 'Footwear'];
  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'],
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      labels: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const datasets = [
    {
      data: salesOverviewData,
      backgroundColor: ['#FA8B0C', '#FB3586', '#5840FF'],
      centerText: '$7.9K',
      centerTextLabel: 'Revenue',
    },
  ];

  useEffect(() => {
    if (overviewTab) {
      setSalesOverViewData(SalesOverviewData[overviewTab]);
    }
  }, [overviewTab]);

  /* Tab Activation */
  const handleTabActivation = (value, event) => {
    event.preventDefault();

    setState({
      ...state,
      overviewTab: value,
    });
  };

  const totalSale = salesOverviewData !== null && salesOverviewData.reduce((a, b) => a + b, 0);

  return (
    <SalesOverviewStyleWrap2>
      {salesOverviewData !== null && (
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={overviewTab === 'today' ? 'ninjadash-active' : 'ninjadash-deactivate'}>
                  <Link type="button" onClick={(e) => handleTabActivation('today', e)} to="#">
                    Today
                  </Link>
                </li>
                <li className={overviewTab === 'week' ? 'ninjadash-active' : 'ninjadash-deactivate'}>
                  <Link onClick={(e) => handleTabActivation('week', e)} to="#">
                    Week
                  </Link>
                </li>
                <li className={overviewTab === 'month' ? 'ninjadash-active' : 'ninjadash-deactivate'}>
                  <Link onClick={(e) => handleTabActivation('month', e)} to="#">
                    Month
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Sales Overview"
          size="large"
        >
          <div className="ninjadash-overview-wrap">
            {/* Doughnut Chart */}

            <DoughnutChart
              type="doughnut"
              id="salesOverview"
              labels={labels}
              datasets={datasets}
              height={200}
              width={window.innerWidth <= 575 ? 200 : 250}
              option={options}
              tooltip={{
                backgroundColor: '#FFF',
                titleFontSize: 16,
                titleFontColor: '#0066ff',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                displayColors: false,

                callbacks: {},
              }}
            />

            {/* Pverview Percentage */}
            <div className="ninjadash-overview-percentage">
              {salesOverviewData.map((value, index) => {
                const itemPercent = Math.round((value / totalSale) * 100);
                return (
                  <div className="ninjadash-overview-percentage__item" key={index}>
                    <span
                      className="ninjadash-overview-percentage__point"
                      style={{
                        backgroundColor: datasets[0].backgroundColor[index],
                      }}
                    />
                    <span className="ninjadash-overview-percentage__text">{itemPercent}%</span>
                  </div>
                );
              })}
            </div>

            {/* Overview Box */}
            <div className="ninjadash-overview-box align-center-v justify-content-between">
              {salesOverviewData.map((value, index) => {
                return (
                  <div className="ninjadash-overview-box-item" key={index}>
                    <h4>{value}</h4>
                    <p>{labels[index]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Cards>
      )}
    </SalesOverviewStyleWrap2>
  );
});

export default SalesOverview;
