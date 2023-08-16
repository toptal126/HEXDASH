import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Col, Row } from 'antd';
import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { ChartContainer, TotalChartStyleWrap } from '../../Style';

import totalChartData from '../../../../demoData/TotalEarning.json';

const TotalEarning = React.memo(() => {
  return (
    <Row gutter={25}>
      {totalChartData.map((item, i) => {
        return (
          <Col xs={24} key={i}>
            <TotalChartStyleWrap>
              <div className="ninjaDash-total-chart ninjadash-total-earning">
                <ChartContainer>
                  <Cards
                    title={
                      <div className="ninjadash-card-title-wrap">
                        <span className="ninjadash-card-title-text">
                          Total {item.title}
                          <span className="ninjadash-card-subtitile">(Last){item.period}</span>
                        </span>
                        <span className="ninjadash-card-title-extra-text">
                          <span className="ninjadash-total-chart-total">$8550</span>
                          <span
                            className={
                              item.status === 'down'
                                ? 'ninjadash-total-chart-status ninjadash-total-chart-status-down'
                                : 'ninjadash-total-chart-status ninjadash-total-chart-status-growth'
                            }
                          >
                            {item.status === 'growth' ? <UilUp /> : <UilDown />}
                            25.36%
                          </span>
                        </span>
                      </div>
                    }
                  >
                    <div className="ninjadash-chart-container">
                      <DashboardChart
                        type="line"
                        id="totalEarning"
                        labels={item.labels}
                        datasets={[
                          {
                            data: item.data,
                            borderColor: item.lineColor,
                            borderWidth: 3,
                            fill: false,
                            pointBackgroundColor: '#8231D3',
                            pointBorderColor: '#fff',
                            pointHoverBorderColor: '#fff',
                            pointBorderWidth: 0,
                            pointHoverBorderWidth: 0,
                            pointHoverRadius: 0,
                            z: 5,
                          },
                        ]}
                        elements={{
                          line: {
                            tension: 0.3,
                            borderCapStyle: 'round',
                            borderJoinStyle: 'round',
                            capBezierPoints: true,
                          },
                          point: {
                            radius: 0,
                            z: 5,
                          },
                        }}
                        height={window.innerWidth <= 575 ? 280 : 200}
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
                              return `${item.title}: $${formattedValue}k`;
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

export default TotalEarning;
