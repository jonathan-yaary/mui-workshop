import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const PopupPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Open Popup
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack
          justifyContent="space-around"
          alignItems="center"
          sx={{
            height: "30vh",
            width: "25vw",
          }}
        >
          <Typography variant="h6" color="primary">
            This is a Cool Popup!
          </Typography>
          <Typography variant="body1" color="textSecondary">
            feat: MUI
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default PopupPage;
