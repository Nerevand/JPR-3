import React from "react";
import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px",
  },
}));

export function Button(props: any) {
  const classes = useStyles();

  return <MuiButton {...props} className={classes.root} />;
}
