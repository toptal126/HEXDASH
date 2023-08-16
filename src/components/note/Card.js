import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from './style';
import { Bullet } from '../../container/note/style';
import { noteDeleteData, onLabelUpdate, onStarUpdate } from '../../redux/note/actionCreator';
import { Cards } from '../cards/frame/cards-frame';
import { Dropdown } from '../dropdown/dropdown';

function NoteCard({ data, Dragger }) {
  const dispatch = useDispatch();
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });
  const { title, key, description, stared, label } = data;
  const onLabelChange = (labels) => {
    dispatch(onLabelUpdate(noteData, key, labels));
  };
  const content = (
    <>
      <div className="nav-labels">
        <ul>
          <li>
            <Link onClick={() => onLabelChange('personal')} to="#">
              <Bullet className="personal" /> Personal
            </Link>
          </li>
          <li>
            <Link onClick={() => onLabelChange('work')} to="#">
              <Bullet className="work" /> Work
            </Link>
          </li>
          <li>
            <Link onClick={() => onLabelChange('social')} to="#">
              <Bullet className="social" /> Social
            </Link>
          </li>
          <li>
            <Link onClick={() => onLabelChange('important')} to="#">
              <Bullet className="important" /> Important
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  const onHandleDelete = () => {
    const value = noteData.filter((item) => item.key !== key);
    dispatch(noteDeleteData(value));
  };
  return (
    <Card className={label}>
      <Cards headless>
        <h4>
          <span>
            {title}
            <span className={`status-bullet ${label}`} />
          </span>
          <Dragger />
        </h4>
        <p>{description}</p>
        <div className="actions">
          <span>
            <Link
              className={stared ? 'star active' : 'star'}
              onClick={() => dispatch(onStarUpdate(noteData, key))}
              to="#"
            >
              <UilStar />
            </Link>
            <Link onClick={() => onHandleDelete()} to="#">
              <UilTrashAlt />
            </Link>
          </span>
          <Dropdown content={content}>
            <Link to="#">
              <UilEllipsisV />
            </Link>
          </Dropdown>
        </div>
      </Cards>
    </Card>
  );
}

NoteCard.propTypes = {
  data: PropTypes.object,
  Dragger: PropTypes.any,
};
export default NoteCard;
