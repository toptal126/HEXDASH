import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Gallery = lazy(() => import('../../container/pages/Gallery'));
const GalleryTwo = lazy(() => import('../../container/pages/GalleryTwo'));
const NotFound = lazy(() => import('../../container/pages/404'));

function GalleryRoute() {
  return (
    <Routes>
      <Route path="two" element={<GalleryTwo />} />
      <Route path="one" element={<Gallery />} />
      <Route index element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default GalleryRoute;
