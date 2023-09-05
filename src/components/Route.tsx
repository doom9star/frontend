import { Navigate, Route, RouteProps } from "react-router-dom";
import { useGlobalState } from "../redux/slices/global";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { user } = useGlobalState();
  if (!user) return <Navigate to="/login" />;
  return <Route {...props} />;
};

export const PublicRoute: React.FC<RouteProps> = (props) => {
  const { user } = useGlobalState();
  if (user) return <Navigate to="/home" />;
  return <Route {...props} />;
};
