import React from 'react';
import UilAt from '@iconscout/react-unicons/icons/uil-at';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilInbox from '@iconscout/react-unicons/icons/uil-inbox';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilCommentAlt from '@iconscout/react-unicons/icons/uil-comment-alt';
import { Link } from 'react-router-dom';
import { ActivityContents } from './Style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../../components/dropdown/dropdown';

function ActivityContent() {
  return (
    <ActivityContents>
      <Cards headless>
        <ul className="activity-list">
          <li className="activity-list__single">
            <span className="activity-icon primary">
              <UilInbox />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon secondary">
              <UilUpload />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t2.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">Adam </span>upload website template for sale{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon success">
              <UilSignout />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t3.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">Mumtahin</span> has registered{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon info">
              <UilAt />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t4.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon danger">
              <UilHeart />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t5.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">Adam</span> upload website template for sale{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon warning">
              <UilCommentAlt />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">Mumtahin</span> has registered{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon info">
              <UilAt />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t6.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon warning">
              <UilHeart />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t7.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">Mumtahin</span> has registered{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon danger">
              <UilCommentAlt />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t8.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">Adam</span> upload website template for sale{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon primary">
              <UilHeart />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <UilEllipsisH />
                </Dropdown>
              </Link>
            </div>
          </li>
        </ul>
      </Cards>
    </ActivityContents>
  );
}

export default ActivityContent;
