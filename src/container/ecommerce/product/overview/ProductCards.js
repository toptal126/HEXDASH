import React from 'react';
import { Rate } from 'antd';
import UilShoppingBag from '@iconscout/react-unicons/icons/uil-shopping-bag';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { ProductCard } from '../../Style';
import { updateWishList } from '../../../../redux/product/actionCreator';

function ProductCards({ product }) {
  const { id, name, rate, price, oldPrice, popular, img } = product;
  const dispatch = useDispatch();

  return (
    <ProductCard style={{ marginBottom: 30 }}>
      <figure>
        <img src={require(`../../../../${img}`)} alt={`img${id}`} />
      </figure>
      <figcaption>
        <Link
          onClick={() => dispatch(updateWishList(id))}
          className={popular ? 'btn-heart favourite' : 'btn-heart'}
          to="#"
        >
          {popular ? <ReactSVG src={require(`../../../../static/img/icon/heart-fill.svg`).default} /> : <UilHeart />}
        </Link>
        <Heading className="product-single-title" as="h5">
          <Link to={`/admin/ecommerce/productDetails/${id}`}>{name}</Link>
        </Heading>
        <div className="product-single-rating">
          <Rate allowHalf defaultValue={rate} disabled /> 4.9
          <span className="total-reviews"> 778 Reviews</span>
        </div>
        <p className="product-single-price">
          <span className="product-single-price__new">${price} </span>
          {oldPrice && (
            <>
              <del className="product-single-price__old"> ${oldPrice} </del>
              <span className="product-single-price__offer"> 60% Off</span>
            </>
          )}
        </p>
        <div className="product-single-action">
          <Button size="small" type="white" className="btn-cart" outlined>
            <UilShoppingBag />
            Add To Cart
          </Button>
          <Button size="small" type="primary">
            Buy Now
          </Button>
        </div>
      </figcaption>
    </ProductCard>
  );
}

ProductCards.propTypes = {
  product: PropTypes.object,
};

export default ProductCards;
