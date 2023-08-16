import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
import { Badge } from 'antd';
import { BlockSpan, ChatWrapper } from '../style';
import { textRefactor } from '../../../components/utilities/utilities';
import { filterSinglePage } from '../../../redux/chat/actionCreator';
import { Button } from '../../../components/buttons/buttons';

const AllContacts = React.memo(() => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat.data);

  const [state] = useState({
    chatData: chat,
  });

  const { chatData } = state;

  const dataFiltering = (e) => {
    dispatch(filterSinglePage(e.currentTarget.getAttribute('data-email')));
  };

  return (
    <ChatWrapper>
      <div className="create-action">
        <Button className="btn-add" size="default" type="default" shape="circle" block>
          <UilUserPlus />
          Add New Contact
        </Button>
      </div>
      <ul>
        {chatData &&
          chatData
            .sort((a, b) => {
              return b.time - a.time;
            })
            .map((user, key) => {
              const { userName, content, email, active, img } = user;
              const id = content[content.length - 1].time;
              const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
              return (
                <li key={id} className="chat-link-signle">
                  <NavLink onClick={dataFiltering} data-email={email} to={`./${email}`}>
                    <div className="author-figure">
                      <img src={require(`../../../static/img/chat-author/${img}`)} alt="" />
                      <span className={active ? 'active' : 'inactive'} />
                    </div>
                    <div className="author-info">
                      <BlockSpan className="author-name">{userName}</BlockSpan>

                      <BlockSpan className="author-chatText">
                        {textRefactor(content[content.length - 1].content, 5)}
                      </BlockSpan>
                    </div>
                    <div className="author-chatMeta">
                      <BlockSpan>{same ? moment(id).format('hh:mm A') : moment(id).format('dddd')}</BlockSpan>
                      {key <= 1 && <Badge className="badge-success" count={3} />}
                    </div>
                  </NavLink>
                </li>
              );
            })}
      </ul>
    </ChatWrapper>
  );
});

export default AllContacts;
