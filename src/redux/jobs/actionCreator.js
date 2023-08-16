import actions from './actions';
import initialState from '../../demoData/jobs.json';

const {
  jobsReadBegin,
  jobsReadSuccess,
  jobsReadErr,
  filterSinglePageReadBegin,
  filterSinglePageReadSuccess,
  filterSinglePageReadErr,
} = actions;

const jobsReadData = () => {
  return async (dispatch) => {
    try {
      dispatch(jobsReadBegin());
      dispatch(jobsReadSuccess(initialState));
    } catch (err) {
      dispatch(jobsReadErr(err));
    }
  };
};

const jobsUpdateData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(jobsReadBegin());
      dispatch(jobsReadSuccess(data));
    } catch (err) {
      dispatch(jobsReadErr(err));
    }
  };
};

const jobsUpdateSearch = (value, key) => {
  return async (dispatch) => {
    try {
      dispatch(jobsReadBegin());
      const data = initialState.filter((item) => item[key].startsWith(value));
      dispatch(jobsReadSuccess(data));
    } catch (err) {
      dispatch(jobsReadErr(err));
    }
  };
};

const sorting = (sortBy, oldState) => {
  return async (dispatch) => {
    try {
      dispatch(jobsReadBegin());
      setTimeout(() => {
        const data = oldState.sort((a, b) => {
          return sortBy === 'Old' ? b.id - a.id : a.id - b.id;
        });
        dispatch(jobsReadSuccess(data));
      }, 100);
    } catch (err) {
      dispatch(jobsReadErr(err));
    }
  };
};

const filterWithTitleLocation = (title, location) => {
  return async (dispatch) => {
    try {
      dispatch(jobsReadBegin());
      setTimeout(() => {
        const data = initialState.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(title.toLowerCase()) >= 0 &&
            item.location.toLowerCase().indexOf(location.toLowerCase()) >= 0
          );
        });
        dispatch(jobsReadSuccess(data));
      }, 100);
    } catch (err) {
      dispatch(jobsReadErr(err));
    }
  };
};

const singlePageReade = (id) => {
  return async (dispatch) => {
    try {
      dispatch(filterSinglePageReadBegin());
      const data = initialState.filter((item) => parseInt(item.id, 10) === parseInt(id, 10));

      dispatch(filterSinglePageReadSuccess(data));
    } catch (err) {
      dispatch(filterSinglePageReadErr(err));
    }
  };
};

export { filterWithTitleLocation, sorting, jobsReadData, jobsUpdateData, jobsUpdateSearch, singlePageReade };
