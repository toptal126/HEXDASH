import React, { useEffect, useState } from 'react';
import { Table, Progress } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { TableDefaultStyle, BorderLessHeading } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';

const { memberProgressData } = tableData;

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

const columns = [
  {
    title: '',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '',
    dataIndex: 'salary',
    key: 'salary',
  },
  {
    title: '',
    dataIndex: 'workOn',
    key: 'workOn',
  },
  {
    title: '',
    dataIndex: 'status',
    key: 'status',
  },
];

function MemberProgress() {
  const [state, setState] = useState({
    traffic: 'today',
  });

  const [memberProgressState, setMemberProgressState] = useState(null);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setMemberProgressState(memberProgressData[state.traffic]);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [state.traffic]);

  const dataSource = [];

  if (memberProgressState)
    memberProgressState.map(({ id, title, workOn, userImg, salary, status, progress }) => {
      return dataSource.push({
        key: id,
        id,
        title: (
          <div className="ninjadash-info-element align-center-v">
            <img src={require(`../../../../static/img/sellers/${userImg}`)} alt="ninjaDash" />
            <span className="ninjadash-info-element__text">{title}</span>
          </div>
        ),
        salary: `$${salary}`,
        workOn,
        status: (
          <Progress
            percent={status}
            strokeWidth={5}
            status="active"
            showInfo
            className={`progress-dt progress-${progress}`}
          />
        ),
      });
    });

  // progress-dt progress-primary

  const handleTabActivation = (value) => {
    setState({
      ...state,
      traffic: value,
    });
  };

  return (
    <BorderLessHeading>
      <Cards
        isbutton={
          <div className="ninjadash-card-nav">
            <ul>
              <li className={state.traffic === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                <Link onClick={() => handleTabActivation('today')} to="#">
                  Today
                </Link>
              </li>
              <li className={state.traffic === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                <Link onClick={() => handleTabActivation('week')} to="#">
                  Week
                </Link>
              </li>
              <li className={state.traffic === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                <Link onClick={() => handleTabActivation('month')} to="#">
                  Month
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Member Progress"
        size="large"
        more={moreContent}
      >
        <TableDefaultStyle>
          <div className="ninjadash-member-progress-table table-bordered table-responsive">
            <Table columns={columns} dataSource={dataSource} pagination={false} showHeader={false} />
          </div>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  );
}

export default MemberProgress;
