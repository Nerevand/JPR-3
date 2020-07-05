const initialState: object = {
  open: false,
  message: "",
  type: "success",
};

export function snackBar(state = initialState, { type, payload }: any): any {
  if (type === "SHOW_SNACKBAR") {
    return payload;
  }
  return state;
}
