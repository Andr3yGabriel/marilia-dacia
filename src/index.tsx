import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MockupCompleto } from "./screens/MockupCompleto";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MockupCompleto />
  </StrictMode>,
);
