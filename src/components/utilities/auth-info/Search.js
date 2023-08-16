import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const SearchBar = React.memo(() => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    openSearch: false,
  });

  const openSearchbar = (e) => {
    e.preventDefault();
    setState({
      ...state,
      openSearch: true,
    });
  };
  const closeSearchbar = (e) => {
    e.preventDefault();
    setState({
      ...state,
      openSearch: false,
    });
  };

  const { openSearch } = state;

  return (
    <div
      className={
        openSearch
          ? 'ninjadash-nav-actions__item ninjadash-nav-actions__searchbar show'
          : 'ninjadash-nav-actions__item ninjadash-nav-actions__searchbar'
      }
    >
      <div className="ninjadash-searchbar">
        <Form form={form} name="ninjadash-search">
          <Form.Item name="search-input">
            <Input placeholder="Search Here" />
          </Form.Item>
        </Form>
      </div>
      <Link to="/" onClick={(e) => openSearchbar(e)} className="ninjadash-search-icon">
        <UilSearch />
      </Link>
      <Link to="/" onClick={(e) => closeSearchbar(e)} className="ninjadash-close-icon">
        <UilTimes />
      </Link>
    </div>
  );
});

export default SearchBar;
