import React from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { SwEllipse } from '../../../../components/utilities/icons';
import { TimelineNormalWrap } from '../../../ui-elements/ui-elements-styled';
import { BorderLessHeading } from '../../../styled';
import { TimelineStyleWrap } from '../../Style';

function Timelines() {
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
      <TimelineStyleWrap>
        <TimelineNormalWrap>
          <Cards title="Timeline" more={moreContent}>
            <Timeline>
              <Timeline.Item className="primary" dot={<SwEllipse size={10} color="#FB3586" />}>
                <p>
                  <span>Create a services site 2015-09-01</span> <span className="ninjadash-time">10 minutes</span>
                </p>
              </Timeline.Item>
              <Timeline.Item className="secondary" dot={<SwEllipse size={10} color="#5840FF" />}>
                <p>
                  <span>Solve initial network problems 2015-09-01</span>{' '}
                  <span className="ninjadash-time">10 minutes</span>
                </p>
              </Timeline.Item>
              <Timeline.Item className="success" dot={<SwEllipse size={10} color="#01B81A" />}>
                <p>
                  <span>Network problems being solved 2015-09-01</span>{' '}
                  <span className="ninjadash-time">10 minutes</span>
                </p>
              </Timeline.Item>
              <Timeline.Item className="info" dot={<SwEllipse size={10} color="#00AAFF" />}>
                <p>
                  <span>Technical testing 2015-09-01</span> <span className="ninjadash-time">10 minutes</span>
                </p>
              </Timeline.Item>
              <Timeline.Item className="warning" dot={<SwEllipse size={10} color="#FA8B0C" />}>
                <p>
                  <span>Network problems being solved 2015-09-01</span>{' '}
                  <span className="ninjadash-time">10 minutes</span>
                </p>
              </Timeline.Item>
              <Timeline.Item className="warning" dot={<SwEllipse size={10} color="#FF0F0F" />}>
                <p>
                  <span>Solve initial network problems 2015-09-01</span>{' '}
                  <span className="ninjadash-time">10 minutes</span>
                </p>
              </Timeline.Item>
            </Timeline>
          </Cards>
        </TimelineNormalWrap>
      </TimelineStyleWrap>
    </BorderLessHeading>
  );
}

export default Timelines;
