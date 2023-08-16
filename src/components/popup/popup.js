import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Content, PopoverStyle, Title } from './style';
import './style.css';

function Popover(props) {
  const { content, placement, title, action, children } = props;
  const content1 = <Content>{content}</Content>;

  return (
    <PopoverStyle placement={placement} title={title && <Title>{title}</Title>} content={content1} trigger={action}>
      {children}
    </PopoverStyle>
  );
}

const content = (
  <>
    <Link to="#">
      <UilCheck />
      <span>Btn Dropdown one</span>
    </Link>
    <Link to="#">
      <UilCheck />
      <span>Btn Dropdown two</span>
    </Link>
    <Link to="#">
      <UilCheck />
      <span>Btn Dropdown three</span>
    </Link>
  </>
);

Popover.defaultProps = {
  action: 'hover',
  placement: 'bottom',
  content,
};

Popover.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export { Popover };
