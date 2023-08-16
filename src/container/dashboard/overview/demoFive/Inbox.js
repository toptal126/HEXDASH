import React from 'react';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';
import { InboxListStyleWrap } from '../../Style';

const inboxData = [
  {
    id: 1,
    user: {
      fName: 'Shane',
      lName: 'Watson',
      msg: 'We are looking a full stack developer',
    },
    time: '9:00 AM',
    theme: '#00AAFF',
  },
  {
    id: 2,
    user: {
      fName: 'Chris',
      lName: 'Dohan',
      msg: 'Well done, great work ',
      img: 'static/img/sellers/11.png',
    },
    time: '9:30 AM',
    theme: '#00AAFF',
  },
  {
    id: 3,
    user: {
      fName: 'Robert',
      lName: 'Clinton',
      msg: 'Tonight we are going to submit new...',
    },
    time: '9:30 AM',
    theme: '#FB3586',
  },
  {
    id: 4,
    user: {
      fName: 'Daniel',
      lName: 'White',
      msg: 'Please send me final file',
      img: 'static/img/sellers/12.png',
    },
    time: '9:30 AM',
    theme: '#FB3586',
  },
  {
    id: 5,
    user: {
      fName: 'Black',
      lName: 'Smith',
      msg: 'Good luck Tom',
    },
    time: '9:30 AM',
    theme: '#5840FF',
  },
];

function Inbox() {
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
      <InboxListStyleWrap>
        <Cards title="Inbox" more={moreContent}>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={inboxData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    item.user.img ? (
                      <Avatar shape="circle" src={require(`../../../../${item.user.img}`)} />
                    ) : (
                      <Avatar shape="circle" style={{ backgroundColor: item.theme }}>
                        {item.user.fName[0]}
                        {item.user.lName[0]}
                      </Avatar>
                    )
                  }
                  title={
                    <Link to="#">
                      {item.user.fName} {item.user.lName}
                    </Link>
                  }
                  description={item.user.msg}
                />
                <span className="ninjadash-mail-time">{item.time}</span>
              </List.Item>
            )}
          />
        </Cards>
      </InboxListStyleWrap>
    </BorderLessHeading>
  );
}

export default Inbox;
