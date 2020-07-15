import React from "react";
import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export function Button(props: any) {
  const classes = useStyles();

  return <MuiButton {...props} className={classes.root} />;
}
