/* eslint-disable no-param-reassign */
import React from 'react';
import { Row, Col } from 'antd';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { TotalChartStyleWrap, ChartContainer } from '../../Style';

import totalChartData from '../../../../demoData/TotalSaleChart.json';

const TotalLineChart = React.memo(() => {
  return (
    <Row gutter={25}>
      {totalChartData.map((item, i) => {
        return (
          <Col xxl={8} md={i === 2 ? 24 : 12} sm={24} xs={24} key={i}>
            <TotalChartStyleWrap>
              <div className="ninjaDash-total-chart">
                <ChartContainer>
                  <Cards
                    title={
                      <div className="ninjadash-card-title-wrap">
                        <span className="ninjadash-card-title-text">
                          Total {item.title}
                          <span className="ninjadash-card-subtitile">(Last{item.period})</span>
                        </span>
                        <span className="ninjadash-card-title-extra-text">
                          <span className="ninjadash-total-chart-total">$8550</span>
                          <span className={`ninjadash-total-chart-status ninjadash-total-chart-status-${item.status}`}>
                            {item.status === 'growth' ? <UilUp /> : <UilDown />}
                            25.36%
                          </span>
                        </span>
                      </div>
                    }
                  >
                    <div className="ninjadash-chart-container">
                      <DashboardChart
                        labels={item.labels}
                        id={`id_${i}`}
                        datasets={[
                          {
                            data: item.data,
                            borderColor: item.lineColor,
                            borderWidth: 3,
                            fill: false,
                            pointBackgroundColor: '#FA8B0C',
                            pointBorderColor: '#fff',
                            pointHoverBorderColor: '#fff',
                            pointBorderWidth: 0,
                            pointHoverBorderWidth: 0,
                            pointHoverRadius: 0,
                            z: 5,
                          },
                        ]}
                        height={window.innerWidth <= 575 ? 200 : 180}
                        tooltip={{
                          custom(tooltip) {
                            if (!tooltip) return;
                            // disable displaying the color box;
                            tooltip.displayColors = false;
                          },
                          callbacks: {
                            title(t) {
                              const { label } = t[0];
                              return `${label}`;
                            },
                            label(t) {
                              const { formattedValue } = t;
                              return `  ${item.title}: ${formattedValue}k`;
                            },
                            labelColor() {
                              return {
                                backgroundColor: item.lineColor,
                                borderColor: 'transparent',
                              };
                            },
                          },
                        }}
                      />
                    </div>
                  </Cards>
                </ChartContainer>
              </div>
            </TotalChartStyleWrap>
          </Col>
        );
      })}
    </Row>
  );
});

export default TotalLineChart;
