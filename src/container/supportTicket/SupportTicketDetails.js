import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, List, Row, Select, Spin } from 'antd';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import UilImport from '@iconscout/react-unicons/icons/uil-import';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import Picker from 'emoji-picker-react';
import { TicketDetailsBox, ClientConversation } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { singlePageReade, ticketUpdateData } from '../../redux/supportTickets/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { idGenerator } from '../../utility/utility';

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

function SupportTicketDetails() {
  const { dataState, allTickets } = useSelector((state) => {
    return {
      dataState: state.tickets.ticket,
      allTickets: state.tickets.data,
    };
  });
  const [state, setState] = useState({
    inputValue: '',
  });
  const [pickerShow, setPickerShow] = useState(false);
  const { inputValue } = state;

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (dispatch) {
      dispatch(singlePageReade(params.id));
    }
  }, [dispatch, params.id]);

  const handleUpdatePriority = (values) => {
    const newData = allTickets.map((item) => {
      if (item.id === params.id) {
        const newItem = { ...item };
        newItem.priority = values;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
    dispatch(singlePageReade(params.id));
  };

  const handleUpdateStatus = (values) => {
    const newData = allTickets.map((item) => {
      if (item.id === params.id) {
        const newItem = { ...item };
        newItem.status = values;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
    dispatch(singlePageReade(params.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { conversations } = dataState[0].user;
    const id = idGenerator(conversations, 1);
    conversations.push({
      id,
      name: 'Daniel Pink',
      chat: inputValue,
      img: 'static/img/users/2.png',
      time: 'Just Now',
    });

    const newData = allTickets.map((item) => {
      if (item.id === params.id) {
        const newItem = { ...item };
        newItem.user.conversations = conversations;
        return newItem;
      }
      return item;
    });

    dispatch(ticketUpdateData(newData));
    dispatch(singlePageReade(params.id));
    setState({
      inputValue: '',
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setState({ ...state, inputValue: inputValue + emojiObject.emoji });
  };

  const onPickerShow = () => {
    setPickerShow(!pickerShow);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        title={
          <>
            <h4>Ticket Details</h4>
          </>
        }
        routes={PageRoutes}
      />
      <Main>
        {dataState.length ? (
          <TicketDetailsBox>
            <Row gutter={15}>
              <Col xs={24}>
                <Link
                  className="ninjadash-back-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                  to="#"
                >
                  <UilLeft /> Go back
                </Link>
              </Col>
              <Col lg={16} xs={24}>
                <div className="ninjadash-ticket-details">
                  <Cards headless title={dataState[0].subject}>
                    <Row>
                      <Col md={8} xs={24}>
                        <div className="ninjadash-ticket-author">
                          <h4 className="ninjadash-ticket-details__top-title">Requested By:</h4>
                          <div className="ninjadash-ticket-author__info">
                            <img style={{ width: '30px' }} src={require(`../../${dataState[0].user.img}`)} alt="" />
                            <span className="ninjadash-ticket-author__name">{dataState[0].user.name}</span>
                          </div>
                          <h4>Priority</h4>
                          <Select
                            onChange={handleUpdatePriority}
                            style={{ width: '200px' }}
                            defaultValue={dataState[0].priority}
                          >
                            <Select.Option value="Low">Low</Select.Option>
                            <Select.Option value="Medium">Medium</Select.Option>
                            <Select.Option value="High">High</Select.Option>
                          </Select>
                        </div>
                      </Col>
                      <Col md={8} xs={24}>
                        <div className="ninjadash-ticket-date-info">
                          <div className="ninjadash-ticket-date-info__text">
                            <h4 className="ninjadash-ticket-details__top-title">Created Date</h4>
                            <span>January 20, 2020</span>
                          </div>
                          <h4>Status</h4>
                          <Select
                            onChange={handleUpdateStatus}
                            style={{ width: '200px' }}
                            defaultValue={dataState[0].status}
                          >
                            <Select.Option value="Close">Close</Select.Option>
                            <Select.Option value="Open">Open</Select.Option>
                            <Select.Option value="Pending">Pending</Select.Option>
                          </Select>
                        </div>
                      </Col>
                      <Col md={8} xs={24}>
                        <div className="ninjadash-ticket-date-info">
                          <div className="ninjadash-ticket-date-info__text">
                            <h4 className="ninjadash-ticket-details__top-title">Updated Date</h4>
                            <span>February 02, 2020</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="ninjadash-ticket-overview">
                      <h4 className="ninjadash-ticket-overview__title">Overview :</h4>
                      <p>{dataState[0].description}</p>
                    </div>
                  </Cards>
                </div>
                <ClientConversation>
                  <Cards headless title="Conversation">
                    <List
                      className="ninjadash-client-conversation-list"
                      dataSource={dataState[0].user.conversations}
                      renderItem={(item) => (
                        <List.Item key={item.email}>
                          <List.Item.Meta
                            className="ninjadash-status-online"
                            avatar={<Avatar shape="square" src={require(`../../${item.img}`)} />}
                            title={<Link to="#">{item.name}</Link>}
                            description={item.chat}
                          />
                          <span className="ninjadash-conversation-time">{item.time}</span>
                        </List.Item>
                      )}
                    />
                    <div className="chatbox-reply-form-wrap">
                      <form onSubmit={handleSubmit}>
                        <div className="chatbox-reply-form d-flex">
                          <div className="chatbox-reply-input">
                            <span className="smile-icon">
                              {pickerShow && <Picker onEmojiClick={onEmojiClick} />}
                              <Link onClick={onPickerShow} to="#">
                                <UilSmile />
                              </Link>
                            </span>
                            <input
                              onChange={handleChange}
                              placeholder="Type your message..."
                              name="chat"
                              id="chat"
                              style={{ width: '100%' }}
                              value={inputValue}
                            />
                          </div>
                          <div className="chatbox-reply-action d-flex">
                            <Button onClick={handleSubmit} type="primary" className="btn-send">
                              <UilMessage />
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Cards>
                </ClientConversation>
              </Col>
              <Col lg={8} xs={24}>
                <div className="ninjadash-ticket-file-system">
                  <Cards bordered={false} title="File Attachment">
                    <div className="ninjadash-ticket-file-list">
                      <div className="ninjadash-ticket-file-item d-flex">
                        <div className="ninjadash-ticket-file-item__info d-flex">
                          <div className="ninjadash-ticket-file-item__logo">
                            <img
                              style={{ width: '40px' }}
                              src={require(`../../static/img/files/zip.png`)}
                              alt="File Logo"
                            />
                          </div>
                          <div className="ninjadash-file-item__content">
                            <span className="ninjadash-ticket-file-name">Main-admin-design.zip</span>
                            <span className="ninjadash-ticket-file-size">7.05 MB</span>
                          </div>
                        </div>
                        <Link className="ninjadash-ticket-file-item__action" to="#">
                          <UilUpload />
                        </Link>
                      </div>
                      {/* End of .file-list__single */}
                      <div className="ninjadash-ticket-file-item d-flex">
                        <div className="ninjadash-ticket-file-item__info d-flex">
                          <div className="ninjadash-ticket-file-item__logo">
                            <img
                              style={{ width: '40px' }}
                              src={require(`../../static/img/files/pdf.png`)}
                              alt="File Logo"
                            />
                          </div>
                          <div className="ninjadash-file-item__content">
                            <span className="ninjadash-ticket-file-name">Product-guidelines.pdf</span>
                            <span className="ninjadash-ticket-file-size">522 KB</span>
                          </div>
                        </div>
                        <Link className="ninjadash-ticket-file-item__action" to="#">
                          <UilUpload />
                        </Link>
                      </div>
                      {/* End of .file-list__single */}
                      <div className="ninjadash-ticket-file-item d-flex">
                        <div className="ninjadash-ticket-file-item__info d-flex">
                          <div className="ninjadash-ticket-file-item__logo">
                            <img
                              style={{ width: '40px' }}
                              src={require(`../../static/img/files/psd.png`)}
                              alt="File Logo"
                            />
                          </div>
                          <div className="ninjadash-ticket-file-item__content">
                            <span className="ninjadash-ticket-file-name">admin-wireframe.psd</span>
                            <span className="ninjadash-ticket-file-size">2.05 MB</span>
                          </div>
                        </div>
                        <Link className="ninjadash-ticket-file-item__action" to="#">
                          <UilImport />
                        </Link>
                      </div>
                    </div>
                  </Cards>
                </div>
              </Col>
            </Row>
          </TicketDetailsBox>
        ) : (
          <Cards headless>
            <Spin />
          </Cards>
        )}
      </Main>
    </>
  );
}

export default SupportTicketDetails;
