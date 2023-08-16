import React, { useState } from 'react';
import CalenDar from 'react-calendar';
import { CalendarWrapper } from '../../../calendar/Style';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [state, setState] = useState({
    date: new Date(),
  });
  const onChange = (date) => setState({ date });
  return (
    <CalendarWrapper>
      <div className="ninjadash-calendar-widget">
        <CalenDar next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
      </div>
    </CalendarWrapper>
  );
}

export default Calender;
