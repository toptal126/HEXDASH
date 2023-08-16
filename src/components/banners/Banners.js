import { Carousel } from 'antd';
import React from 'react';
import propTypes from 'prop-types';
import {
  BannerCardWrap,
  BannerCarouselWrap,
  BannerCtaWrap,
  BannerLongWrap,
  BannerNormal,
  BannerWrapper,
  Figure2,
  Figure3,
  Figure6,
  Figure7,
  Figure8,
  PageHeader,
} from './Style';
import { Button } from '../buttons/buttons';
import { Cards } from '../cards/frame/cards-frame';

function Banner1() {
  return (
    <BannerNormal>
      <Cards headless bodyStyle={{ minHeight: '270px' }}>
        <h2>15 Days Free Trail</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        <Button className="btn-outlined" size="small" outlined type="primary">
          Start
        </Button>
      </Cards>
    </BannerNormal>
  );
}

function Banner2() {
  return (
    <BannerWrapper>
      <Cards className="mb-70" bodyStyle={{ background: '#5F63F2', borderRadius: '10px', minHeight: '270px' }} headless>
        <Figure2>
          <img src={require('../../static/img/banner/1.png')} alt="" />
          <figcaption>
            <h2>Upgrade your plan</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <Button size="large" type="white">
              Upgrade
            </Button>
          </figcaption>
        </Figure2>
      </Cards>
    </BannerWrapper>
  );
}

function Banner3() {
  return (
    <BannerWrapper>
      <Cards bodyStyle={{ borderRadius: '10px', minHeight: '270px', background: '#5F63F2' }} headless>
        <Figure3>
          <img src={require('../../static/img/banner/2.png')} alt="" />
          <figcaption>
            <h2>Earn More Money</h2>
            <Button size="large" type="white">
              Learn More
            </Button>
          </figcaption>
        </Figure3>
      </Cards>
    </BannerWrapper>
  );
}

function Banner4() {
  return (
    <BannerWrapper>
      <Cards bodyStyle={{ background: '#272B41', borderRadius: '10px', minHeight: '270px' }} headless>
        <Figure3 className="theme-3">
          <img src={require('../../static/img/banner/3.png')} alt="" />
          <figcaption>
            <h2>Win Your Bonus</h2>
            <p>Weekly performance bonus</p>
            <Button size="large" type="white">
              Learn More
            </Button>
          </figcaption>
        </Figure3>
      </Cards>
    </BannerWrapper>
  );
}

function Banner5() {
  return (
    <BannerWrapper>
      <Cards
        bodyStyle={{
          background: '#5F63F2',
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          alignItems: 'center',
        }}
        headless
      >
        <Figure3 className="theme-wide">
          <img src={require('../../static/img/banner/4.png')} alt="" />
          <figcaption>
            <h2>Congratulations Jhon!</h2>
            <p>Best Seller on the last month.</p>
            <Button size="large" type="white">
              Learn More
            </Button>
          </figcaption>
        </Figure3>
      </Cards>
    </BannerWrapper>
  );
}

function Banner8() {
  return (
    <BannerWrapper className="ninjadash-congratulation-banner">
      <Cards
        bodyStyle={{
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          alignItems: 'start',
        }}
        headless
      >
        <Figure8 className="ninjadash-congratulation-banner-content theme-wide">
          <img src={require('../../static/img/trophy.png')} alt="" />
          <figcaption>
            <h2>Congratulations Jhon!</h2>
            <p>Best Seller on the last month.</p>
            <Button size="large" type="gray">
              Learn More
            </Button>
          </figcaption>
        </Figure8>
      </Cards>
    </BannerWrapper>
  );
}

function Banner9() {
  return (
    <BannerWrapper className="ninjadash-card-banner">
      <Cards
        bodyStyle={{
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          alignItems: 'start',
        }}
        headless
      >
        <Figure8 className="ninjadash-card-banner-content theme-wide">
          <img src={require('../../static/img/trophy-2.png')} alt="" />
          <figcaption>
            <h2>Congratulations Jhon!</h2>
            <p>Best Seller on the last month.</p>
            <Button size="large" type="white">
              Learn More
            </Button>
          </figcaption>
        </Figure8>
      </Cards>
    </BannerWrapper>
  );
}

function Banner6() {
  return (
    <BannerWrapper>
      <Cards
        bodyStyle={{
          background: `url(${require('../../static/img/banner/5.png')})`,
          backgroundSize: 'cover',
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          direction: 'ltr',
          alignItems: 'center',
        }}
        headless
      >
        <Figure6>
          <img src={require('../../static/img/banner/badge.svg')} alt="" />
          <figcaption>
            <h2>Up to 50 OFF</h2>
            <Button className="btn-outlined" size="small" outlined type="danger">
              Buy Now
            </Button>
          </figcaption>
        </Figure6>
      </Cards>
    </BannerWrapper>
  );
}

