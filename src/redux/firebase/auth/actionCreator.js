import actions from './actions';

const {
  fbLoginBegin,
  fbLoginSuccess,
  fbLoginErr,
  fbLogOutBegin,
  fbLogOutSuccess,
  fbLogOutErr,
  fbSignUpBegin,
  fbSignUpSuccess,
  fbSignUpErr,
} = actions;

const fbAuthLogin = (data) => {
  return async (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    try {
      await dispatch(fbLoginBegin());
      await fb.auth().signInWithEmailAndPassword(data.username, data.password);
      await dispatch(fbLoginSuccess());
    } catch (err) {
      console.log(err);
      await dispatch(fbLoginErr(err));
    }
  };
};

const fbAuthLogout = (callback) => {
  return async (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    try {
      await dispatch(fbLogOutBegin());
      await fb.auth().signOut();
      await dispatch(fbLogOutSuccess());
      callback();
    } catch (err) {
      await dispatch(fbLogOutErr(err));
    }
  };
};

const fbAuthSignUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const fb = getFirebase();
    try {
      await dispatch(fbSignUpBegin());
      const resp = await fb.auth().createUserWithEmailAndPassword(newUser.username, newUser.password);
      await db
        .collection('users')
        .doc(resp.user.uid)
        .set({
          ...newUser,
        });
      await dispatch(fbSignUpSuccess());
    } catch (err) {
      await dispatch(fbSignUpErr(err));
    }
  };
};

const fbAuthLoginWithGoogle = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    const provider = new fb.auth.GoogleAuthProvider();
    try {
      await dispatch(fbLoginBegin());
      const result = await fb.auth().signInWithPopup(provider);
      await dispatch(fbLoginSuccess(result));
    } catch (err) {
      await dispatch(fbLoginErr(err));
    }
  };
};

const fbAuthLoginWithFacebook = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    const provider = new fb.auth.FacebookAuthProvider();
    try {
      await dispatch(fbLoginBegin());
      const result = await fb.auth().signInWithPopup(provider);
      await dispatch(fbLoginSuccess(result));
    } catch (err) {
      await dispatch(fbLoginErr(err));
    }
  };
};

export { fbAuthLogin, fbAuthLogout, fbAuthSignUp, fbAuthLoginWithGoogle, fbAuthLoginWithFacebook };
