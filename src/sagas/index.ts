import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { getResultSaga } from "../pages/Leaderboard/saga/saga";

const requestToServer = (payload: any): any => {
  return axios
    .get("https://dog.ceo/api/breeds/image/random", payload)
    .then((response) => response.data)
    .catch((err) => err);
};

export function* workerSaga(obj: any): any {
  //here we have obj(from ../App.js)
  try {
    const data = yield call(requestToServer, { random: "text" }); //call our axios function(also you can add params)

    yield put({ type: "INCREMENT", payload: data }); //write our data to redux store. Watch reducers file def.js
  } catch (e) {
    console.error(e); //dispatch your error here
  }
}

export default function* watcherSaga() {
  yield takeEvery("GET_RESULTS_ASYNC", getResultSaga);
  yield takeEvery("INCREMENT_ASYNC", workerSaga);
}
