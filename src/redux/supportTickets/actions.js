const actions = {
  TICKET_READ_BEGIN: 'TICKET_READ_BEGIN',
  TICKET_READ_SUCCESS: 'TICKET_READ_SUCCESS',
  TICKET_READ_ERR: 'TICKET_READ_ERR',

  TICKET_SINGLE_PAGE_READ_BEGIN: 'TICKET_SINGLE_PAGE_READ_BEGIN',
  TICKET_SINGLE_PAGE_READ_SUCCESS: 'TICKET_SINGLE_PAGE_READ_SUCCESS',
  TICKET_SINGLE_PAGE_READ_ERR: 'TICKET_SINGLE_PAGE_READ_ERR',

  ticketReadBegin: () => {
    return {
      type: actions.TICKET_READ_BEGIN,
    };
  },

  ticketReadSuccess: (data) => {
    return {
      type: actions.TICKET_READ_SUCCESS,
      data,
    };
  },

  ticketReadErr: (err) => {
    return {
      type: actions.TICKET_READ_ERR,
      err,
    };
  },

  filterSinglePageReadBegin: () => {
    return {
      type: actions.TICKET_SINGLE_PAGE_READ_BEGIN,
    };
  },

  filterSinglePageReadSuccess: (data) => {
    return {
      type: actions.TICKET_SINGLE_PAGE_READ_SUCCESS,
      data,
    };
  },

  filterSinglePageReadErr: (err) => {
    return {
      type: actions.TICKET_SINGLE_PAGE_READ_ERR,
      err,
    };
  },
};

export default actions;
