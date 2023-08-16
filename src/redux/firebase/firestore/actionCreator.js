/* eslint-disable no-unused-vars */
import { notification } from 'antd';
import actions from './actions';

const addNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Submited',
  });
};

const addNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const deleteNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Deleted',
  });
};

const deleteNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const updateNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen updated',
  });
};

const updateNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const {
  fbAddBegin,
  fbAddSuccess,
  fbAddErr,

  fbReadBegin,
  fbReadSuccess,
  fbReadErr,

  fbUpdateBegin,
  fbUpdateSuccess,
  fbUpdateErr,

  fbDeleteBegin,
  fbDeleteSuccess,
  fbDeleteErr,

  fbSingleDataBegin,
  fbSingleDataSuccess,
  fbSingleDataErr,

  fbUploadBegin,
  fbUploadSuccess,
  fbUploadErr,

  fbSearchBegin,
  fbSearchSuccess,
  fbSearchErr,
} = actions;

const fbDataSubmit = (data) => {
  return async (dispatch, getState, { _, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbAddBegin());
      await db.collection('crud').doc(`${data.id}`).set(data);
      await dispatch(fbAddSuccess(data));
      await addNotificationSuccess();
    } catch (err) {
      await dispatch(fbAddErr(err));
      await addNotificationError(err);
    }
  };
};

const fbDataRead = () => {
  return async (dispatch, getState, { _, getFirestore }) => {
    const db = getFirestore();
    const data = [];
    try {
      await dispatch(fbReadBegin());
      const query = await db.collection('crud').get();
      await query.forEach((doc) => {
        data.push(doc.data());
      });
      await dispatch(fbReadSuccess(data));
    } catch (err) {
      await dispatch(fbReadErr(err));
    }
  };
};

const fbDataSearch = (value) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const data = [];
    try {
      await dispatch(fbSearchBegin());
      const query = await db.collection('crud').get();
      await query.forEach((doc) => {
        data.push(doc.data());
      });
      const searchValue = data.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()));
      await dispatch(fbSearchSuccess(searchValue));
    } catch (err) {
      await dispatch(fbSearchErr(err));
    }
  };
};

const fbDataUpdate = (id, data) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbUpdateBegin());
      await db
        .collection('crud')
        .doc(`${id}`)
        .update({
          ...data,
        });

      const query = await db.collection('crud').where('id', '==', id).get();
      await query.forEach((doc) => {
        dispatch(fbUpdateSuccess(doc.data()));
      });

      await updateNotificationSuccess();
    } catch (err) {
      await dispatch(fbUpdateErr(err));
      await updateNotificationError(err);
    }
  };
};

const fbDataDelete = (id) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const data = [];
    try {
      await dispatch(fbDeleteBegin());
      await db.collection('crud').doc(`${id}`).delete();
      const query = await db.collection('crud').get();
      await query.forEach((doc) => {
        data.push(doc.data());
      });
      await dispatch(fbDeleteSuccess(data));
      await deleteNotificationSuccess();
      await fbDataRead();
    } catch (err) {
      await dispatch(fbDeleteErr(err));
      await deleteNotificationError(err);
    }
  };
};

const fbDataSingle = (id) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbSingleDataBegin());
      const query = await db.collection('crud').where('id', '==', id).get();
      await query.forEach((doc) => {
        dispatch(fbSingleDataSuccess(doc.data()));
      });
    } catch (err) {
      await dispatch(fbSingleDataErr(err));
    }
  };
};

const fbFileUploder = (imageAsFile) => {
  return async (dispatch, getState, { getFirebase, getFirestore, storage }) => {
    try {
      await dispatch(fbUploadBegin());
      const uploadTask = storage().ref(`/images/${imageAsFile.name}`).put(imageAsFile);

      await uploadTask.on(
        'state_changed',

        (err) => {},
        () => {
          storage()
            .ref('images')
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              dispatch(fbUploadSuccess(fireBaseUrl));
            });
        },
      );
    } catch (err) {
      await dispatch(fbUploadErr(err));
    }
  };
};

const fbFileClear = () => {
  return async (dispatch) => {
    try {
      await dispatch(fbUploadBegin());
      dispatch(fbUploadSuccess(null));
    } catch (err) {
      await dispatch(fbUploadErr(err));
    }
  };
};

export { fbDataSubmit, fbDataSearch, fbDataDelete, fbDataSingle, fbDataUpdate, fbDataRead, fbFileUploder, fbFileClear };
