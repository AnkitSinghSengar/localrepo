import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import GroupChat from "./components/GroupChat";
import Logouts from "./components/Logouts";
import ManageUsers from "./components/ManageUsers";
import ManageDocuments from "./components/ManageDocuments";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="GroupChat" element={<GroupChat />} />
      <Route path="ManageUsers" element={<ManageUsers />} />
      <Route path="ManageDocuments" element={<ManageDocuments />} />
      <Route path="Logouts" element={<Logouts />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
