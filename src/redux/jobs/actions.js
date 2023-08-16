const actions = {
  JOBS_READ_BEGIN: 'JOBS_READ_BEGIN',
  JOBS_READ_SUCCESS: 'JOBS_READ_SUCCESS',
  JOBS_READ_ERR: 'JOBS_READ_ERR',

  JOBS_SINGLE_PAGE_READ_BEGIN: 'JOBS_SINGLE_PAGE_READ_BEGIN',
  JOBS_SINGLE_PAGE_READ_SUCCESS: 'JOBS_SINGLE_PAGE_READ_SUCCESS',
  JOBS_SINGLE_PAGE_READ_ERR: 'JOBS_SINGLE_PAGE_READ_ERR',

  jobsReadBegin: () => {
    return {
      type: actions.JOBS_READ_BEGIN,
    };
  },

  jobsReadSuccess: (data) => {
    return {
      type: actions.JOBS_READ_SUCCESS,
      data,
    };
  },

  jobsReadErr: (err) => {
    return {
      type: actions.JOBS_READ_ERR,
      err,
    };
  },

  filterSinglePageReadBegin: () => {
    return {
      type: actions.JOBS_SINGLE_PAGE_READ_BEGIN,
    };
  },

  filterSinglePageReadSuccess: (data) => {
    return {
      type: actions.JOBS_SINGLE_PAGE_READ_SUCCESS,
      data,
    };
  },

  filterSinglePageReadErr: (err) => {
    return {
      type: actions.JOBS_SINGLE_PAGE_READ_ERR,
      err,
    };
  },
};

export default actions;
