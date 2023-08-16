import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilRss from '@iconscout/react-unicons/icons/uil-rss';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

function ShareButtonPageHeader() {
  const content = (
    <>
      <NavLink to="#">
        <UilFacebook />
        <span>Facebook</span>
      </NavLink>
      <NavLink to="#">
        <UilTwitter />
        <span>Twitter</span>
      </NavLink>
      <NavLink to="#">
        <UilRss />
        <span>Feed</span>
      </NavLink>
      <NavLink to="#">
        <UilLinkedin />
        <span>Linkedin</span>
      </NavLink>
      <NavLink to="#">
        <UilInstagram />
        <span>Instagram</span>
      </NavLink>
    </>
  );
  return (
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button size="small" type="white" key="3">
        <UilShareAlt />
        Share
      </Button>
    </Popover>
  );
}

export { ShareButtonPageHeader };
