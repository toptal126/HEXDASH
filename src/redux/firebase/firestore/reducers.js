import actions from './actions';

const {
  FB_ADD_BEGIN,
  FB_ADD_SUCCESS,
  FB_ADD_ERR,

  FB_UPLOAD_BEGIN,
  FB_UPLOAD_SUCCESS,
  FB_UPLOAD_ERR,

  FB_READ_BEGIN,
  FB_READ_SUCCESS,
  FB_READ_ERR,

  FB_UPDATE_BEGIN,
  FB_UPDATE_SUCCESS,
  FB_UPDATE_ERR,

  FB_DELETE_BEGIN,
  FB_DELETE_SUCCESS,
  FB_DELETE_ERR,

  FB_SINGLE_DATA_BEGIN,
  FB_SINGLE_DATA_SUCCESS,
  FB_SINGLE_DATA_ERR,

  FB_SEARCH_BEGIN,
  FB_SEARCH_SUCCESS,
  FB_SEARCH_ERR,
} = actions;

const initialState = {
  data: [],
  image: null,
  fileLoading: false,
  loading: false,
  error: null,
};

const initialStateSingle = {
  data: null,
  loading: false,
  error: null,
};

const fsCrudReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FB_UPLOAD_BEGIN:
      return {
        ...state,
        fileLoading: true,
      };

    case FB_UPLOAD_SUCCESS:
      return {
        ...state,
        image: data,
        error: false,
        fileLoading: false,
      };

    case FB_UPLOAD_ERR:
      return {
        ...state,
        error: err,
        fileLoading: false,
      };

    case FB_ADD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_ADD_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case FB_ADD_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FB_SEARCH_BEGIN:
      return {
        ...state,
      };

    case FB_SEARCH_SUCCESS:
      return {
        ...state,
        data,
        error: false,
      };

    case FB_SEARCH_ERR:
      return {
        ...state,
        error: err,
      };

    case FB_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_READ_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case FB_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FB_DELETE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_DELETE_SUCCESS:
      return {
        ...state,
        error: false,
        data,
        loading: false,
      };

    case FB_DELETE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FB_UPDATE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_UPDATE_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case FB_UPDATE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

const fsSingleCrudReducer = (state = initialStateSingle, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FB_SINGLE_DATA_BEGIN:
      return {
        ...initialStateSingle,
        loading: true,
      };

    case FB_SINGLE_DATA_SUCCESS:
      return {
        ...initialStateSingle,
        data,
        error: false,
        loading: false,
      };

    case FB_SINGLE_DATA_ERR:
      return {
        ...initialStateSingle,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export { fsCrudReducer, fsSingleCrudReducer };
