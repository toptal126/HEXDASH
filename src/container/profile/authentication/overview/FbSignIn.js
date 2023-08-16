import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';
import { AuthFormWrap } from './style';
import { fbLogin } from '../../../../redux/authentication/actionCreator';
import {
  fbAuthLogin,
  fbAuthLoginWithGoogle,
  fbAuthLoginWithFacebook,
} from '../../../../redux/firebase/auth/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, isFbAuthenticate } = useSelector((state) => {
    return {
      error: state.firebaseAuth.error,
      isLoading: state.firebaseAuth.loading,
      isFbAuthenticate: state.fb.auth.uid,
    };
  });
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  useEffect(() => {
    if (isFbAuthenticate) {
      dispatch(fbLogin(() => navigate('/admin')));
    }
  }, [isFbAuthenticate, navigate, dispatch]);

  const handleSubmit = (values) => {
    dispatch(fbAuthLogin(values));
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Firebase Sign in GoDash</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="username"
                rules={[{ message: 'Please input your username or Email!', required: true }]}
                initialValue="name@example.com"
                label="Username or Email Address"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item name="password" initialValue="123456" label="Password">
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
                <Checkbox onChange={onChange} checked={state.checked}>
                  Keep me logged in
                </Checkbox>
                <NavLink className="forgot-pass-link" to="/forgotPassword">
                  Forgot password?
                </NavLink>
              </div>
              {error ? <p>{error.message}</p> : null}
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Sign In'}
                </Button>
              </Form.Item>
              <p className="ninjadash-form-divider">
                <span>Or</span>
              </p>
              <ul className="ninjadash-social-login">
                <li>
                  <Link onClick={() => dispatch(fbAuthLoginWithGoogle())} className="google-social" to="#">
                    <ReactSVG src={require(`../../../../static/img/icon/google-plus.svg`).default} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => dispatch(fbAuthLoginWithFacebook())} className="facebook-social" to="#">
                    <UilFacebook />
                  </Link>
                </li>
                <li>
                  <Link className="twitter-social" to="#">
                    <UilTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="github-social" to="#">
                    <UilGithub />
                  </Link>
                </li>
              </ul>
            </Form>
          </div>
          <div className="ninjadash-authentication-bottom">
            <p>
              Don`t have an account?<Link to="/fbRegister">Sign up</Link>
            </p>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignIn;
