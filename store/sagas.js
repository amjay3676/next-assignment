import { takeLatest, put, call } from "redux-saga/effects";
import {
  signupUser,
  signupStart,
  signupSuccess,
  signupFailure,
} from "./actions";
import { signupApi } from "../pages/api/userApi";

function* signupWorker(action) {
  try {
    yield put(signupStart());
    const response = yield call(signupApi, action.payload); // Replace with your API call
    yield put(signupSuccess(response.data));
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* signupWatcher() {
  yield takeLatest(signupUser, signupWorker);
}

export default signupWatcher;
