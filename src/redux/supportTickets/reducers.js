import actions from './actions';

const {
  TICKET_READ_BEGIN,
  TICKET_READ_SUCCESS,
  TICKET_READ_ERR,
  TICKET_SINGLE_PAGE_READ_BEGIN,
  TICKET_SINGLE_PAGE_READ_SUCCESS,
  TICKET_SINGLE_PAGE_READ_ERR,
} = actions;

const initialState = {
  data: [],
  ticket: [],
  loading: false,
  error: null,
};

const SupportTicketReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TICKET_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case TICKET_READ_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case TICKET_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    case TICKET_SINGLE_PAGE_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case TICKET_SINGLE_PAGE_READ_SUCCESS:
      return {
        ...initialState,
        ticket: data,
        loading: false,
      };
    case TICKET_SINGLE_PAGE_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default SupportTicketReducer;
