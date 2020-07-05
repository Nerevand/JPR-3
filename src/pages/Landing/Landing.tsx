import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "../../components/ui";

import { customSesionStorage } from "../../constants";

import useSetAnswers from "./useSetAnswers";

function Landing() {
  const data: any = useMemo(useSetAnswers, []);

  const handleSetDataForQuestions = (): void => {
    const startOf: any = new Date();

    customSesionStorage.setItem("userAnswer", data);
    customSesionStorage.setItem("startOf", startOf);
  };

  const store: Array<object> = customSesionStorage.getItem("userAnswer");

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
        disabled={store ? false : true}
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
