/* eslint-disable import/no-unresolved */
import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Swiper from 'react-id-swiper';
import { TestimonialStyleWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

import 'swiper/scss';
import 'swiper/scss/pagination';

SwiperCore.use([Navigation, Pagination]);
function Testimonials() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Testimonials',
    },
  ];
  const { users } = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  const paramsOne = {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  const paramsTwo = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  const galleryParams = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className} pagination-thumb"><img src="${require(`../../${users[index].img}`)}" alt="" /></span>`;
      },
    },
  };
  const paramsThree = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Testimonials" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <TestimonialStyleWrapper>
              <Cards headless>
                <div className="testimonial-block theme-1">
                  <h2 className="testimonial-title">Testimonial 1</h2>
                  <Swiper {...paramsOne}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1} className="testimonial-block__single">
                          <figure>
                            <img src={require(`../../${user.img}`)} alt="" />
                            <figcaption>
                              <h2 className="client-name">{user.name}</h2>
                              <p className="client-designation">{user.designation}</p>
                              <p className="client-review">{user.content}</p>
                            </figcaption>
                          </figure>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="testimonial-block theme-2">
                  <h2 className="testimonial-title">Testimonial 2</h2>
                  <Swiper {...paramsTwo}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1} className="testimonial-block__single">
                          <span className="quotation">
                            <img src={require(`../../static/img/icon/quote.png`)} alt="" />
                          </span>
                          <div className="testimonial-block__author">
                            <img src={require(`../../${user.img}`)} alt="" />
                            <div className="author-info">
                              <h2 className="client-name">{user.name}</h2>
                              <p className="client-designation">{user.designation}</p>
                            </div>
                          </div>
                          <div className="testimonial-block__review">
                            <p>
                              It is a long established fact that a reader will page when looking at its was layout. The
                              point of be distracted by the readable will page when looking at its was layout will page
                              when looking.
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="testimonial-block theme-3">
                  <h2 className="testimonial-title">Testimonial 3</h2>
                  <div className="testimonial-wrapper">
                    <Swiper {...galleryParams}>
                      {users.map((user, index) => {
                        return (
                          <div key={index + 1} className="testimonial-block__single">
                            <div className="testimonial-block__inner">
                              <div className="testimonial-block__review">
                                <p>
                                  It is a long established fact that a reader will page when looking at its was layout.
                                  The point of be distracted by the readable will page when looking at its was layout
                                  will page when looking.
                                </p>
                              </div>
                              <div className="testimonial-block__author">
                                <div className="author-info">
                                  <h2 className="author-name">{user.name}</h2>
                                  <p className="author-designation">{user.designation}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
                <div className="testimonial-block theme-4">
                  <h2 className="testimonial-title">Testimonial 4</h2>
                  <Swiper {...paramsThree}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1} className="testimonial-block__single">
                          <div className="testimonial-block__inner">
                            <div className="testimonial-block__author">
                              <img src={require(`../../${user.img}`)} alt="" />
                            </div>
                            <div className="testimonial-block__review">
                              <p>
                                It is a long established fact that a reader will page when looking at its was layout.
                                The point of be distracted by the readable will page when looking at its was layout will
                                page when looking.
                              </p>
                            </div>
                            <div className="author-info">
                              <h2 className="client-name">{user.name}</h2>
                              <p className="client-designation">{user.designation}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
              </Cards>
            </TestimonialStyleWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Testimonials;
