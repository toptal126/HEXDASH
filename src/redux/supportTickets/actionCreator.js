import actions from './actions';
import initialState from '../../demoData/support.json';

const {
  ticketReadBegin,
  ticketReadSuccess,
  ticketReadErr,
  filterSinglePageReadBegin,
  filterSinglePageReadSuccess,
  filterSinglePageReadErr,
} = actions;

const ticketReadData = () => {
  return async (dispatch) => {
    try {
      dispatch(ticketReadBegin());
      dispatch(ticketReadSuccess(initialState));
    } catch (err) {
      dispatch(ticketReadErr(err));
    }
  };
};

const ticketUpdateData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(ticketReadBegin());
      dispatch(ticketReadSuccess(data));
    } catch (err) {
      dispatch(ticketReadErr(err));
    }
  };
};

const ticketUpdateSearch = (value, key) => {
  return async (dispatch) => {
    try {
      dispatch(ticketReadBegin());
      const data = initialState.filter((item) => item[key].startsWith(value));
      dispatch(ticketReadSuccess(data));
    } catch (err) {
      dispatch(ticketReadErr(err));
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

export { ticketReadData, ticketUpdateData, ticketUpdateSearch, singlePageReade };
