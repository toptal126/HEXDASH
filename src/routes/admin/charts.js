import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ChartJs = lazy(() => import('../../container/charts/ChartJs'));
const GoogleChart = lazy(() => import('../../container/charts/GoogleCharts'));
const Peity = lazy(() => import('../../container/charts/Peity'));
const RechartsBarChart = lazy(() => import('../../container/charts/recharts/Bar'));
const RechartsAreaChart = lazy(() => import('../../container/charts/recharts/Area'));
const RechartsComposed = lazy(() => import('../../container/charts/recharts/Composed'));
const RechartsLine = lazy(() => import('../../container/charts/recharts/Line'));
const RechartsPie = lazy(() => import('../../container/charts/recharts/Pie'));
const RechartsRadar = lazy(() => import('../../container/charts/recharts/Radar'));
const RechartsRadial = lazy(() => import('../../container/charts/recharts/Radial'));
const NotFound = lazy(() => import('../../container/pages/404'));

function ChartRoute() {
  return (
    <Routes>
      <Route path="chartjs" element={<ChartJs />} />
      <Route path="google-chart" element={<GoogleChart />} />
      <Route path="peity" element={<Peity />} />
      <Route path="recharts/bar" element={<RechartsBarChart />} />
      <Route path="recharts/area" element={<RechartsAreaChart />} />
      <Route path="recharts/composed" element={<RechartsComposed />} />
      <Route path="recharts/line" element={<RechartsLine />} />
      <Route path="recharts/pie" element={<RechartsPie />} />
      <Route path="recharts/radar" element={<RechartsRadar />} />
      <Route path="recharts/radial" element={<RechartsRadial />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ChartRoute;
