import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./Layout/Main";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />

        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  </StrictMode>
);
