import React, { useState, useEffect } from 'react';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilSlidersV from '@iconscout/react-unicons/icons/uil-sliders-v';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import moment from 'moment';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Style, EmailAuthor, EmailHeader } from './style';
import Topbar from './Topbar';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import Heading from '../../../components/heading/heading';
import { textRefactor } from '../../../components/utilities/utilities';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { onStarUpdate, onSortingAscending, onSortingDescending } from '../../../redux/email/actionCreator';

function Content({ searchData, email }) {
  const dispatch = useDispatch();
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const [state, setState] = useState({
    selectedRowKeys: [],
    notData: searchData,
    emails: email,
    sort: true,
  });

  const { selectedRowKeys, notData, emails, sort } = state;

  useEffect(() => {
    setState({
      emails: email,
      selectedRowKeys,
      sort,
    });
  }, [email, selectedRowKeys, sort]);

  const handleSearch = (searchText) => {
    const data =
      searchData !== undefined &&
      searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const refreshState = (e) => {
    e.preventDefault();
    setState({
      ...state,
      emails: email,
    });
  };

  const onStaredChange = (id) => {
    dispatch(onStarUpdate(id));
  };

  const data = [];
  if (emails !== undefined)
    emails.map((inbox, key) => {
      // eslint-disable-next-line no-shadow

      const { id, type, userName, status, img, subject, body, attach, stared } = inbox;

      const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
      return data.push({
        key: id,
        name: (
          <EmailAuthor>
            <Link
              onClick={() => {
                onStaredChange(id);
              }}
              to="#"
              className={stared ? 'starActive' : 'starDeactivate'}
            >
              <FontAwesome name="star-o" />
            </Link>
            <img src={img} alt="" />
            <Heading as="h5">
              <Link to="#">{userName}</Link>
            </Heading>
          </EmailAuthor>
        ),
        email: inbox.email,
        status,
        content: (
          <EmailHeader>
            <Heading as="h5">
              <Link to={`/admin/email/single/${id}`}>{subject}</Link>
              <span className={`mail-badge ${key <= 1 ? 'primary' : ''}`}>{type}</span>
            </Heading>
            <p>{textRefactor(body, 10)}</p>
            {attach.length
              ? attach.map((item) => (
                  <a key={item} className="btn-attachment" download href={require(`../../../static/img/email/${item}`)}>
                    <UilPaperclip />
                    {item}
                  </a>
                ))
              : null}
          </EmailHeader>
        ),
        time: <span className="email-time">{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>,
      });
    });

  const handleChange = (pagination, filters, sorter) => {
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onRowSelection = (filterObj) => {
    const { filter, byValue } = filterObj;

    const newSelectedRowKeys = emails
      .filter((value) => {
        return value[filter] === byValue;
      })
      .map((item) => item.id);

    setState({ ...state, selectedRowKeys: newSelectedRowKeys });
  };

  const onSelectChange = (selectedRowKey) => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: 'all',
        text: 'All',
        onSelect: () => {
          const newSelectedRowKeys = email.map((item) => item.id);
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'read',
        text: 'Read',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'read' }),
      },
      {
        key: 'unread',
        text: 'Unread',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'unread' }),
      },
      {
        key: 'stared',
        text: 'Stared',
        onSelect: onRowSelection.bind(null, { filter: 'stared', byValue: true }),
      },
      {
        key: 'unstared',
        text: 'Unstared',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: false }),
      },
    ],
  };

  const columns = [
    {
      title: <Topbar refreshState={refreshState} />,
      dataIndex: 'name',
    },
    {
      title: (
        <div className="email-top-search">
          <AutoComplete placeholder="Search mail" onSearch={handleSearch} dataSource={notData} width="80%" patterns />
        </div>
      ),
      dataIndex: 'content',
    },
    {
      title: (
        <>
          <div className="email-top-right d-flex align-items-center">
            <span className="page-number">1 - 50 of 235</span>
            <div className="pagination-slider">
              <Link className="btn-paging" to="#">
                {!rtl ? <UilAngleLeft /> : <UilAngleRight />}
              </Link>
              <Link className="btn-paging" to="#">
                {rtl ? <UilAngleLeft /> : <UilAngleRight />}
              </Link>
            </div>
            <div className="email-extra">
              <Link
                onClick={() => {
                  setState({
                    ...state,
                    sort: !sort,
                  });
                  if (sort) {
                    dispatch(onSortingAscending());
                  } else {
                    dispatch(onSortingDescending());
                  }
                }}
                to="#"
              >
                <UilSlidersV />
              </Link>
              <Dropdown
                content={
                  <>
                    <Link to="#">
                      <span>Newest</span>
                    </Link>
                    <Link to="#">
                      <span>Oldest</span>
                    </Link>
                    <Link to="#">
                      <span>Unread</span>
                    </Link>
                  </>
                }
              >
                <Link to="#">
                  <UilEllipsisV />
                </Link>
              </Dropdown>
            </div>
          </div>
        </>
      ),
      dataIndex: 'time',
      key: 'time',
    },
  ];

  return (
    <Style
      className="table-responsive"
      pagination={false}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      onChange={handleChange}
    />
  );
}

Content.propTypes = {
  searchData: propTypes.arrayOf(propTypes.object).isRequired,
  email: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Content;
