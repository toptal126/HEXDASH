import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { filterSinglePage } from '../../../redux/product/actionCreator';
import { ProductDetailsWrapper } from '../Style';
import { Cards } from '../../../components/cards/frame/cards-frame';

const DetailsRight = lazy(() => import('./overview/DetailsRight'));

function ProductDetails() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Product Details',
    },
  ];
  const dispatch = useDispatch();
  const params = useParams();

  const { products, product } = useSelector((state) => {
    return {
      product: state.product.data,
      products: state.products.data,
    };
  });

  useEffect(() => {
    if (filterSinglePage) {
      dispatch(filterSinglePage(parseInt(params.id, 10), products));
    }
  }, [params.id, dispatch, products]);

  const { img, category } = product[0];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Product Details" routes={PageRoutes} />
      <Main>
        <Cards headless>
          <ProductDetailsWrapper>
            <div className="product-details-box">
              <Row gutter={30}>
                <Col xs={24} lg={10}>
                  <div className="product-details-box__left pdbl">
                    <figure>
                      <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
                    </figure>
                    <div className="pdbl__slider pdbs">
                      <Row gutter={5}>
                        {products.length
                          ? products
                              .filter((value) => {
                                return value.category === category;
                              })
                              .map((value, index) => {
                                return (
                                  index <= 3 && (
                                    <Col md={4} key={value.id}>
                                      <div className="pdbl__image">
                                        <figure>
                                          <Link to={`/admin/ecommerce/productDetails/${value.id}`}>
                                            <img
                                              style={{ width: '100%' }}
                                              src={require(`../../../${value.img}`)}
                                              alt=""
                                            />
                                          </Link>
                                        </figure>
                                      </div>
                                    </Col>
                                  )
                                );
                              })
                          : null}
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={14}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <DetailsRight product={product[0]} />
                  </Suspense>
                </Col>
              </Row>
            </div>
          </ProductDetailsWrapper>
        </Cards>
      </Main>
    </>
  );
}

export default ProductDetails;
