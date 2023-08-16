import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';

function Inbox() {
  const [searchData, email] = useSelector((state) => [state.headerSearchData, state.email.allMessage]);
  return (
    <Content
      email={email.filter((value) => {
        return value.type === 'inbox';
      })}
      searchData={searchData}
    />
  );
}

export default Inbox;
