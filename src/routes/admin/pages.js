import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const NotFound = lazy(() => import('../../container/pages/404'));
const Pricing = lazy(() => import('../../container/pages/PricingTable'));
const Maintenance = lazy(() => import('../../container/pages/Maintenance'));
const Faq = lazy(() => import('../../container/pages/Faq'));
const Search = lazy(() => import('../../container/pages/SearchResult'));
const ComingSoon = lazy(() => import('../../container/pages/ComingSoon'));
const TermsCondition = lazy(() => import('../../container/pages/TermsComditions'));
const Wizards = lazy(() => import('../../container/pages/wizards/Wizards'));
const BlogOne = lazy(() => import('../../container/pages/blog/BlogOne'));
const BlogTwo = lazy(() => import('../../container/pages/blog/BlogTwo'));
const BlogThree = lazy(() => import('../../container/pages/blog/BlogThree'));
const BlogDetails = lazy(() => import('../../container/pages/blog/BlogDetails'));
const BlankPage = lazy(() => import('../../container/pages/BlankPage'));
const Settings = lazy(() => import('../../container/profile/settings/Settings'));
const ChangeLog = lazy(() => import('../../container/pages/ChangeLog'));
const Banners = lazy(() => import('../../container/pages/Banners'));
const Testimonials = lazy(() => import('../../container/pages/Testimonials'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="changelog" element={<ChangeLog />} />
      <Route path="settings/*" element={<Settings />} />
      <Route path="Pricing" element={<Pricing />} />
      <Route path="banners" element={<Banners />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="faq" element={<Faq />} />
      <Route path="search" element={<Search />} />
      <Route path="starter" element={<BlankPage />} />
      <Route path="comingSoon" element={<ComingSoon />} />
      <Route path="termCondition" element={<TermsCondition />} />
      <Route path="wizards/*" element={<Wizards />} />
      <Route path="blog/blogone" element={<BlogOne />} />
      <Route path="blog/blogtwo" element={<BlogTwo />} />
      <Route path="blog/blogthree" element={<BlogThree />} />
      <Route path="blog/details" element={<BlogDetails />} />
      <Route path="*" element={<NotFound />} />
      <Route path="maintenance" element={<Maintenance />} />
    </Routes>
  );
}

export default PagesRoute;
