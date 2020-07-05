import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Box, Button } from "../components/ui";

import { customSesionStorage } from "../constants";

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
  })
);

function Result() {
  const classes = useStyles();
  const data: any = customSesionStorage.getItem("userAnswer");
  const point: any = data.filter(
    ({ isCorrect, answer }: any): any => answer === isCorrect
  ).length;
  const rating: number = (point / data.length) * 100;
  const customClass = (answer: string, correct: string, title: string): any => {
    return answer === title
      ? answer === correct
        ? classes.labelTrue
        : classes.labelFalse
      : classes.labelDefault;
  };

  return (
    <div>
      <h1> Your result is {rating}% </h1>
      {data.map(({ title, content, isCorrect, answer, questions, id }: any) => {
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
            </FormControl>
          </Box>
        );
      })}
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
