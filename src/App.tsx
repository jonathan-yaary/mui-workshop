import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Outlet, useLocation, useNavigate } from "react-router";

import "./app.scss";

const MainPage = () => {
  const buttons = [
    { name: "Tooltip Page", path: "tooltip-page" },
    { name: "Popup Page", path: "popup-page" },
    { name: "Slider Page", path: "slider-page" },
    { name: "Alert Page", path: "alert-page" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location:", location);

  return (
    <>
      <Stack
        flexDirection="row"
        width="90vw"
        height="10vh"
        justifyContent="space-evenly"
      >
        {buttons.map(({ name, path }) => (
          <Button
            className={
              location.pathname === `/${path}` ? "active" : "rainbow-button"
            }
            key={name}
            onClick={() => navigate(path)}
            disabled={location.pathname === `/${path}`}
          >
            {name}
          </Button>
        ))}
      </Stack>
      <Stack
        width="90vw"
        height="80vh"
        alignItems="center"
        justifyContent="center"
      >
        <Outlet />
      </Stack>
    </>
  );
};

export default MainPage;
