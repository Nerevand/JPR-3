import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

import { Typography } from "../ui";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link to="/">
          <Typography variant="h2" color="inherit">
            Quiz app
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
