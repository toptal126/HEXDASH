import UilBook from '@iconscout/react-unicons/icons/uil-book-open';
import UilDownloadAlt from '@iconscout/react-unicons/icons/uil-download-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

function ExportButtonPageHeader() {
  const content = (
    <>
      <NavLink to="#">
        <UilPrint />
        <span>Printer</span>
      </NavLink>
      <NavLink to="#">
        <UilBook />
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
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button size="small" type="white">
        <UilDownloadAlt />
        Export
      </Button>
    </Popover>
  );
}

export { ExportButtonPageHeader };
