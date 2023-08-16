import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import PropTypes from 'prop-types';
import React from 'react';
import { ListStyle } from './style';

function List(props) {
  const { text } = props;

  return (
    <ListStyle className="list-single">
      <span className="icon">
        <UilCheck />
      </span>
      <span>{text}</span>
    </ListStyle>
  );
}
List.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
};
export { List };
