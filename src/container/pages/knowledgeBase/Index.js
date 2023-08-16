import React, { lazy, Suspense } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Spin } from 'antd';
import { Routes, NavLink, Route, Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import KnowledgeBaseTop from './overview/Knowledgebase/knowledgeTop';
import { KnowledgebaseArticleWrap, ArticleTabWrap, PopularArticleWrap, CtaWrap } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';

import articles from '../../../demoData/article.json';

const Plugins = lazy(() => import('./overview/ArticlePlugin'));
const Themes = lazy(() => import('./overview/ArticleTheme'));
const Extensions = lazy(() => import('./overview/ArticleExtension'));

function KnowledgeBase() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Knowledgebase',
    },
  ];
  const path = '/admin/knowledgebase';
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Knowledgebase" routes={PageRoutes} />
      <Main>
        <KnowledgeBaseTop />
        <KnowledgebaseArticleWrap>
          <div className="knowledgebase-article-container">
            <ArticleTabWrap className="ninjadash-article-tab">
              <div className="ninjadash-article-tab__menu">
                <nav>
                  <ul>
                    <li>
                      <NavLink to={`${path}/plugins`}>Plugins</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/themes`}>Themes</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/extensions`}>Extensions</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                    <Route index element={<Plugins />} exact />
                    <Route path="plugins" element={<Plugins />} />
                    <Route path="themes" element={<Themes />} />
                    <Route path="extensions" element={<Extensions />} />
                  </Routes>
                </Suspense>
              </div>
            </ArticleTabWrap>
            <PopularArticleWrap>
              <div className="ninjadash-popular-article ninjadash-popular-article-container">
                <h2 className="ninjadash-popular-article__title">Popular articles</h2>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 767: 2, 900: 3 }}>
                  <Masonry className="ninjadash-popular-article__box" gutter="15px">
                    {articles.map((article, i) => (
                      <div className={`ninjadash-popular-article__single theme-${article.type}`} key={i}>
                        <h4 className="single-article-title">{article.title}</h4>
                        <p>{article.text}</p>
                        <Link className="btn-link" to="/admin/knowledgebaseSingle/1">
                          Read more
                          <ArrowRightOutlined />
                        </Link>
                      </div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </PopularArticleWrap>
            <CtaWrap>
              <div className="ninjadash-knowledgebase-cta">
                <h2 className="ninjadash-knowledgebase-cta__title">Still no luck? We can help!</h2>
                <p>Contact us and we’ll get back to you as soon as possible.</p>
                <Button className="btn-rqSubmit" type="primary" size="large">
                  Submit a Request
                </Button>
              </div>
            </CtaWrap>
          </div>
        </KnowledgebaseArticleWrap>
      </Main>
    </>
  );
}

export default KnowledgeBase;
