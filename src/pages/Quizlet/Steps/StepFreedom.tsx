import React, { useEffect, useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { contentComponent } from "../../../dataBase/contentComponent";

import { actionSetAnswer } from "../saga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function StepMultiple(props: any) {
  const dispatch: any = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState("");
  const {
    answer,
    store: { title, content },
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(actionSetAnswer(event.target.value));
  };

  useEffect(() => {
    if (answer) setValue(answer);
  }, [answer]);

  return (
    <FormGroup row={false}>
      <FormLabel component="legend">{title}</FormLabel>
      {content ? contentComponent.get(content) : null}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter your answer here..."
          type="search"
        />
      </form>
    </FormGroup>
  );
}
