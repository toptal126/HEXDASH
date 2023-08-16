import UilCalendar from '@iconscout/react-unicons/icons/uil-calendar-alt';
import React from 'react';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

function CalendarButtonPageHeader() {
  const content = <DateRangePickerOne />;

  return (
    <Popover placement="bottomRight" title="Search by Calendar" content={content} action="hover">
      <Button size="small" type="white">
        <UilCalendar />
        Calendar
      </Button>
    </Popover>
  );
}

export { CalendarButtonPageHeader };
