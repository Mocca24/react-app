import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
  </StrictMode>
);
<div><p>
        <a
          href="https://github.com/Mocca24/react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        , by Cynthia Alvez
      </p></div>
