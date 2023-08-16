/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OrderSummary } from '../Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { cartGetData } from '../../../redux/cart/actionCreator';

function Ordersummary({ subtotal, checkout }) {
  const dispatch = useDispatch();
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const [form] = Form.useForm();
  const [state, setState] = useState({
    coupon: 0,
    promo: 0,
    current: 0,
  });

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const submitPromo = (values) => {
    setState({ ...state, promo: values });
  };

  const { Option } = Select;

  const onSubmit = () => {
    document.querySelectorAll('button span').forEach((item) => {
      if (item.innerHTML === 'Done') {
        item.click();
      }
    });
  };

  return (
    <Cards
      bodyStyle={{
        borderRadius: '20px',
      }}
      className="ninjadash-order-summery"
      headless
    >
      <OrderSummary>
        <Heading className="summary-table-title" as="h4">
          Order Summary
        </Heading>
        <Cards
          bodyStyle={{
            borderRadius: '10px',
          }}
          headless
        >
          <div className="order-summary-inner">
            <ul className="summary-list">
              <li>
                <span className="summary-list-title">Subtotal :</span>
                <span className="summary-list-text">{`$${subtotal}`}</span>
              </li>
              <li>
                <span className="summary-list-title">Discount :</span>
                <span className="summary-list-text">{`$${-20}`}</span>
              </li>
              <li>
                <span className="summary-list-title">Shipping Charge :</span>
                <span className="summary-list-text">{`$${30}`}</span>
              </li>
            </ul>
            <Form form={form} name="promo" onFinish={submitPromo}>
              <Form.Item name="couponType" initialValue="" label="">
                <Select style={{ width: '100%' }}>
                  <Option value="">
                    <img src={require('../../../static/img/Subtraction1.png')} alt="" /> Select Coupon
                  </Option>
                  <Option value="one">
                    <img src={require('../../../static/img/Subtraction1.png')} alt="" /> Coupon one
                  </Option>
                  <Option value="tow">
                    <img src={require('../../../static/img/Subtraction1.png')} alt="" /> Coupon tow
                  </Option>
                </Select>
              </Form.Item>
              <div className="promo-apply-form">
                <Form.Item name="promoCode" label="Promo Code">
                  <Input placeholder="Promo Code" />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" size="default" type="success" outlined>
                    Apply
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <Heading className="summary-total" as="h4">
              <span className="summary-total-label">Total : </span>
              <span className="summary-total-amount">{`$${subtotal + 30 - 20}`}</span>
            </Heading>
            {!checkout && (
              <Button className="btn-proceed" type="secondary" size="large">
                <Link to="/admin/ecommerce/checkout">
                  Proceed To Checkout
                  {!rtl ? <UilAngleRight /> : <UilAngleLeft />}
                </Link>
              </Button>
            )}
            {state.current === 3 && (
              <Button onClick={onSubmit} className="btn-proceed" type="secondary" size="large">
                <Link to="#">Place Order</Link>
              </Button>
            )}
          </div>
        </Cards>
      </OrderSummary>
    </Cards>
  );
}

export default Ordersummary;
