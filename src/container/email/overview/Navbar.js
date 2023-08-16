import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Input, Form } from 'antd';
import UilInbox from '@iconscout/react-unicons/icons/uil-inbox';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilExclamationOctagon from '@iconscout/react-unicons/icons/uil-exclamation-octagon';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import propTypes from 'prop-types';
import { EmailNav } from './style';
import { Button } from '../../../components/buttons/buttons';
import Title from '../../../components/heading/heading';

const EmailNavbar = React.memo(({ toggleCollapsed }) => {
  const [state, setState] = useState({
    labels: ['personal', 'social', 'promotions'],
    newLabel: '',
    addNewDisplay: false,
  });
  const { labels, newLabel, addNewDisplay } = state;

  const addNewLabels = (e) => {
    e.preventDefault();

    setState({
      ...state,
      addNewDisplay: true,
    });
  };

  const cancelAddNewLabels = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setState({
      ...state,
      addNewDisplay: false,
    });
  };

  const handelChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (newLabel !== '') {
      setState({
        ...state,
        labels: [...labels, newLabel],
        newLabel: '',
      });
    } else {
      alert('Please Give a label...');
    }
  };

  const onLabelChange = (e) => {
    setState({
      ...state,
      newLabel: e.target.value,
    });
  };

  return (
    <EmailNav>
      <ul>
        <li>
          <NavLink to="./inbox" onClick={toggleCollapsed}>
            <UilInbox />
            <span className="nav-text">
              <span>Inbox</span>
              <span className="badge badge-primary">3</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./starred" onClick={toggleCollapsed}>
            <UilStar />
            <span className="nav-text">
              <span>Starred</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./sent" onClick={toggleCollapsed}>
            <UilMessage />
            <span className="nav-text">
              <span>Sent</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./drafts" onClick={toggleCollapsed}>
            <UilEdit />
            <span className="nav-text">
              <span>Drafts</span>
            </span>
            <span className="badge badge-primary">12</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./spam" onClick={toggleCollapsed}>
            <UilExclamationOctagon />
            <span className="nav-text">
              <span>Spam</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./trash" onClick={toggleCollapsed}>
            <UilTrashAlt />
            <span className="nav-text">
              <span>Trash</span>
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="nav-labels">
        <p>Labels</p>
        <ul>
          {labels.map((label) => {
            return (
              <li key={label}>
                <Link to="#">
                  <UilListUl /> {label}
                </Link>
              </li>
            );
          })}

          <li className="add-label-btn" onKeyPress={() => {}} onClick={addNewLabels} role="menuitem">
            <NavLink onClick={addNewLabels} to="./newLabels">
              <UilPlus /> Add New Label
            </NavLink>
            {addNewDisplay && (
              <div className="add-label">
                <Form onSubmit={handelChange}>
                  <Title label={3}>Add New Label</Title>
                  <Input
                    onChange={onLabelChange}
                    value={newLabel}
                    name={newLabel}
                    type="text"
                    placeholder="Enter label name"
                  />
                  <div className="btn-group">
                    <Button size="default" onClick={handelChange} type="primary">
                      Add Label
                    </Button>
                    <Button onClick={cancelAddNewLabels} type="default">
                      Cancel
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </li>
        </ul>
      </div>
    </EmailNav>
  );
});

EmailNavbar.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default EmailNavbar;
