const actions = {
  FB_ADD_BEGIN: 'FB_ADD_BEGIN',
  FB_ADD_SUCCESS: 'FB_ADD_SUCCESS',
  FB_ADD_ERR: 'FB_ADD_ERR',

  FB_READ_BEGIN: 'FB_READ_BEGIN',
  FB_READ_SUCCESS: 'FB_READ_SUCCESS',
  FB_READ_ERR: 'FB_READ_ERR',

  FB_UPDATE_BEGIN: 'FB_UPDATE_BEGIN',
  FB_UPDATE_SUCCESS: 'FB_UPDATE_SUCCESS',
  FB_UPDATE_ERR: 'FB_UPDATE_ERR',

  FB_DELETE_BEGIN: 'FB_DELETE_BEGIN',
  FB_DELETE_SUCCESS: 'FB_DELETE_SUCCESS',
  FB_DELETE_ERR: 'FB_DELETE_ERR',

  FB_SINGLE_DATA_BEGIN: 'FB_SINGLE_DATA_BEGIN',
  FB_SINGLE_DATA_SUCCESS: 'FB_SINGLE_DATA_SUCCESS',
  FB_SINGLE_DATA_ERR: 'FB_SINGLE_DATA_ERR',

  FB_UPLOAD_BEGIN: 'FB_UPLOAD_BEGIN',
  FB_UPLOAD_SUCCESS: 'FB_UPLOAD_SUCCESS',
  FB_UPLOAD_ERR: 'FB_UPLOAD_ERR',

  FB_SEARCH_BEGIN: 'FB_SEARCH_BEGIN',
  FB_SEARCH_SUCCESS: 'FB_SEARCH_SUCCESS',
  FB_SEARCH_ERR: 'FB_SEARCH_ERR',

  fbSearchBegin: () => {
    return {
      type: actions.FB_SEARCH_BEGIN,
    };
  },

  fbSearchSuccess: (data) => {
    return {
      type: actions.FB_SEARCH_SUCCESS,
      data,
    };
  },

  fbSearchErr: (err) => {
    return {
      type: actions.FB_SEARCH_ERR,
      err,
    };
  },

  fbUploadBegin: () => {
    return {
      type: actions.FB_UPLOAD_BEGIN,
    };
  },

  fbUploadSuccess: (data) => {
    return {
      type: actions.FB_UPLOAD_SUCCESS,
      data,
    };
  },

  fbUploadErr: (err) => {
    return {
      type: actions.FB_UPLOAD_ERR,
      err,
    };
  },

  fbAddBegin: () => {
    return {
      type: actions.FB_ADD_BEGIN,
    };
  },

  fbAddSuccess: (data) => {
    return {
      type: actions.FB_ADD_SUCCESS,
      data,
    };
  },

  fbAddErr: (err) => {
    return {
      type: actions.FB_ADD_ERR,
      err,
    };
  },

  fbReadBegin: () => {
    return {
      type: actions.FB_READ_BEGIN,
    };
  },

  fbReadSuccess: (data) => {
    return {
      type: actions.FB_READ_SUCCESS,
      data,
    };
  },

  fbReadErr: (err) => {
    return {
      type: actions.FB_READ_ERR,
      err,
    };
  },

  fbUpdateBegin: () => {
    return {
      type: actions.FB_UPDATE_BEGIN,
    };
  },

  fbUpdateSuccess: (data) => {
    return {
      type: actions.FB_UPDATE_SUCCESS,
      data,
    };
  },

  fbUpdateErr: (err) => {
    return {
      type: actions.FB_UPDATE_ERR,
      err,
    };
  },

  fbDeleteBegin: () => {
    return {
      type: actions.FB_DELETE_BEGIN,
    };
  },

  fbDeleteSuccess: (data) => {
    return {
      type: actions.FB_DELETE_SUCCESS,
      data,
    };
  },

  fbDeleteErr: (err) => {
    return {
      type: actions.FB_DELETE_ERR,
      err,
    };
  },

  fbSingleDataBegin: () => {
    return {
      type: actions.FB_SINGLE_DATA_BEGIN,
    };
  },

  fbSingleDataSuccess: (data) => {
    return {
      type: actions.FB_SINGLE_DATA_SUCCESS,
      data,
    };
  },

  fbSingleDataErr: (err) => {
    return {
      type: actions.FB_SINGLE_DATA_ERR,
      err,
    };
  },
};

export default actions;
