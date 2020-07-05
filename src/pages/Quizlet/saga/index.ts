import { SHOW_SNACKBAR, CURRENT_ANSWER, RESET_ANSWER } from "../reducer/actions";

export const actionSetAnswer = (payload: string) => ({
  type: CURRENT_ANSWER,
  payload,
});

export const actionResetAnswer = () => ({
  type: RESET_ANSWER,
  payload: false,
});

export const actionSetSnackbar = (payload: any) => ({
  type: SHOW_SNACKBAR,
  payload,
});
