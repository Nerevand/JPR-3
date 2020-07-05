import { combineReducers } from "redux";

import { snackBar } from "./test";
import { currentAnswer } from "../pages/Quizlet/reducer";
import { getResults } from "../pages/Leaderboard/reducer";

export const rootReducer = combineReducers({
  snackBar,
  answer: currentAnswer,
  results: getResults,
});
