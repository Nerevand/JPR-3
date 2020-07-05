import * as ACTIONS from "./actions";

const initialState: string | boolean = false;

export function currentAnswer(
  state = initialState,
  { type, payload }: any
): string | boolean {
  if (type === ACTIONS.CURRENT_ANSWER || type === ACTIONS.RESET_ANSWER) {
    return payload;
  }
  return state;
}
