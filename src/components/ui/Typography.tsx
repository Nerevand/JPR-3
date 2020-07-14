import React from "react";
import MuiTypography, { TypographyProps } from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    a: {
      color: "red",
    },
  },
}));

export function Typography(props: TypographyProps) {
  const classes = useStyles();
  return <MuiTypography {...props} className={classes.root} />;
}
