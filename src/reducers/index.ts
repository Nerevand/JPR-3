import { combineReducers } from "redux";

import { currentAnswer } from "../pages/Quizlet/reducer";
import { getResults } from "../pages/Leaderboard/reducer";

export const rootReducer = combineReducers({
  answer: currentAnswer,
  results: getResults,
});
