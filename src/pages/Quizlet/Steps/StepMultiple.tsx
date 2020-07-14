import React, { useEffect, useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import { useDispatch } from "react-redux";

import { contentComponent } from "../../../dataBase/contentComponent";

import { actionSetAnswer } from "../saga";

export default function StepMultiple(props: any) {
  const dispatch: any = useDispatch();
  const [state, setState] = useState({});
  const {
    answer,
    store: { title, content, questions },
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data: any = { ...state, [event.target.name]: event.target.checked };

    setState(data);
    dispatch(actionSetAnswer(data));
  };

  useEffect(() => {
    if (answer) setState(answer);
  }, [answer]);

  return (
    <FormGroup row={false}>
      <FormLabel component="legend">{title}</FormLabel>
      {content !== undefined ? contentComponent[content] : null}
      {questions.map(({ id, title, name }: any) => (
        <FormControlLabel
          key={id}
          control={
            <Checkbox
              onChange={handleChange}
              name={name}
              color="primary"
              defaultChecked={answer ? answer[name] : false}
            />
          }
          label={title}
        />
      ))}
    </FormGroup>
  );
}
