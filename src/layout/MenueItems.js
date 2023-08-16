import {
  Uil500px,
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBagAlt,
  UilBookAlt,
  UilBookOpen,
  UilBookReader,
  UilCalendarAlt,
  UilChartBar,
  UilChat,
  UilCheckSquare,
  UilCircle,
  UilClipboardAlt,
  UilClock,
  UilCompactDisc,
  UilCreateDashboard,
  UilDatabase,
  UilDocumentLayoutLeft,
  UilEdit,
  UilEnvelope,
  UilExchange,
  UilExclamationOctagon,
  // UilExpandArrowsAlt,
  UilFile,
  UilFileShieldAlt,
  UilHeadphones,
  UilIcons,
  UilImages,
  UilLayerGroup,
  UilMap,
  UilPresentation,
  UilQuestionCircle,
  UilSearch,
  UilServer,
  UilSetting,
  UilShoppingCart,
  UilSquareFull,
  UilTable,
  UilUsdCircle,
  UilUsersAlt,
  UilWindowSection,
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
import versions from '../demoData/changelog.json';
import { changeDirectionMode, changeLayoutMode, changeMenuMode } from '../redux/themeLayout/actionCreator';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const dispatch = useDispatch();

  const path = '/admin';

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };
  const changeNavbar = (topMode) => {
    const html = document.querySelector('html');
    if (topMode) {
      html.classList.add('ninjadash-topmenu');
    } else {
      html.classList.remove('ninjadash-topmenu');
    }
    dispatch(changeMenuMode(topMode));
  };
  const changeLayoutDirection = (rtlMode) => {
    if (rtlMode) {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'rtl');
    } else {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'ltr');
    }
    dispatch(changeDirectionMode(rtlMode));
  };

  const darkmodeActivated = () => {
    document.body.classList.add('dark-mode');
  };

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark-mode');
  };

  const items = [
    getItem(t('dashboard'), 'dashboard', !topMenu && <UilCreateDashboard />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          {t('demo')} {t('1')}
        </NavLink>,
        'demo-1',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-2`}>
          {t('demo')} {t('2')}
        </NavLink>,
        'demo-2',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-3`}>
          {t('demo')} {t('3')}
        </NavLink>,
        'demo-3',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-4`}>
          {t('demo')} {t('4')}
        </NavLink>,
        'demo-4',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-5`}>
          {t('demo')} {t('5')}
        </NavLink>,
        'demo-5',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-6`}>
          {t('demo')} {t('6')}
        </NavLink>,
        'demo-6',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-7`}>
          {t('demo')} {t('7')}
        </NavLink>,
        'demo-7',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-8`}>
          {t('demo')} {t('8')}
        </NavLink>,
        'demo-8',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-9`}>
          {t('demo')} {t('9')}
        </NavLink>,
        'demo-9',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-10`}>
          {t('demo')} {t('10')}
        </NavLink>,
        'demo-10',
        null,
      ),
    ]),
    getItem(t('layouts'), 'layout', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            darkmodeDiactivated();
            changeLayout('lightMode');
          }}
          to="#"
        >
          {t('light')} {t('mode')}
        </NavLink>,
        'light',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            darkmodeActivated();
            changeLayout('darkMode');
          }}
          to="#"
        >
          {t('dark')} {t('mode')}
        </NavLink>,
        'dark',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            changeNavbar(true);
          }}
          to="#"
        >
          {t('top')} {t('menu')}
        </NavLink>,
        'topMenu',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            changeNavbar(false);
          }}
          to="#"
        >
          {t('side')} {t('menu')}
        </NavLink>,
        'sideMenu',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            changeLayoutDirection(true);
          }}
          to="#"
        >
          RTL
        </NavLink>,
        'rtl',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            changeLayoutDirection(false);
          }}
          to="#"
        >
          LTR
        </NavLink>,
        'ltr',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/changelog`}>
        {t('changelog')}
        <span className="badge badge-primary menuItem">{versions[0].version}</span>
      </NavLink>,
      'changelog',
      !topMenu && <UilArrowGrowth />,
    ),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('application')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('email'), 'email', !topMenu && <UilEnvelope />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/email/inbox`}>
          {t('inbox')}
        </NavLink>,
        'inbox',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
          {t('read')} {t('email')}
        </NavLink>,
        'single',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/main/chat/private/rofiq@gmail.com`}>
        {t('chat')}
      </NavLink>,
      'chat',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/main/chat/private/rofiq@gmail.com`}>
          <UilChat />
        </NavLink>
      ),
    ),
    getItem(t('eCommerce'), 'ecommerce', !topMenu && <UilShoppingCart />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/products/grid`}>
          {t('products')}
        </NavLink>,
        'products',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/productDetails/1`}>
          {t('product')} {t('details')}
        </NavLink>,
        'productDetails',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/add-product`}>
          {t('product')} {t('add')}
        </NavLink>,
        'add-product',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/edit-product`}>
          {t('product')} {t('edit')}
        </NavLink>,
        'edit-product',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/cart`}>
          {t('cart')}
        </NavLink>,
        'cart',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/orders`}>
          {t('orders')}
        </NavLink>,
        'orsers',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/sellers`}>
          {t('sellers')}
        </NavLink>,
        'sellers',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/Invoice`}>
          {t('invoices')}
        </NavLink>,
        'Invoice',
        null,
      ),
    ]),
    getItem(`${t('social')} ${t('app')}`, 'profile', !topMenu && <Uil500px />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/overview`}>
          {t('my')} {t('profile')}
        </NavLink>,
        'myProfile',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/timeline`}>
          {t('timeline')}
        </NavLink>,
        'profileTimeline',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/activity`}>
          {t('activity')}
        </NavLink>,
        'profileActivity',
        null,
      ),
    ]),
    getItem(t('project'), 'project', !topMenu && <UilBagAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/grid`}>
          {t('project')} {t('grid')}
        </NavLink>,
        'projectGrid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/list`}>
          {t('project')} {t('list')}
        </NavLink>,
        'projectList',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/create`}>
          {t('create')} {t('project')}
        </NavLink>,
        'ProjectCreate',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/projectDetails/1/tasklist`}>
          {t('project')} {t('details')}
        </NavLink>,
        'projectDetails',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/calendar/month`}>
        {t('calendar')}
      </NavLink>,
      't-menu-calendar',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/app/calendar/month`}>
          <UilCalendarAlt />
        </NavLink>
      ),
    ),
    getItem(t('users'), 'users', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/team`}>
          {t('team')}
        </NavLink>,
        'team',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/grid`}>
          {t('users')} {t('grid')}
        </NavLink>,
        'user-grid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
          {t('users')} {t('list')}
        </NavLink>,
        'user-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-style`}>
          {t('users')} {t('grid')} {t('style')}
        </NavLink>,
        'grid-style',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
          {t('add')} {t('user')}
        </NavLink>,
        'addUser',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
          {t('users')} {t('table')}
        </NavLink>,
        'user-dataTable',
        null,
      ),
    ]),
    getItem(t('contact'), 'contact', !topMenu && <UilAt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/contact/grid`}>
          {t('contact')} {t('grid')}
        </NavLink>,
        'contact-grid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
          {t('contact')} {t('list')}
        </NavLink>,
        'contact-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
          {t('contact')} {t('create')}
        </NavLink>,
        'addNew',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/note/all`}>
        {t('note')}
      </NavLink>,
      'note',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/app/note/all`}>
          <UilClipboardAlt />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/to-do`}>
        {t('to')} {t('do')}
      </NavLink>,
      'to-do',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/app/to-do`}>
          <UilCheckSquare />
        </NavLink>
      ),
    ),
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}/app/kanban`}>
    //     {t('kanban Board')}
    //   </NavLink>,
    //   'kanban',
    //   !topMenu && <UilExpandArrowsAlt />,
    // ),
    getItem(`${t('import')} ${t('export')}`, 'importExport', !topMenu && <UilExchange />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/importExport/import`}>
          {t('import')}
        </NavLink>,
        'import',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/importExport/export`}>
          {t('export')}
        </NavLink>,
        'export',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/task/all`}>
        {t('task')}
      </NavLink>,
      'task',
      !topMenu && <UilFile />,
    ),
    getItem(t('support'), 'supports', !topMenu && <UilHeadphones />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/support/tickets`}>
          {t('support')}
        </NavLink>,
        'support',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/support/tickets/add`}>
          {t('add')} {t('support')}
        </NavLink>,
        'add-support',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/support/ticketDetails/01`}>
          {t('view')} {t('support')}
        </NavLink>,
        'view-support',
        null,
      ),
    ]),
    getItem(`${t('learning')} ${t('app')}`, 'course', !topMenu && <UilBookReader />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/course`}>
          {t('courses')}
        </NavLink>,
        'course-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/course/courseDetails/1`}>
          {t('course')} {t('single')}
        </NavLink>,
        'single-course',
        null,
      ),
    ]),
    getItem(`${t('jobs')} ${t('search')}`, 'job-search', !topMenu && <UilHeadphones />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/jobs/grid`}>
          {t('jobs')}
        </NavLink>,
        'jobs',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/jobDetails/1`}>
          {t('jobs')} {t('details')}
        </NavLink>,
        'job-details',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/job/apply`}>
          {t('job')} {t('apply')}
        </NavLink>,
        'job-apply',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('crud')}</NavTitle>,
      'CRUD-title',
      null,
      null,
      'group',
    ),
    getItem(t('axios'), 'axios', !topMenu && <UilDatabase />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/axios/crud/axios-view`}>
          {t('view')} {t('all')}
        </NavLink>,
        'axios-view',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/axios/crud/add`}>
          {t('add')} {t('new')}
        </NavLink>,
        'axios-add',
        null,
      ),
    ]),
    getItem(t('firestore'), 'Firestore', !topMenu && <UilDatabase />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/firestore/fbView`}>
          {t('view')} {t('all')}
        </NavLink>,
        'fbView',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/firestore/fbAdd`}>
          {t('add')} {t('new')}
        </NavLink>,
        'fbAdd',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('features')}</NavTitle>,
      'features-title',
      null,
      null,
      'group',
    ),
    getItem(t('ui elements'), 'components', !topMenu && <UilLayerGroup />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/alerts`}>
          {t('alerts')}
        </NavLink>,
        'alerts',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/auto-complete`}>
          {t('autocomplete')}
        </NavLink>,
        'auto-complete',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/avatar`}>
          {t('avatar')}
        </NavLink>,
        'avatar',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/badge`}>
          {t('badge')}
        </NavLink>,
        'badge',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/breadcrumb`}>
          {t('breadcrumb')}
        </NavLink>,
        'breadcrumb',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/button`}>
          {t('button')}
        </NavLink>,
        'button',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/calendar`}>
          {t('calendar')}
        </NavLink>,
        'calendar',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/cards`}>
          {t('cards')}
        </NavLink>,
        'cards',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/carousel`}>
          {t('carousel')}
        </NavLink>,
        'carousel',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/cascader`}>
          {t('casecader')}
        </NavLink>,
        'cascader',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/checkbox`}>
          {t('checkbox')}
        </NavLink>,
        'checkbox',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/collapse`}>
          {t('collapse')}
        </NavLink>,
        'callapse',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/comments`}>
          {t('comments')}
        </NavLink>,
        'comments',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/base`}>
          {t('dashboard')} {t('base')}
        </NavLink>,
        'base',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/date-picker`}>
          {t('datepicker')}
        </NavLink>,
        'date-picker',
        null,
      ),
      getItem(<NavLink to="/admin/components/drag">Drag & Drop</NavLink>, 'drag', null),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/drawer`}>
          {t('drawer')}
        </NavLink>,
        'drawer',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/dropdown`}>
          {t('dropdown')}
        </NavLink>,
        'dropdown',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/empty`}>
          {t('empty')}
        </NavLink>,
        'empty',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/grid`}>
          {t('grid')}
        </NavLink>,
        '-dash-grid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/input`}>
          {t('input')}
        </NavLink>,
        'input',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/list`}>
          {t('list')}
        </NavLink>,
        'dash-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/menu`}>
          {t('menu')}
        </NavLink>,
        'menu',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/message`}>
          {t('message')}
        </NavLink>,
        'message',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/modals`}>
          {t('modals')}
        </NavLink>,
        'modals',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/notification`}>
          {t('notification')}
        </NavLink>,
        'notifications',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/page-headers`}>
          {t('page')} {t('headers')}
        </NavLink>,
        'page-headers',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/pagination`}>
          {t('paginations')}
        </NavLink>,
        'paginations',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/confirm`}>
          {t('popconfirm')}
        </NavLink>,
        'popconfirme',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/popover`}>
          {t('popover')}
        </NavLink>,
        'popover',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/progress`}>
          {t('progress')}
        </NavLink>,
        'progress',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/radio`}>
          {t('radio')}
        </NavLink>,
        'radio',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/rate`}>
          {t('rate')}
        </NavLink>,
        'rate',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/result`}>
          {t('result')}
        </NavLink>,
        'result',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/select`}>
          {t('select')}
        </NavLink>,
        'select',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/skeleton`}>
          {t('skeleton')}
        </NavLink>,
        'skeleton',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/slider`}>
          {t('slider')}
        </NavLink>,
        'slider',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/spiner`}>
          {t('spinner')}
        </NavLink>,
        'spiner',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/statistic`}>
          {t('statistics')}
        </NavLink>,
        'statistics',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/steps`}>
          {t('steps')}
        </NavLink>,
        'steps',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/switch`}>
          {t('switch')}
        </NavLink>,
        'switch',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/tabs`}>
          {t('tabs')}
        </NavLink>,
        'tabs',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/tags`}>
          {t('tags')}
        </NavLink>,
        'tags',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/timeline`}>
          {t('timeline')}
        </NavLink>,
        'timeline',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/timepicker`}>
          {t('timepicker')}
        </NavLink>,
        'timepicker',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/tree-select`}>
          {t('treeselect')}
        </NavLink>,
        'treeselect',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/components/upload`}>
          {t('upload')}
        </NavLink>,
        'upload',
        null,
      ),
    ]),
    getItem(t('charts'), 'charts', !topMenu && <UilChartBar />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/charts/chartjs`}>
          {t('chart')} {t('js')}
        </NavLink>,
        'chartjs',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/charts/google-chart`}>
          {t('google')} {t('chart')}
        </NavLink>,
        'google-chart',
        null,
      ),
      getItem(t('recharts'), 'recharts', !topMenu && <UilChartBar />, [
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/bar`}>
            {t('bar')} {t('chart')}
          </NavLink>,
          'bar',
          null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/area`}>
            {t('Area')} {t('chart')}
          </NavLink>,
          'area',
          null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/composed`}>
            {t('Composed')} {t('chart')}
          </NavLink>,
          'composed',
          null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/line`}>
            {t('Line')} {t('chart')}
          </NavLink>,
          'line',
          null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/pie`}>
            {t('Pie')} {t('chart')}
          </NavLink>,
          'pie',
          null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radar`}>
            {t('radar')} {t('chart')}
          </NavLink>,
          'radar',
          null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radial`}>
            {t('radial')} {t('charts')}
          </NavLink>,
          'radial',
          null,
        ),
      ]),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/charts/peity`}>
          {t('peity')} {t('charts')}
        </NavLink>,
        'peity',
        null,
      ),
    ]),
    getItem(t('forms'), 'forms', !topMenu && <UilCompactDisc />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/features/form-layout`}>
          {t('form')} {t('layouts')}
        </NavLink>,
        'form-layout',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/features/form-elements`}>
          {t('form')} {t('elements')}
        </NavLink>,
        'form-elements',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/features/form-components`}>
          {t('form')} {t('components')}
        </NavLink>,
        'form-components',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/features/form-validation`}>
          {t('form')} {t('validation')}
        </NavLink>,
        'form-validation',
        null,
      ),
    ]),
    getItem(t('table'), 'table', !topMenu && <UilTable />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/tables/basic`}>
          {t('basic')} {t('table')}
        </NavLink>,
        'basicTable',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/tables/dataTable`}>
          {t('data')} {t('table')}
        </NavLink>,
        'dataTable',
        null,
      ),
    ]),
    getItem(t('widgets'), 'widgets', !topMenu && <UilServer />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/widgets/chart`}>
          {t('chart')}
        </NavLink>,
        'chart',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/widgets/card`}>
          {t('card')}
        </NavLink>,
        'card',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/widgets/mixed`}>
          {t('mixed')}
        </NavLink>,
        'mixed',
        null,
      ),
    ]),
    getItem(t('Wizards'), 'wizards', !topMenu && <UilSquareFull />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/wizards/one`}>
          {t('Wizard')} {t('1')}
        </NavLink>,
        'wizard-one',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/wizards/two`}>
          {t('Wizard')} {t('2')}
        </NavLink>,
        'wizard-two',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/wizards/three`}>
          {t('Wizard')} {t('3')}
        </NavLink>,
        'wizard-three',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/wizards/four`}>
          {t('Wizard')} {t('4')}
        </NavLink>,
        'wizard-four',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/wizards/five`}>
          {t('Wizard')} {t('5')}
        </NavLink>,
        'wizard-five',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/wizards/six`}>
          {t('Wizard')} {t('6')}
        </NavLink>,
        'wizard-six',
        null,
      ),
    ]),
    getItem(t('icons'), 'icons', !topMenu && <UilIcons />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/icons/unicon`}>
          {t('unicon(svg)')}
        </NavLink>,
        'unicons',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/icons/font-awesome`}>
          {t('fontawesome')}
        </NavLink>,
        'font-awesome',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/icons/antd`}>
          {t('ant')} {t('design')} {t('icons')}
        </NavLink>,
        'antd',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/editor`}>
        {t('editors')}
      </NavLink>,
      'editor',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/editor`}>
          <UilEdit />
        </NavLink>
      ),
    ),
    getItem(t('maps'), 'maps', !topMenu && <UilMap />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/maps/google`}>
          {t('google')} {t('maps')}
        </NavLink>,
        'google',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/maps/leaflet`}>
          {t('leaflet')} {t('map')}
        </NavLink>,
        'leaflet',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/maps/Vector`}>
          {t('simple')} {t('map')}
        </NavLink>,
        'vector',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Pages')}</NavTitle>,
      'page-title',
      null,
      null,
      'group',
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/settings`}>
        {t('settings')}
      </NavLink>,
      'settings',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/settings`}>
          <UilSetting />
        </NavLink>
      ),
    ),
    getItem(t('gallery'), 'gallery', !topMenu && <UilImages />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/gallery/one`}>
          {t('gallery')} {t('1')}
        </NavLink>,
        'galllery-one',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/pricing`}>
        {t('pricing')}
      </NavLink>,
      'pricing',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/pricing`}>
          <UilUsdCircle />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/banners`}>
        {t('banners')}
      </NavLink>,
      'banners',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/banners`}>
          <UilPresentation />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/testimonials`}>
        {t('testimonials')}
      </NavLink>,
      'testimonials',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/testimonials`}>
          <UilBookOpen />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/faq`}>
        {t('faqs')}
      </NavLink>,
      'faq',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/faq`}>
          <UilQuestionCircle />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/search`}>
        {t('search')} {t('results')}
      </NavLink>,
      'search',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/search`}>
          <UilSearch />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/starter`}>
        {t('blank')} {t('page')}
      </NavLink>,
      'starter',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/starter`}>
          <UilCircle />
        </NavLink>
      ),
    ),
    getItem(t('Knowledgebase'), 'knowledgebase', !topMenu && <UilBookAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/knowledgebase/plugins`}>
          {t('knowledge')} {t('base')}
        </NavLink>,
        'plugins',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/all-articles`}>
          {t('all')} {t('article')}
        </NavLink>,
        'all-articles',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/knowledgebaseSingle/1`}>
          {t('single')} {t('article')}
        </NavLink>,
        'knowledgebaseSingle',
        null,
      ),
    ]),
    getItem(t('blog'), 'blog', !topMenu && <UilDocumentLayoutLeft />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/blog/blogone`}>
          {t('blog')} {t('one')}
        </NavLink>,
        'blog-one',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/blog/blogtwo`}>
          {t('blog')} {t('two')}
        </NavLink>,
        'blog-2',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/blog/blogthree`}>
          {t('blog')} {t('three')}
        </NavLink>,
        'blog-3',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/blog/details`}>
          {t('blog')} {t('details')}
        </NavLink>,
        'blog-details',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/maintenance`}>
        {t('maintanance')}
      </NavLink>,
      'maintenance',
      !topMenu && <UilAirplay />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/404`}>
        {t('404')}
      </NavLink>,
      '404',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/404`}>
          <UilExclamationOctagon />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/comingSoon`}>
        {t('coming')} {t('soon')}
      </NavLink>,
      'comingsoon',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/comingSoon`}>
          <UilClock />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/termCondition`}>
        {t('terms')} {t('&')} {t('conditions')}
      </NavLink>,
      'termcondition',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/termCondition`}>
          <UilFileShieldAlt />
        </NavLink>
      ),
    ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
