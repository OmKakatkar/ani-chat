import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { token } = useSelector((store) => store.auth);
	return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
