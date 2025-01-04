import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Feature } from "./routes/Feature";

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/features', element: <Feature /> },

])