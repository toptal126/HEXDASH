import React, { useState } from 'react';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilAngleUp from '@iconscout/react-unicons/icons/uil-angle-up';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import { Link } from 'react-router-dom';
import { SidebarNavWrap } from '../../style';

function SideNav() {
  const [open, setOpen] = useState('menu1');
  return (
    <SidebarNavWrap>
      <div className="knowledge-sidebar">
        <h4 className="knowledge-sidebar__title">Plugins</h4>
        <UilTimes />
        <ul>
          <li>
            <Link to="#" onClick={() => setOpen('menu1')} className={open === 'menu1' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
              <span className="menu-text">Introduction to Plugin</span>
            </Link>
            <ul className={open === 'menu1' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#" className="active">
                  Switch between accounts
                </Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
              <li>
                <Link to="#">Understand your actions in lorem</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu2')} className={open === 'menu2' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}{' '}
              <span className="menu-text">Productivity tools for your Plugin admin & change password</span>
            </Link>
            <ul className={open === 'menu2' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
              <li>
                <Link to="#">Understand your actions in lorem</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu3')} className={open === 'menu3' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}{' '}
              <span className="menu-text">Download, install, and upgrade</span>
            </Link>
            <ul className={open === 'menu3' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu4')} className={open === 'menu4' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}{' '}
              <span className="menu-text">Explore plans & features</span>
            </Link>
            <ul className={open === 'menu4' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu5')} className={open === 'menu5' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}{' '}
              <span className="menu-text">Explore plans & features</span>
            </Link>
            <ul className={open === 'menu5' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu6')} className={open === 'menu6' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />} <span className="menu-text">Profile Settings</span>
            </Link>
            <ul className={open === 'menu6' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu7')} className={open === 'menu7' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}{' '}
              <span className="menu-text">Listings Management</span>
            </Link>
            <ul className={open === 'menu7' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" onClick={() => setOpen('menu8')} className={open === 'menu8' ? 'active' : ''}>
              {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />} <span className="menu-text">Miscellaneous</span>
            </Link>
            <ul className={open === 'menu8' ? 'submenu show' : 'submenu'}>
              <li>
                <Link to="#">Switch between accounts</Link>
              </li>
              <li>
                <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link to="#">Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link to="#">Threads to organize discussions</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </SidebarNavWrap>
  );
}

export default SideNav;
