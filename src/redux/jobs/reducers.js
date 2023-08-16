import actions from './actions';

const {
  JOBS_READ_BEGIN,
  JOBS_READ_SUCCESS,
  JOBS_READ_ERR,
  JOBS_SINGLE_PAGE_READ_BEGIN,
  JOBS_SINGLE_PAGE_READ_SUCCESS,
  JOBS_SINGLE_PAGE_READ_ERR,
} = actions;

const initialState = {
  jobs: [],
  job: [],
  loading: false,
  error: null,
};

const JobSearchReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case JOBS_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case JOBS_READ_SUCCESS:
      return {
        ...initialState,
        jobs: data,
        loading: false,
      };
    case JOBS_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    case JOBS_SINGLE_PAGE_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case JOBS_SINGLE_PAGE_READ_SUCCESS:
      return {
        ...initialState,
        job: data,
        loading: false,
      };
    case JOBS_SINGLE_PAGE_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default JobSearchReducer;
