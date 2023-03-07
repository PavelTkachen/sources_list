import React from "react";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./helpers/requireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
