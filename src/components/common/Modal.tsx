import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { customSesionStorage } from "../../constants";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => {
    customSesionStorage.setItem("userName", name.trim());
    setOpen(false);
  };

  useEffect(() => {
    if (!customSesionStorage.getItem("userName")) {
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Set up your nickname</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your nickname</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={name}
            onChange={({ target }) => setName(target?.value)}
            label="Nickname"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={!name.length} color="primary">
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
