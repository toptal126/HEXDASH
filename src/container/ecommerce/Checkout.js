import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { cartGetData } from '../../redux/cart/actionCreator';

import { WizardWrapper } from '../pages/wizards/Style';

const Checkout = lazy(() => import('./overview/CheckoutWizard'));
const Ordersummary = lazy(() => import('./overview/Ordersummary'));

function ShoppingCart() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Shopping Cart',
    },
  ];
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => {
    return {
      cartData: state.cart.data,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  let subtotal = 0;

  if (cartData !== null) {
    cartData.map((data) => {
      const { quantity, price } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return subtotal;
    });
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Shopping Cart" routes={PageRoutes} />
      <Main>
        <div className="checkoutWraper">
          <Row gutter={15}>
            <Col md={24}>
              <Cards headless>
                <Row gutter={30}>
                  <Col xxl={17} xs={24}>
                    <WizardWrapper>
                      <Suspense
                        fallback={
                          <Cards headless>
                            <Skeleton paragraph={{ rows: 10 }} active />
                          </Cards>
                        }
                      >
                        <Routes>
                          <Route index element={<Checkout />} />
                        </Routes>
                      </Suspense>
                    </WizardWrapper>
                  </Col>
                  <Col xxl={7} xs={24}>
                    <Suspense
                      fallback={
                        <Cards headless>
                          <Skeleton paragraph={{ rows: 10 }} active />
                        </Cards>
                      }
                    >
                      <Ordersummary subtotal={subtotal} checkout />
                    </Suspense>
                  </Col>
                </Row>
              </Cards>
            </Col>
          </Row>
        </div>
      </Main>
    </>
  );
}

export default ShoppingCart;
