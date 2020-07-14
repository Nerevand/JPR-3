import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Box, Button, Typography } from "../components/ui";

import { customLocalStorage } from "../constants";

import { contentComponent } from "../dataBase/contentComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelTrue: {
      color: "green",
      fontWeight: "bold",
    },
    labelFalse: {
      color: "red",
      fontWeight: "bold",
    },
    labelDefault: {
      color: "black",
    },
    disabled: {
      color: "#3f51b5 !important",
    },
  })
);

function Result() {
  const classes = useStyles();
  const data: Array<any> = customLocalStorage.getItem("lastResult");

  const point: number = data.filter(
    ({ isCorrect, answer }: any): any => answer === isCorrect
  ).length;
  const rating: number = (point / data.length) * 100;

  const customClass = (answer: any, correct: string, title: string): any => {
    return answer === title
      ? answer === correct
        ? classes.labelTrue
        : classes.labelFalse
      : classes.labelDefault;
  };

  const componentType = (
    type: string,
    answer: string | Array<any>,
    isCorrect: string,
    questions: any
  ) => {
    switch (type) {
      case "simple":
        return (
          <RadioGroup value={answer}>
            {questions.map(({ id, title }: any) => (
              <FormControlLabel
                className={customClass(answer, isCorrect, title)}
                key={id}
                value={title}
                control={<Radio />}
                label={title}
              />
            ))}
          </RadioGroup>
        );
      case "multiple":
        return questions.map(({ id, title, name }: any) => {
          return (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  name={name}
                  color="primary"
                  className={classes.disabled}
                  disabled
                  checked={answer[name]}
                />
              }
              label={title}
            />
          );
        });

      default:
        return (
          <Typography variant="h2" gutterBottom>
            Your answer - {answer}
          </Typography>
        );
    }
  };

  return (
    <div>
      <h1> Your result is {rating}% </h1>
      {data.map(
        ({ title, content, isCorrect, answer, questions, id, type }: any) => {
          return (
            <Box
              p={3}
              key={id}
              style={{
                border: `2px solid ${isCorrect === answer ? "green" : "red"}`,
              }}
              my={2}
              mx={1}
            >
              <FormControl component="fieldset">
                <FormLabel component="legend">{title}</FormLabel>
                {content !== undefined ? contentComponent[content] : null}
                {componentType(type, answer, isCorrect, questions)}
              </FormControl>
            </Box>
          );
        }
      )}
      <Button
        component={Link}
        to="/leaderboard"
        variant="contained"
        color="primary"
      >
        Leaderboard
      </Button>
    </div>
  );
}

export default Result;
