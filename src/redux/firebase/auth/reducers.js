import actions from './actions';

const {
  FB_LOGIN_BEGIN,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_ERR,
  FB_LOGOUT_BEGIN,
  FB_LOGOUT_SUCCESS,
  FB_LOGOUT_ERR,
  FB_SIGNUP_BEGIN,
  FB_SIGNUP_SUCCESS,
  FB_SIGNUP_ERR,
} = actions;

const initialState = {
  data: null,
  loading: false,
  isLogout: false,
  isLogin: false,
  error: false,
  isSignUpError: false,
  isSignUpLoading: false,
};

const firebaseAuth = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FB_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        error: false,
        loading: false,
      };

    case FB_LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
        isLogin: false,
      };

    case FB_LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_LOGOUT_SUCCESS:
      return {
        ...state,
        data,
        isLogout: true,
        isLogin: false,
        error: false,
        loading: false,
      };

    case FB_LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
        isLogout: false,
      };

    case FB_SIGNUP_BEGIN:
      return {
        ...state,
        isSignUpLoading: true,
      };

    case FB_SIGNUP_SUCCESS:
      return {
        ...state,
        data,
        isSIGNUP: true,
        isSignUpError: false,
        isSignUpLoading: false,
      };

    case FB_SIGNUP_ERR:
      return {
        ...state,
        isSignUpError: err,
        isSignUpLoading: false,
      };

    default:
      return state;
  }
};

export default firebaseAuth;
