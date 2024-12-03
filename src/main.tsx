import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import TooltipPage from "./pages/TooltipPage";
import SliderPage from "./pages/SliderPage";
import PopupPage from "./pages/PopupPage";
import App from "./App";
import AlertPage from "./pages/AlertPage";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path={import.meta.env.VITE_BASE_URL} element={<App />}>
        <Route path="tooltip-page" element={<TooltipPage />} />
        <Route path="popup-page" element={<PopupPage />} />
        <Route path="slider-page" element={<SliderPage />} />
        <Route path="alert-page" element={<AlertPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
