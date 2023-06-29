import React from "react";
import ReactDOM from "react-dom/client";
import Phone from "./components/phone/Phone";
import "./index.css";
import { VisibilityPhoneProvider } from "./providers/VisibilityPhoneProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityPhoneProvider>
      <Phone />
    </VisibilityPhoneProvider>
  </React.StrictMode>,
);