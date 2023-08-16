import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Row, Col, Input, Select, Table, Popconfirm, Skeleton } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { TicketBox } from './Style';
import SupportCreate from './SupportCreate';
import SupportUpdate from './SupportUpdate';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { idGenerator } from '../../utility/utility';
import { ticketReadData, ticketUpdateData, ticketUpdateSearch } from '../../redux/supportTickets/actionCreator';

const OverviewDataList = lazy(() => import('./overview/OverviewDataList'));

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

function SupportTicket() {
  const { dataState } = useSelector((state) => {
    return {
      dataState: state.tickets.data,
    };
  });

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editableData, setEditableData] = useState(false);

  const dataSource = [];

  useEffect(() => {
    if (dispatch) {
      dispatch(ticketReadData());
    }
  }, [dispatch]);

  const confirm = (id) => {
    const deleteData = dataState.filter((ticket) => ticket.id !== id);
    dispatch(ticketUpdateData(deleteData));
  };

  const cancel = () => {};

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Requested By',
      dataIndex: 'requested',
      key: 'requested',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Created Date',
      dataIndex: 'createAt',
      key: 'createAt',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  const showModalEdit = (values) => {
    setEditableData(values);
    setVisibleEdit(true);
  };

  const onCancelEdit = () => {
    setVisibleEdit(false);
  };

  if (dataState.length) {
    dataState.map((item) => {
      const { id, user, status, subject, priority, createAt } = item;
      return dataSource.push({
        key: `${id}`,
        id: `#${id}`,
        requested: (
          <div className="ninjadash-info-element align-center-v">
            <div className="ninjadash-info-element__media">
              <img src={require(`../../${user.img}`)} alt="" />
            </div>
            <div className="ninjadash-info-element__content">
              <p>{user.name}</p>
            </div>
          </div>
        ),
        status: <span className={`ninjadash-support-status ninjadash-support-status-${status}`}>{status}</span>,
        subject: <span className="ninjadash-ticket-subject">{subject}</span>,
        priority,
        createAt,
        action: (
          <div className="table-actions">
            <Link className="view" to={`/admin/app/support/ticketDetails/${id}`}>
              <UilEye />
            </Link>
            <Link onClick={() => showModalEdit(item)} className="edit" to="#">
              <UilEdit />
            </Link>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={(e) => confirm(id, e)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Link className="delete" to="#">
                <UilTrashAlt />
              </Link>
            </Popconfirm>
          </div>
        ),
      });
    });
  }

  const showModal = () => {
    setVisible(true);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const handleSubmit = (values) => {
    const id = idGenerator(dataState, 2);
    dispatch(
      ticketUpdateData(
        dataState.concat({
          ...values,
          user: {
            name: 'Kellie Marquot',
            img: 'static/img/avatar/profileImage.png',
            conversations: [],
          },
          createAt: moment().format('MM-DD-yyyy'),
          id,
        }),
      ),
    );
    setVisible(false);
  };

  const handleUpdate = (values) => {
    const newData = dataState.map((item) => {
      setVisibleEdit(false);
      if (item.id === values.id) {
        const newItem = { ...item };

        newItem.subject = values.subject;
        newItem.email = values.email;
        newItem.priority = values.priority;
        newItem.status = values.status;
        newItem.description = values.description;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
  };

  const handleIdSearch = (e) => {
    const id = e.currentTarget.value;
    dispatch(ticketUpdateSearch(id, 'id'));
  };

  const handleStatusSearch = (value) => {
    dispatch(ticketUpdateSearch(value, 'status'));
  };

  const handleSubjectSearch = (e) => {
    const { value } = e.currentTarget;
    dispatch(ticketUpdateSearch(value, 'subject'));
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Support Ticket" routes={PageRoutes} />
      <Main>
        <TicketBox>
          <Row justify="center">
            <Col xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <OverviewDataList />
              </Suspense>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col sm={24} xs={24}>
              <Cards headless>
                <div className="ninjadash-support-content-top">
                  <Heading as="h4">All Support Ticket</Heading>
                  <Button onClick={showModal} size="default" type="primary">
                    <UilPlus /> Add Ticket
                  </Button>
                </div>
                <div className="ninjadash-support-content-filter">
                  <div className="ninjadash-support-content-filter__left">
                    <div className="ninjadash-support-content-filter__input">
                      <span className="label">Id:</span>
                      <Input onChange={handleIdSearch} placeholder="Search with Id" />
                    </div>
                    <div className="ninjadash-support-content-filter__input">
                      <span className="label">Status:</span>
                      <Select onChange={handleStatusSearch} style={{ width: 200 }} defaultValue="">
                        <Select.Option value="">All</Select.Option>
                        <Select.Option value="Open">Open</Select.Option>
                        <Select.Option value="Pending">Pending</Select.Option>
                        <Select.Option value="Close">Close</Select.Option>
                      </Select>
                    </div>
                  </div>
                  <div className="ninjadash-support-content-filter__right">
                    <Input onChange={handleSubjectSearch} size="default" placeholder="Search" prefix={prefix} />
                  </div>
                </div>
                <div className="ninjadash-support-content-table">
                  <TableWrapper className="table-data-view table-responsive">
                    <Table
                      pagination={{ pageSize: 10, showSizeChanger: true }}
                      dataSource={dataSource}
                      columns={columns}
                    />
                  </TableWrapper>
                </div>
              </Cards>
            </Col>
          </Row>
        </TicketBox>
      </Main>
      <SupportCreate onCancel={onCancel} handleSubmit={handleSubmit} visible={visible} />
      <SupportUpdate
        onCancel={onCancelEdit}
        editableData={editableData}
        handleSubmit={handleUpdate}
        visible={visibleEdit}
      />
    </>
  );
}

export default SupportTicket;
