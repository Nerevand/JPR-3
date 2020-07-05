import * as ACTIONS from "./actions";

import { customLocalStorage } from "../../../constants";

const initialState: any = customLocalStorage.getItem("results") || [];

export function getResults(
  state = initialState,
  { type, payload }: any
): string | boolean {
  if (type === ACTIONS.GET_RESULTS) {
    return payload;
  }
  return state;
}
