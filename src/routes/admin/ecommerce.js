import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Product = lazy(() => import('../../container/ecommerce/product/Products'));
const ProductAdd = lazy(() => import('../../container/ecommerce/product/AddProduct'));
const ProductEdit = lazy(() => import('../../container/ecommerce/product/EditProduct'));
const ProductDetails = lazy(() => import('../../container/ecommerce/product/ProductDetails'));
const Invoice = lazy(() => import('../../container/ecommerce/Invoice'));
const Orders = lazy(() => import('../../container/ecommerce/Orders'));
const Sellers = lazy(() => import('../../container/ecommerce/Sellers'));
const Cart = lazy(() => import('../../container/ecommerce/Cart'));
const Checkout = lazy(() => import('../../container/ecommerce/Checkout'));
const NotFound = lazy(() => import('../../container/pages/404'));

function EcommerceRoute() {
  return (
    <Routes>
      <Route path="products/*" element={<Product />} />
      <Route exact path="add-product" element={<ProductAdd />} />
      <Route exact path="edit-product" element={<ProductEdit />} />
      <Route exact path="productDetails/:id" element={<ProductDetails />} />
      <Route exact path="invoice" element={<Invoice />} />
      <Route exact path="orders" element={<Orders />} />
      <Route exact path="sellers" element={<Sellers />} />
      <Route path="cart/*" element={<Cart />} />
      <Route path="checkout/*" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default EcommerceRoute;
