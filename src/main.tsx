import { createRoot } from "react-dom/client";
import { Suspense, StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Suspense fallback={<div style={{ width: '100%', height: '100vh', backgroundColor: '#000' }} />}>
        <App />
      </Suspense>
    </StrictMode>
  );
}
