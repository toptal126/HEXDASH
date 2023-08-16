import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Charts = lazy(() => import('../../container/widgets/Charts'));
const Carts = lazy(() => import('../../container/widgets/Cards'));
const Mixed = lazy(() => import('../../container/widgets/Mix'));
const NotFound = lazy(() => import('../../container/pages/404'));

function WidgetsRoute() {
  return (
    <Routes>
      <Route path="chart" element={<Charts />} />
      <Route path="card" element={<Carts />} />
      <Route path="mixed" element={<Mixed />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default WidgetsRoute;
