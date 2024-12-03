import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const TooltipPage = () => {
  return (
    <Stack spacing={5}>
      <Tooltip title={`This one has a tooltip above it`} placement="top">
        <Button variant="outlined">Tooltip Above</Button>
      </Tooltip>

      <Tooltip title={`This one has a little arrow`} arrow>
        <Button variant="outlined">Tooltip With Arrow</Button>
      </Tooltip>

      <Tooltip title={`This one follows your cursor`} followCursor>
        <Button variant="outlined">Tooltip follows cursor</Button>
      </Tooltip>
    </Stack>
  );
};

export default TooltipPage;
