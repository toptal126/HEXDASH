import actions from './actions';

const {
  DATA_TABLE_READ_BEGIN,
  DATA_TABLE_READ_SUCCESS,
  DATA_TABLE_READ_ERR,
  FILTER_WITH_SUBMIT_BEGIN,
  FILTER_WITH_SUBMIT_SUCCESS,
  FILTER_WITH_SUBMIT_ERR,
  DATA_LIVE_FILTER_BEGIN,
  DATA_LIVE_FILTER_SUCCESS,
  DATA_LIVE_FILTER_ERR,
} = actions;

const initialState = {
  tableData: [],
  loading: false,
  error: null,
};

const dataTableReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case DATA_TABLE_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case DATA_TABLE_READ_SUCCESS:
      return {
        ...initialState,
        tableData: data,
        loading: false,
      };
    case DATA_TABLE_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    case FILTER_WITH_SUBMIT_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case FILTER_WITH_SUBMIT_SUCCESS:
      return {
        ...initialState,
        tableData: data,
        loading: false,
      };
    case FILTER_WITH_SUBMIT_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    case DATA_LIVE_FILTER_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case DATA_LIVE_FILTER_SUCCESS:
      return {
        ...initialState,
        tableData: data,
        loading: false,
      };
    case DATA_LIVE_FILTER_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataTableReducer;
