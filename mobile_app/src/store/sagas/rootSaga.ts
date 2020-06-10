import saga from "redux-saga";
import { all, takeLatest, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
// import {사가 함수들이 들어감}  from 'redux-saga/effects'
export default function* rootSaga() {
  console.log("연결");
  yield all([fork(authSaga)]);
}
