import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "../../components/ui";

import { customSesionStorage, customLocalStorage } from "../../constants";

import useSetAnswers from "./useSetAnswers";

function Landing() {
  const data: Array<any> = useMemo(useSetAnswers, []);
  const handleSetDataForQuestions = (): void => {
    const startOf: object = new Date();

    sessionStorage.clear();
    customSesionStorage.setItem("userAnswer", data);
    customSesionStorage.setItem("startOf", startOf);
  };

  const lastresult: Array<object> = customLocalStorage.getItem("lastResult");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="80vh"
    >
      <Button
        component={Link}
        to="/quizlet"
        onClick={handleSetDataForQuestions}
        variant="contained"
        color="primary"
      >
        Quiz
      </Button>
      <Button
        component={Link}
        to="/result"
        disabled={!lastresult}
        variant="contained"
        color="primary"
      >
        my last result
      </Button>
      <Button
        component={Link}
        to="/leaderboard"
        variant="contained"
        color="primary"
      >
        Leaderboard
      </Button>
    </Box>
  );
}

export default Landing;
