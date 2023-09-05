import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/layout";
import AuthRouter from "./pages/auth";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={{}}>
      <div style={{ width: "100vw", height: "100vh" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="auth/*" element={<AuthRouter />} />
              <Route path="*" element={<Navigate to={"/"} replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
