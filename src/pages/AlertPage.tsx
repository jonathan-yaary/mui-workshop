import { Button, Fade, Slide, Typography, Zoom } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const alertSx = {
  position: "fixed",
  bottom: "6vh",
  left: "10vw",
};

const AlertPage = () => {
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Stack sx={{ width: "30vw" }} spacing={2}>
      <Button
        sx={{
          color: "rgb(30, 70, 32)",
          backgroundColor: "rgb(237, 247, 237)",
          border: "1px solid rgb(30, 70, 32)",
        }}
        onClick={async () => {
          setSuccess(true);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setSuccess(false);
        }}
      >
        success
      </Button>

      <Button
        sx={{
          color: "rgb(1, 67, 97)",
          backgroundColor: "rgb(229, 246, 253)",
          border: "1px solid rgb(1, 67, 97)",
        }}
        onClick={async () => {
          setInfo(true);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setInfo(false);
        }}
      >
        info
      </Button>
      <Button
        sx={{
          color: "rgb(102, 60, 0)",
          backgroundColor: "rgb(255, 244, 229)",
          border: "1px solid rgb(102, 60, 0)",
        }}
        onClick={async () => {
          setWarning(true);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setWarning(false);
        }}
      >
        warning
      </Button>
      <Button
        sx={{
          color: "rgb(95, 33, 32)",
          backgroundColor: "rgb(253, 237, 237)",
          border: "1px solid rgb(95, 33, 32)",
        }}
        onClick={async () => {
          setError(true);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setError(false);
        }}
      >
        error
      </Button>

      <Slide direction="up" in={success} mountOnEnter unmountOnExit>
        <Alert severity="success" sx={alertSx}>
          This is a success Alert that SLIDES in.
        </Alert>
      </Slide>

      <Zoom in={info} mountOnEnter unmountOnExit>
        <Alert severity="info" sx={alertSx}>
          This is an info Alert that ZOOMS in.
        </Alert>
      </Zoom>

      <Fade in={warning} mountOnEnter unmountOnExit>
        <Alert severity="warning" sx={alertSx}>
          This is a warning Alert that FADES in.
        </Alert>
      </Fade>

      {error && (
        <Alert severity="error" sx={alertSx}>
          This is an error Alert without special effects.
        </Alert>
      )}
    </Stack>
  );
};

export default AlertPage;
