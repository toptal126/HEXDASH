import React, { useEffect, lazy, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import UilAngleUp from '@iconscout/react-unicons/icons/uil-angle-up';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilRedo from '@iconscout/react-unicons/icons/uil-redo';
import UilArchive from '@iconscout/react-unicons/icons/uil-archive';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilImport from '@iconscout/react-unicons/icons/uil-import';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import UilCornerUpLeft from '@iconscout/react-unicons/icons/uil-corner-up-left';
import UilCornerUpRight from '@iconscout/react-unicons/icons/uil-corner-up-right';
import UilExclamationOctagon from '@iconscout/react-unicons/icons/uil-exclamation-octagon';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFolder from '@iconscout/react-unicons/icons/uil-folder';
import { Link, NavLink, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Tooltip, Row, Col, Spin } from 'antd';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import { MailDetailsWrapper, MessageAction, MessageDetails, ReplyList, MessageReply, MailRightAction } from './style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import Heading from '../../../components/heading/heading';
import { filterSinglePage, onStarUpdate } from '../../../redux/email/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';

const MailComposer = lazy(() => import('./MailComposer'));

function Single() {
  const navigate = useNavigate();
  const email = useSelector((state) => state.emailSingle.data[0]);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    replyMessage: 0,
  });

  const params = useParams();
  useEffect(() => {
    if (filterSinglePage) {
      const id = parseInt(params.id, 10);
      dispatch(filterSinglePage(id));
    }
  }, [params.id, dispatch]);

  const replyMail = async (replyMessage) => {
    // hit replyMail api
    setState({ ...state, replyMessage });
  };

  const onStaredChange = (id) => {
    dispatch(onStarUpdate(id));
  };

  const ReplayMess = React.memo((value) => {
    return (
      <>
        <img style={{ width: 50, height: 50 }} src={require('../../../static/img/email/2.png')} alt="" />
        <MailComposer replay props={value} defaultTag="Alice Freeman" onSend={replyMail} />
      </>
    );
  });

  return (
    <MailDetailsWrapper>
      <Cards
        title={
          <MessageAction>
            <Link onClick={() => navigate(-1)} to="#">
              <UilArrowLeft />
            </Link>
            <Tooltip placement="bottom" title="Refresh">
              <NavLink to="#">
                <UilRedo />
              </NavLink>
            </Tooltip>
            <Tooltip placement="bottom" title="Archive">
              <NavLink to="#">
                <UilArchive />
              </NavLink>
            </Tooltip>
            <Tooltip placement="bottom" title="Info">
              <NavLink to="#">
                <UilExclamationOctagon />
              </NavLink>
            </Tooltip>
            <Tooltip placement="bottom" title="Delete">
              <NavLink to="#">
                <UilTrash />
              </NavLink>
            </Tooltip>
            <Tooltip placement="bottom" title="Read">
              <NavLink to="#">
                <UilBookOpen />
              </NavLink>
            </Tooltip>
            <Tooltip placement="bottom" title="Folder">
              <NavLink to="#">
                <UilFolder />
              </NavLink>
            </Tooltip>
          </MessageAction>
        }
        isbutton={
          <MailRightAction>
            <span>1 - 50 of 235</span>
          </MailRightAction>
        }
      >
        <Row gutter={15}>
          <Col>
            <MessageDetails>
              <div className="d-flex justify-content-between align-items-center">
                <div className="message-subject">
                  <Heading as="h2">
                    {email.subject}
                    <span className="mail-badge primary">{email.type}</span>
                  </Heading>
                </div>

                <div className="message-action">
                  <Link to="#" className="ex-coll">
                    <UilAngleUp />
                    <UilAngleDown />
                  </Link>

                  <Link to="#">
                    <UilPrint />
                  </Link>
                </div>
              </div>

              <div className="message-box d-flex justify-content-between align-items-center">
                <div className="message-author">
                  <img style={{ width: '60px', borderRadius: '50%' }} src={email.img} alt="" />
                  <div>
                    <Heading as="h4">{email.userName}</Heading>
                    <Dropdown
                      placement="bottom"
                      content={
                        <ul className="mail-props">
                          <li>
                            <span>From:</span> <span>{email.from}</span>{' '}
                          </li>
                          <li>
                            <span>To:</span> <span>{email.to}</span>{' '}
                          </li>
                          <li>
                            <span>CC:</span> <span>example@gamil.com</span>{' '}
                          </li>
                          <li>
                            <span>Date:</span> <span>{moment(email.id).format('LLL')}</span>
                          </li>
                        </ul>
                      }
                    >
                      <Link to="#">
                        To {email.to}
                        <UilAngleDown />
                      </Link>
                    </Dropdown>
                  </div>
                </div>

                <div className="message-excerpt">
                  <span>
                    <UilPaperclip />
                  </span>
                  <span> {moment(email.id).format('LLL')} </span>
                  <Link
                    className={email.stared ? 'starActive' : 'starDeactivate'}
                    onClick={() => onStaredChange(email.id)}
                    to="#"
                  >
                    <FontAwesome name="star-o" />
                  </Link>
                  <Link to="#">
                    <UilCornerUpLeft />
                  </Link>
                  <Link to="#">
                    <UilEllipsisV />
                  </Link>
                </div>
              </div>

              <div className="message-body">
                <span className="welcome-text">Hello Adam,</span>
                <p>{email.body}</p>

                <Heading as="h6">
                  Best Regards <br /> {email.userName}
                </Heading>
              </div>

              <div className="message-attachments">
                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/2.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <UilImport />
                    </Link>
                    <Link className="btn-link" to="#">
                      <UilShareAlt />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.jpg</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>

                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/1.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <UilImport />
                    </Link>
                    <Link className="btn-link" to="#">
                      <UilShareAlt />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.jpg</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/3.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <UilImport />
                    </Link>
                    <Link className="btn-link" to="#">
                      <UilShareAlt />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.zip</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/4.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <UilImport />
                    </Link>
                    <Link className="btn-link" to="#">
                      <UilShareAlt />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.pdf</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>
              </div>
              <hr />
            </MessageDetails>
          </Col>
        </Row>

        <Row gutter={15}>
          <Col xs={24}>
            <ReplyList>
              <div className="reply-view__single">
                <figure className="reply-view__content d-flex">
                  <img style={{ width: 50, height: 50 }} src={require('../../../static/img/email/2.png')} alt="" />
                  <figcaption>
                    <Heading as="h6">Reynante Labares</Heading>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      inviduntLorem ipsum dolor...
                    </p>
                  </figcaption>
                </figure>
                <div className="reply-view__meta">
                  <span className="meta-list">
                    <span className="date-meta">Jan 2, 2020, 5:22 PM</span>
                    <Link
                      className={email.stared ? 'starActive' : 'starDeactivate'}
                      onClick={() => onStaredChange(email.id)}
                      to="#"
                    >
                      <FontAwesome name="star-o" />
                    </Link>
                    <Link to="#">
                      <UilEllipsisV />
                    </Link>
                    <Link to="#">
                      <UilCornerUpLeft />
                    </Link>
                  </span>
                </div>
              </div>
            </ReplyList>
            <MessageReply>
              <nav>
                <ul>
                  <li>
                    <NavLink to="./replay">
                      <UilCornerUpLeft /> Reply
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="./forward">
                      <UilCornerUpRight /> Forward
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="reply-form d-flex">
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <div style={{ width: '100%' }} className="reply-box">
                    <Routes>
                      <Route path="replay" element={<ReplayMess />} />
                    </Routes>
                  </div>
                </Suspense>
              </div>
            </MessageReply>
          </Col>
        </Row>
      </Cards>
    </MailDetailsWrapper>
  );
}

export default Single;
