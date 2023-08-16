import { notification } from 'antd';
import Cookies from 'js-cookie';
import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const addNotificationSuccess = () => {
  notification.success({
    message: 'Your Record has been Submited',
  });
};

const addNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const deleteNotificationSuccess = () => {
  notification.success({
    message: 'Your Record has been Deleted',
  });
};

const deleteNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const updateNotificationSuccess = () => {
  notification.success({
    message: 'Your Record has been updated',
  });
};

const updateNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const {
  axiosAddBegin,
  axiosAddSuccess,
  axiosAddErr,

  axiosReadBegin,
  axiosReadSuccess,
  axiosReadErr,

  axiosUpdateBegin,
  axiosUpdateSuccess,
  axiosUpdateErr,

  axiosDeleteBegin,
  axiosDeleteSuccess,
  axiosDeleteErr,

  axiosSingleDataBegin,
  axiosSingleDataSuccess,
  axiosSingleDataErr,

  axiosUploadBegin,
  axiosUploadSuccess,
  axiosUploadErr,
} = actions;

const axiosDataSubmit = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(axiosAddBegin());
      const response = await DataService.post('/data/store', data);
      const token = Cookies.get('access_token');
      if (token) {
        await dispatch(axiosAddSuccess(response.data.data));
        addNotificationSuccess();
      } else {
        await dispatch(axiosAddErr('No Unauthorize access'));
        addNotificationError('No Unauthorize access');
      }
    } catch (err) {
      await dispatch(axiosAddErr(err));
      addNotificationError(err);
    }
  };
};

const axiosDataRead = () => {
  return async (dispatch) => {
    try {
      await dispatch(axiosReadBegin());
      const query = await DataService.get('/data/all');
      const token = Cookies.get('access_token');
      if (token) {
        await dispatch(axiosReadSuccess(query.data.data));
      } else {
        await dispatch(axiosReadSuccess([]));
        // await dispatch(axiosAddErr('No Unauthorize access'));
      }
    } catch (err) {
      await dispatch(axiosReadErr(err));
    }
  };
};

const axiosDataSearch = (searchItem) => {
  return async (dispatch) => {
    try {
      await dispatch(axiosReadBegin());
      if (searchItem !== '') {
        const query = await DataService.get(`/data/search/${searchItem}`);
        await dispatch(axiosReadSuccess(query.data.data));
      } else {
        try {
          const query = await DataService.get('/data/all');
          await dispatch(axiosReadSuccess(query.data.data));
        } catch (err) {
          await dispatch(axiosReadErr(err));
        }
      }
    } catch (err) {
      await dispatch(axiosReadErr(err));
    }
  };
};

const axiosDataUpdate = (id, data) => {
  return async (dispatch) => {
    try {
      await dispatch(axiosUpdateBegin());
      await DataService.post(`/data/${id}/update`, data);
      await dispatch(axiosUpdateSuccess());
      updateNotificationSuccess();
    } catch (err) {
      await dispatch(axiosUpdateErr(err));
      updateNotificationError(err);
    }
  };
};

const axiosDataDelete = ({ id, getData }) => {
  return async (dispatch) => {
    try {
      await dispatch(axiosDeleteBegin());
      const data = await DataService.post(`/${id}/delete`, {});

      await dispatch(axiosDeleteSuccess(data.data));
      await getData();
      deleteNotificationSuccess();
    } catch (err) {
      await dispatch(axiosDeleteErr(err));
      deleteNotificationError(err);
    }
  };
};

const axiosDataSingle = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(axiosSingleDataBegin());
      const query = await DataService.get(`/data/${id}/show`);
      await dispatch(axiosSingleDataSuccess(query.data.data[0]));
    } catch (err) {
      await dispatch(axiosSingleDataErr(err));
    }
  };
};

const axiosFileUploder = (imageAsFile) => {
  const data = new FormData();
  data.append('image', imageAsFile);

  return async (dispatch) => {
    try {
      await dispatch(axiosUploadBegin());
      const query = await DataService.post('/data/image/upload', data, { 'Content-Type': 'multipart/form-data' });

      dispatch(axiosUploadSuccess(`${query.data}`));
    } catch (err) {
      await dispatch(axiosUploadErr(err));
    }
  };
};

const axiosFileClear = () => {
  return async (dispatch) => {
    try {
      await dispatch(axiosUploadBegin());
      dispatch(axiosUploadSuccess(null));
    } catch (err) {
      await dispatch(axiosUploadErr(err));
    }
  };
};

export {
  axiosDataRead,
  axiosDataSearch,
  axiosDataSubmit,
  axiosFileUploder,
  axiosDataDelete,
  axiosDataSingle,
  axiosDataUpdate,
  axiosFileClear,
};
