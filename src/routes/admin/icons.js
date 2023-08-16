import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Fa = lazy(() => import('../../container/icons/FaIcons'));
const AntdIcons = lazy(() => import('../../container/icons/AntdIcons'));
const UniIcons = lazy(() => import('../../container/icons/UniIcons'));
const NotFound = lazy(() => import('../../container/pages/404'));

function IconsRoute() {
  return (
    <Routes>
      <Route path="font-awesome" element={<Fa />} />
      <Route path="antd" element={<AntdIcons />} />
      <Route path="unicon" element={<UniIcons />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default IconsRoute;
