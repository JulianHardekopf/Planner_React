import { Alert, Snackbar } from "@mui/material";
import React from "react";

export const Notifications = (props) => {
  const { notify, setNotify } = props;
  const handleClose = (event, reason) => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={1000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity="success" onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

// npm install @material-ui/lab
