/* eslint-disable no-return-assign */
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Card } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { OverviewCardMeshWrap } from './Style';

function OverviewCardMesh({ data, circleIcon }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const { type, icon, label, total, status, statusRate, suffix, prefix, decimel } = data;
  const totalNumber = Number(total);
  return (
    <OverviewCardMeshWrap
      className={circleIcon ? 'ninjadash-overview-card-single ninjadash-icon-circle' : 'ninjadash-overview-card-single'}
    >
      <Card bordered={false}>
        <div className={`ninjadash-overview-card ninjadash-overview-card-${type}`}>
          <div className="ninjadash-overview-card__left d-flex justify-content-between">
            <div className={`ninjadash-overview-card__left--icon ninjadash-${type}`}>
              <ReactSVG src={require(`../../static/img/icon/${icon}`)} />
            </div>
          </div>
          <div className="ninjadash-overview-card__right">
            <div className="ninjadash-overview-card__right--content">
              <h4 className="ninjadash-overview-total">
                <CountUp
                  start={0}
                  end={didViewCountUp ? totalNumber : 0}
                  suffix={suffix}
                  prefix={prefix}
                  delay={0.5}
                  decimals={decimel}
                  duration={2}
                />
              </h4>
              <span className="ninjadahs-overview-label">{label}</span>
            </div>
            <span className={`ninjadash-overview-status ninjadash-status-${status}`}>
              <span className="ninjadash-status-rate">
                {status === 'growth' ? <UilUp /> : <UilDown />} {statusRate}%
              </span>
            </span>
          </div>
        </div>
      </Card>
    </OverviewCardMeshWrap>
  );
}
OverviewCardMesh.propTypes = {
  data: {},
  circleIcon: false,
};
OverviewCardMesh.propTypes = {
  data: propTypes.object,
  circleIcon: propTypes.bool,
};

export default OverviewCardMesh;
