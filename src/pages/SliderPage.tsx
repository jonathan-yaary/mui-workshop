import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const SliderPage = () => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Stack height="20vh" width="30vw">
        <Slider
          valueLabelDisplay="auto"
          min={1}
          max={5}
          value={counter}
          onChange={(_, value) => setCounter(value as number)}
        />
      </Stack>

      <Stack
        height="30vh"
        width="100vw"
        flexDirection="row"
        gap="10rem"
        justifyContent="center"
      >
        {Array.from({ length: counter }).map((_, index) => (
          <Slider
            valueLabelDisplay="on"
            orientation="vertical"
            min={1}
            max={5}
            value={index + 1}
          />
        ))}
      </Stack>
    </>
  );
};

export default SliderPage;
