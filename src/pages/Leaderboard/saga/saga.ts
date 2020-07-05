import { put, call } from "redux-saga/effects";

import { GET_RESULTS, GET_RESULTS_ASYNC } from "../reducer/actions";

import { customLocalStorage } from "../../../constants";

const getAllResults: any = (): any => {
  const data: any = customLocalStorage.getItem("results");

  data.sort((a: any, b: any): any => {
    const llc: any = b.score > a.score; //llc - left left condition
    const lrc: any = a.score > b.score; //lrc - left right condition
    const leftCondition: any = llc - lrc;
    const rlc: any = b.time > a.time;
    const rrc: any = a.time > b.time;
    const rightCondition: any = rlc - rrc;

    return leftCondition || rightCondition;
  });

  const dataWithPositions: any = data.map((item: any, index: any) => {
    return {
      position: index + 1,
      ...item,
      score: `${item.score}/10`,
      time: `${item.time}s`,
    };
  });
  return dataWithPositions;
};

export const getResultsAction = () => ({
  type: GET_RESULTS_ASYNC,
});

export function* getResultSaga(): any {
  try {
    const data = yield call(getAllResults);
    yield put({ type: GET_RESULTS, payload: data });
  } catch (e) {
    console.log(e);
  }
}
