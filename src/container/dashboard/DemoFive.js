import React, { Suspense, lazy } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import BlogCard from '../../components/cards/BlogCard';
import { Main } from '../styled';
import { PageHeaderBanner } from '../../components/banners/Banners';
import cardData from '../../demoData/sampleCards.json';

const UserOverview = lazy(() => import('./overview/demoFive/UserOverview'));
const Calender = lazy(() => import('./overview/demoFive/CalendarHead'));
const MemberProgress = lazy(() => import('./overview/demoFive/MemberProgress'));
const UpcomingEvents = lazy(() => import('./overview/demoFive/UpcomingEvents'));
const KnowledgeBase = lazy(() => import('./overview/demoFive/KnowledgeBase'));
const Timelines = lazy(() => import('./overview/demoFive/Timeline'));
const Inbox = lazy(() => import('./overview/demoFive/Inbox'));

const { BlogCardData } = cardData;
function DemoFive() {
  return (
    <Main>
      <Row gutter={25}>
        <Col xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <PageHeaderBanner
              type="corporate"
              title="Hey Danial! Welcome to the Dashboard"
              subtitle="There are many variations of passages of Lorem Ipsum available,
ut the majority have suffered passages of Lorem Ipsum available alteration in some form"
            />
          </Suspense>
        </Col>
        <Col xxl={16} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <UserOverview />
          </Suspense>
        </Col>
        <Col xxl={8} xl={10} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <Calender />
          </Suspense>
        </Col>
        <Col xxl={12} xl={14} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <MemberProgress />
          </Suspense>
        </Col>
        <Col xl={12} lg={24} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <UpcomingEvents />
          </Suspense>
        </Col>
        <Col xxl={8} xl={12} lg={12} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <KnowledgeBase />
          </Suspense>
        </Col>
        <Col xxl={8} xl={12} lg={12} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <Timelines />
          </Suspense>
        </Col>
        <Col xxl={8} xl={12} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <Inbox />
          </Suspense>
        </Col>
        {BlogCardData.slice(0, 3).map((blog, index) => {
          return (
            index <= 3 && (
              <Col key={blog.id} xxl={8} sm={12} xs={24}>
                <BlogCard item={blog} />
              </Col>
            )
          );
        })}
      </Row>
    </Main>
  );
}

export default DemoFive;
