import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const FbView = lazy(() => import('../../container/crud/fireStore/View'));
const FbAdd = lazy(() => import('../../container/crud/fireStore/addNew'));
const FbUpdate = lazy(() => import('../../container/crud/fireStore/edit'));

function FirebaseRoute() {
  return (
    <Routes>
      <Route path="fbView" element={<FbView />} />
      <Route path="fbAdd" element={<FbAdd />} />
      <Route path="edit/:id" element={<FbUpdate />} />
    </Routes>
  );
}

export default FirebaseRoute;
