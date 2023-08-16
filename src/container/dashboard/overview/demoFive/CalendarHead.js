import React, { useState } from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import { Link } from 'react-router-dom';
import CalenDar from 'react-calendar';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { CalendarWrapper } from '../../../calendar/Style';
import 'react-calendar/dist/Calendar.css';

function CalenderHead() {
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
    </>
  );
  const [state, setState] = useState({
    date: new Date(),
  });
  const onChange = (date) => setState({ date });
  return (
    <Cards title="Calendar 2022" more={moreContent}>
      <CalendarWrapper className="ninjadash-calendar-with-head">
        <div className="ninjadash-calendar-widget">
          <CalenDar next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
        </div>
      </CalendarWrapper>
    </Cards>
  );
}

export default CalenderHead;
