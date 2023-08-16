import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'antd';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { NavLink } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { SalesOverviewStyleWrap } from '../../Style';

import salesData from '../../../../demoData/salesData.json';

const SalesOverview = React.memo(() => {
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
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
    <SalesOverviewStyleWrap>
      <Cards title="Sales Overview" more={moreContent}>
        <div className="ninjadash-sales-inner">
          <Progress
            type="circle"
            width={230}
            percent={75}
            strokeColor="#8231D3"
            trailColor={mainContent === 'lightMode' ? '#E6D5F6' : '#322035'}
          />
          <div className="ninjadash-sales-content d-flex">
            {salesData.map((item, i) => {
              return (
                <div className="ninjadash-sales-content__item" key={i}>
                  <span className="ninjadash-sales-content__item--label">{item.status}</span>
                  <h4 className="ninjadash-sales-content__item--total">{item.salesCount}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </Cards>
    </SalesOverviewStyleWrap>
  );
});

export default SalesOverview;
