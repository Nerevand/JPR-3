import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useMount } from "react-use";

import { StepSimple, StepMultiple, StepFreedom } from "./Steps";
import { Modal } from "../../components/common";

import { actionResetAnswer } from "./saga";

import { customSesionStorage, customLocalStorage } from "../../constants";

interface RootState {
  answer: boolean | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["", "", "", "", "", "", "", "", "", ""];
}

function setTypeOfAnswer(data: any, step: any) {
  switch (data[step].type) {
    case "simple":
      return (
        <StepSimple
          answer={data[step]?.answer}
          step={step}
          store={data[step]}
        />
      );
    case "multiple":
      return (
        <StepMultiple
          answer={data[step]?.answer}
          step={step}
          store={data[step]}
        />
      );
    case "freeform":
      return (
        <StepFreedom
          answer={data[step]?.answer}
          step={step}
          store={data[step]}
        />
      );
    default:
      return "Unknown step";
  }
}

function getStepContent(step: number) {
  const data: any = customSesionStorage.getItem("userAnswer");

  return setTypeOfAnswer(data, step);
}

export default function Quizlet() {
  const dispatch: any = useDispatch();
  const value = useSelector((state: RootState) => state.answer);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set<number>());
  const [skipped, setSkipped] = useState(new Set<number>());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    const result: boolean = completedSteps() === totalSteps() - skippedSteps();

    if (result) {
      const results: any = customLocalStorage.getItem("results");

      const startOf: any = customSesionStorage.getItem("startOf");
      const currentTime = moment(new Date());
      const msFromStart: any = moment(startOf).valueOf();
      const msFromNow: any = moment(currentTime).valueOf();

      const myResult: any = customSesionStorage.getItem("userAnswer");
      const corectAnswers: any = myResult.filter(
        ({ isCorrect, answer }: any): any => answer === isCorrect
      ).length;
      const time: any = (msFromNow - msFromStart) / 1000;
      const name: any = customSesionStorage.getItem("userName");
      const data: any = {
        username: name,
        time: time,
        score: corectAnswers,
        id: `${name}-${startOf}`,
      };

      const check: any = results.some(
        (value: any): any => value.id === data.id
      );

      if (!check) {
        results.push({
          ...data,
        });
        customLocalStorage.setItem("results", results);
        customLocalStorage.setItem("lastResult", myResult);
      }
    }

    return result;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleSkip = (): void => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    dispatch(actionResetAnswer());
  };

  const handleComplete = () => {
    if (value) {
      const newCompleted = new Set(completed);
      const store: Array<object> = customSesionStorage.getItem("userAnswer");

      newCompleted.add(activeStep);
      setCompleted(newCompleted);

      store[activeStep] = Object.assign(store[activeStep], { answer: value });
      customSesionStorage.setItem("userAnswer", store);

      dispatch(actionResetAnswer());

      if (completed.size !== totalSteps() - skippedSteps()) {
        handleSkip();
      }
    }
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  function isStepComplete(step: number) {
    return completed.has(step);
  }

  useMount(() => {
    const newCompleted = new Set(completed);
    const userAnswer: Array<object> = customSesionStorage.getItem("userAnswer");

    userAnswer.forEach(({ answer }: any, index: number): any => {
      if (answer) {
        newCompleted.add(index);
      }
    });

    setCompleted(newCompleted);
  });

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const buttonProps: { optional?: React.ReactNode } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              Your results are ready
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/result"
              onClick={() => sessionStorage.clear()}
            >
              Show results
            </Button>
          </div>
        ) : (
          <div>
            <>{getStepContent(activeStep)}</>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSkip}
                className={classes.button}
              >
                Skip
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleComplete}
                disabled={value ? false : true}
              >
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Complete Step"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Modal />
    </div>
  );
}
