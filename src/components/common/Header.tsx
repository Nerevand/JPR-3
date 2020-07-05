import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { useMount } from "react-use";

import { Box, Typography } from "../ui";

import { data } from "../../dataBase/allQuestions";

import { customLocalStorage } from "../../constants";

function Header() {
  useMount(() => {
    customLocalStorage.setItem("data", data);
  });

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          <Link to="/">Quiz app</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
