import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Login from "./Login";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to={"login"} replace />} />
      </Route>
    </Routes>
  );
}