function Banner7() {
  return (
    <BannerNormal className="theme-wide">
      <Cards headless>
        <Figure7>
          <img src={require('../../static/img/banner/6.png')} alt="" />
          <figcaption>
            <h2>Subscribe to our newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consetetur </p>
            <Button className="btn-outlined" size="large" outlined type="primary">
              Subscribe Now
            </Button>
          </figcaption>
        </Figure7>
      </Cards>
    </BannerNormal>
  );
}

function BannerCarousel() {
  return (
    <BannerCarouselWrap>
      <Carousel autoplay>
        <div className="banner-signle">
          <div className="banner-single__img">
            <img src={require('../../static/img/banner/8.png')} alt="" />
          </div>
          <div className="banner-single__content">
            <h3>Achievements</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
        {/* End of /.banner-signle */}
        <div className="banner-signle">
          <div className="banner-single__img">
            <img src={require('../../static/img/banner/8.png')} alt="" />
          </div>
          <div className="banner-single__content">
            <h3>Achievements</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
        {/* End of /.banner-signle */}
        <div className="banner-signle">
          <div className="banner-single__img">
            <img src={require('../../static/img/banner/8.png')} alt="" />
          </div>
          <div className="banner-single__content">
            <h3>Achievements</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
        {/* End of /.banner-signle */}
      </Carousel>
    </BannerCarouselWrap>
  );
}

function BannerLong() {
  return (
    <BannerLongWrap>
      <div className="banner-long-inner">
        <h2>Up To Date </h2>
        <img src={require('../../static/img/banner/9.png')} alt="" />
      </div>
    </BannerLongWrap>
  );
}

function BannerCard() {
  return (
    <BannerCardWrap>
      <div
        className="banner-card-inner"
        style={{ backgroundImage: `url("${require('../../static/img/banner/card-banner-1.png')}")` }}
      >
        <h2>Need More Space?</h2>
        <Button size="small" type="white">
          Buy Storage
        </Button>
      </div>
    </BannerCardWrap>
  );
}

function BannerCard2() {
  return (
    <BannerCardWrap>
      <div
        className="banner-card-inner theme-2"
        style={{ backgroundImage: `url("${require('../../static/img/banner/card-banner-2.png')}")` }}
      >
        <h2>Create Sale Report</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        <Button size="small" type="white">
          Learn More
        </Button>
      </div>
    </BannerCardWrap>
  );
}

function BannerCta() {
  return (
    <BannerCtaWrap>
      <div
        className="banner-cta align-center-v"
        style={{ backgroundImage: `url("${require('../../static/img/banner/cta-banner-1.png')}")` }}
      >
        <div className="banner-cta__content">
          <h2>Dedicated Support</h2>
          <Button size="small" type="primary">
            Learn More
          </Button>
        </div>
      </div>
    </BannerCtaWrap>
  );
}

function BannerCta2() {
  return (
    <BannerCtaWrap>
      <div
        className="banner-cta align-center-v theme-2"
        style={{ backgroundImage: `url("${require('../../static/img/banner/cta-banner-2.png')}")` }}
      >
        <div className="banner-cta__content">
          <h2>Welcome Back Garry Sobars!</h2>
          <p>Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam </p>
          <Button size="small" type="white">
            Learn More
          </Button>
        </div>
      </div>
    </BannerCtaWrap>
  );
}

function PageHeaderBanner({ type, title, subtitle }) {
  return (
    <BannerWrapper
      className={type === 'corporate' ? 'ninjadash-top-banner ninjadash-top-banner-corporate' : 'ninjadash-top-banner'}
    >
      <Cards headless>
        <PageHeader className="theme-wide">
          {type === 'corporate' ? (
            <img src={require('../../static/img/corporate.png')} alt="HexaDash Admin Template" />
          ) : (
            <img src={require('../../static/img/banner/header-banner.png')} alt="HexaDash Admin Template" />
          )}

          <figcaption>
            <h2 className="ninjadash-top-banner__title">{title}</h2>
            <p className="ninjadash-top-banner__text">{subtitle}</p>
            <Button className="ninjadash-top-banner__action" size="large" type="primary">
              Learn More
            </Button>
          </figcaption>
        </PageHeader>
      </Cards>
    </BannerWrapper>
  );
}

PageHeaderBanner.propTypes = {
  type: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
};

PageHeaderBanner.defaultProps = {
  type: '',
  title: 'Welcome To Demo Dashboard',
  subtitle:
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
};

export {
  PageHeaderBanner,
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  Banner8,
  Banner9,
  BannerCarousel,
  BannerLong,
  BannerCard,
  BannerCard2,
  BannerCta,
  BannerCta2,
};
