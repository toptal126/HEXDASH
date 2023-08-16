import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Button = lazy(() => import('../../container/ui-elements/Button'));
const Alerts = lazy(() => import('../../container/ui-elements/Alerts'));
const Modals = lazy(() => import('../../container/ui-elements/Modals'));
const Cards = lazy(() => import('../../container/ui-elements/Cards'));
const Grid = lazy(() => import('../../container/ui-elements/Grid'));
const Tabs = lazy(() => import('../../container/ui-elements/Tabs'));
const Breadcrumb = lazy(() => import('../../container/ui-elements/Breadcrumb'));
const Pagination = lazy(() => import('../../container/ui-elements/Pagination'));
const PageHeader = lazy(() => import('../../container/ui-elements/PageHeaders'));
const Steps = lazy(() => import('../../container/ui-elements/Steps'));
const Comments = lazy(() => import('../../container/ui-elements/Comments'));
const Empty = lazy(() => import('../../container/ui-elements/Empty'));
const Statistic = lazy(() => import('../../container/ui-elements/Statistic'));
const Rate = lazy(() => import('../../container/ui-elements/Rate'));
const Slider = lazy(() => import('../../container/ui-elements/Slider'));
const Progress = lazy(() => import('../../container/ui-elements/Progress'));
const Tags = lazy(() => import('../../container/ui-elements/Tags'));
const Dropdown = lazy(() => import('../../container/ui-elements/Dropdown'));
const Popover = lazy(() => import('../../container/ui-elements/Popover'));
const Timeline = lazy(() => import('../../container/ui-elements/Timeline'));
const Drawer = lazy(() => import('../../container/ui-elements/Drawer'));
const Notification = lazy(() => import('../../container/ui-elements/Notification'));
const Result = lazy(() => import('../../container/ui-elements/Result'));
const Spiner = lazy(() => import('../../container/ui-elements/Spin'));
const Carousel = lazy(() => import('../../container/ui-elements/Carousel'));
const Collapse = lazy(() => import('../../container/ui-elements/Collapse'));
const Avatar = lazy(() => import('../../container/ui-elements/Avata'));
const Badge = lazy(() => import('../../container/ui-elements/Badge'));
const AutoComplete = lazy(() => import('../../container/ui-elements/AutoComplete'));
const Checkbox = lazy(() => import('../../container/ui-elements/Checkbox'));
const Cascader = lazy(() => import('../../container/ui-elements/Cascader'));
const DatePicker = lazy(() => import('../../container/ui-elements/DatePicker'));
const Switches = lazy(() => import('../../container/ui-elements/Switch'));
const TimePicker = lazy(() => import('../../container/ui-elements/Timepicker'));
const TreeSelect = lazy(() => import('../../container/ui-elements/TreeSelect'));
const Calendar = lazy(() => import('../../container/ui-elements/Calender'));
const Form = lazy(() => import('../../container/ui-elements/Form'));
const List = lazy(() => import('../../container/ui-elements/List'));
const Skeleton = lazy(() => import('../../container/ui-elements/Skeleton'));
const Selects = lazy(() => import('../../container/ui-elements/Select'));
const Radio = lazy(() => import('../../container/ui-elements/Radio'));
const Input = lazy(() => import('../../container/ui-elements/Inputs'));
const Upload = lazy(() => import('../../container/ui-elements/Upload'));
const Message = lazy(() => import('../../container/ui-elements/Messages'));
const Confirme = lazy(() => import('../../container/ui-elements/PopConfirme'));
const Menu = lazy(() => import('../../container/ui-elements/Menu'));
const DragDrop = lazy(() => import('../../container/ui-elements/DragAndDrop'));
const DashboardBase = lazy(() => import('../../container/dashboard/DashboardBase'));
const NotFound = lazy(() => import('../../container/pages/404'));

function ComponentRoute() {
  return (
    <Routes>
      <Route path="button" element={<Button />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="modals" element={<Modals />} />
      <Route path="cards" element={<Cards />} />
      <Route path="grid" element={<Grid />} />
      <Route path="tabs" element={<Tabs />} />
      <Route path="breadcrumb" element={<Breadcrumb />} />
      <Route path="list" element={<List />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="page-headers" element={<PageHeader />} />
      <Route path="steps" element={<Steps />} />
      <Route path="comments" element={<Comments />} />
      <Route path="empty" element={<Empty />} />
      <Route path="statistic" element={<Statistic />} />
      <Route path="rate" element={<Rate />} />
      <Route path="slider" element={<Slider />} />
      <Route path="progress" element={<Progress />} />
      <Route path="tags" element={<Tags />} />
      <Route path="popover" element={<Popover />} />
      <Route path="timeline" element={<Timeline />} />
      <Route path="drawer" element={<Drawer />} />
      <Route path="notification" element={<Notification />} />
      <Route path="spiner" element={<Spiner />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="collapse" element={<Collapse />} />
      <Route path="auto-complete" element={<AutoComplete />} />
      <Route path="checkbox" element={<Checkbox />} />
      <Route path="cascader" element={<Cascader />} />
      <Route path="date-picker" element={<DatePicker />} />
      <Route path="switch" element={<Switches />} />
      <Route path="select" element={<Selects />} />
      <Route path="timePicker" element={<TimePicker />} />
      <Route path="tree-select" element={<TreeSelect />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="form" element={<Form />} />
      <Route path="dropdown" element={<Dropdown />} />
      <Route path="result" element={<Result />} />
      <Route path="avatar" element={<Avatar />} />
      <Route path="badge" element={<Badge />} />
      <Route path="radio" element={<Radio />} />
      <Route path="skeleton" element={<Skeleton />} />
      <Route path="input" element={<Input />} />
      <Route path="upload" element={<Upload />} />
      <Route path="message" element={<Message />} />
      <Route path="confirm" element={<Confirme />} />
      <Route path="menu" element={<Menu />} />
      <Route path="drag" element={<DragDrop />} />
      <Route exact path="base" element={<DashboardBase />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ComponentRoute;
