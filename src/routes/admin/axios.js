import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AxiosView = lazy(() => import('../../container/crud/axios/Index'));
const AxiosAdd = lazy(() => import('../../container/crud/axios/Add'));
const AxiosEdit = lazy(() => import('../../container/crud/axios/Edit'));
const NotFound = lazy(() => import('../../container/pages/404'));

function AxiosRoute() {
  return (
    <Routes>
      <Route path="crud/*" element={<AxiosView />} />
      <Route path="crud/add" element={<AxiosAdd />} />
      <Route path="crud/edit/:id" element={<AxiosEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AxiosRoute;
