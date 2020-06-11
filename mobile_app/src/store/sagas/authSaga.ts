/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest, put } from "redux-saga/effects";
import callLoginApi from "../../core/apis/signin";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../module/auth";

export default function* authSaga() {
  yield all([takeLatest(USER_LOGIN_REQUEST, fetchUserInfo$)]);
}

function* fetchUserInfo$(action: any) {
  const { payload } = action;
  try {
    const res = yield callLoginApi(payload.loginValue);
    const userInfo = { ...res.data };
    yield put({ type: USER_LOGIN_SUCCESS, payload: { userInfo } });
  } catch (e) {
    console.log(e.response.data);
    yield put({ type: USER_LOGIN_FAILURE, payload: { text: e.response.data } });
  }
}
