import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useDispatch } from "react-redux";

import { Box } from "../../../components/ui";

import { contentComponent } from "../../../dataBase/contentComponent";

import { actionSetAnswer } from "../saga";

export default function StepSimple(props: any) {
  const dispatch: any = useDispatch();
  const [value, setValue] = useState("");
  const {
    answer,
    store: { title, content, questions },
  } = props;

  useEffect(() => {
    if (answer) setValue(answer);
  }, [answer]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value);
    dispatch(actionSetAnswer(value));
  };

  return (
    <Box p={3}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
        {content !== undefined ? contentComponent[content] : null}
        <RadioGroup value={value} onChange={handleChange}>
          {questions.map(({ id, title }: any) => (
            <FormControlLabel
              key={id}
              value={title}
              control={<Radio />}
              label={title}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
